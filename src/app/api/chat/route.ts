import { openRouter } from "@/lib/openrouter";
import { portfolioSystemPrompt } from "@/lib/prompt";
import { NextRequest } from "next/server";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ChatRequestBody = {
  messages: ChatMessage[];
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ChatRequestBody;

    if (!Array.isArray(body.messages) || body.messages.length === 0) {
      return Response.json(
        {
          message: "Messages are required.",
        },
        {
          status: 400,
        },
      );
    }

    const recentMessages = body.messages.slice(-20);
    const stream = await openRouter.chat.send({
      chatRequest: {
        model:
          process.env.OPENROUTER_MODEL ?? "inclusionai/ling-3.0-flash:free",

        messages: [
          {
            role: "system",
            content: portfolioSystemPrompt,
          },
          ...recentMessages,
        ],

        stream: true,
      },
    });

    const encoder = new TextEncoder();
    const asyncStream = stream as AsyncIterable<{
      choices?: Array<{
        delta?: {
          content?: string;
        };
      }>;
    }>;

    const responseStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of asyncStream) {
            const content = chunk.choices?.[0]?.delta?.content;

            if (content) {
              controller.enqueue(encoder.encode(content));
            }
          }

          controller.close();
        } catch (error) {
          console.error("OpenRouter stream error:", error);
          controller.error(error);
        }
      },
    });

    return new Response(responseStream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);

    return Response.json(
      {
        message: "Unable to process the chat request.",
      },
      {
        status: 500,
      },
    );
  }
}
