"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ArrowUpIcon,
  MessageCircleDashedIcon,
  RotateCwIcon,
  XIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/components/ui/message";

import { Bubble, BubbleContent } from "@/components/ui/bubble";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypingIndicator } from "./typing-indicator";
type ChatbotProps = {
  onClose: () => void;
};

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    content:
      "Hi! I'm Lancaster, Raven's portfolio assistant. Feel free to ask about his projects, experience, or technologies.",
  },
];

export function Chatbot({ onClose }: ChatbotProps) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isBusy, setIsBusy] = useState(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, input]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const content = input.trim();

    if (!content || isBusy) {
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content,
    };

    const assistantMessage: Message = {
      id: Date.now() + 1,
      role: "assistant",
      content: "",
    };

    const conversation = [...messages, userMessage];

    setMessages([...conversation, assistantMessage]);

    setInput("");
    setIsBusy(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: conversation.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get chatbot response.");
      }

      if (!response.body) {
        throw new Error("Response body is unavailable.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        const chunk = decoder.decode(value, {
          stream: true,
        });

        setMessages((current) =>
          current.map((message) =>
            message.id === assistantMessage.id
              ? {
                  ...message,
                  content: message.content + chunk,
                }
              : message,
          ),
        );
      }
    } catch (error) {
      console.error(error);

      setMessages((current) =>
        current.map((message) =>
          message.id === assistantMessage.id
            ? {
                ...message,
                content:
                  "Sorry, I couldn't respond right now. Please try again.",
              }
            : message,
        ),
      );
    } finally {
      setIsBusy(false);
    }
  };

  return (
    <Card
      className="
        fixed right-5 bottom-22 z-50
        h-[min(28rem,calc(100vh-7rem))]
        w-[min(20rem,calc(100vw-7rem))]
        max-w-sm gap-0 overflow-hidden
        shadow-xl
        sm:right-7 sm:bottom-24
      "
    >
      {/* Header */}
      <CardHeader className="shrink-0 gap-1 border-b">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="relative shrink-0">
            <Avatar>
              <AvatarImage
                src="/profile/raven.jpg"
                alt="Raven Magbanua"
                className="object-cover"
              />
              <AvatarFallback>RM</AvatarFallback>
            </Avatar>

            {/* Online indicator */}
            <span
              aria-label="Online"
              className="absolute right-0 bottom-0 size-2.5 rounded-full border-2 border-background bg-emerald-500"
            />
          </div>

          {/* Name + Status */}
          <div className="min-w-0">
            <CardTitle className="truncate text-sm font-semibold">
              Chat with Raven
            </CardTitle>

            <CardDescription className="mt-0.5 flex items-center gap-1.5 text-xs text-emerald-500">
              <span>Online</span>
            </CardDescription>
          </div>
        </div>

        <CardAction className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close chat"
            onClick={onClose}
          >
            <XIcon className="size-4" />
          </Button>
        </CardAction>
      </CardHeader>

      {/* Messages */}
      <CardContent className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden p-3">
        {messages.length === 0 ? (
          <Empty className="h-full">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <MessageCircleDashedIcon />
              </EmptyMedia>

              <EmptyTitle>Let&apos;s chat</EmptyTitle>

              <EmptyDescription>
                Ask about my projects, experience, technologies, or background.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        ) : (
          <div className="flex flex-col gap-4">
            {messages.map((message, index) => {
              const isUser = message.role === "user";

              const isLastMessage = index === messages.length - 1;

              const isTyping =
                !isUser &&
                isLastMessage &&
                isBusy &&
                message.content.length === 0;

              const isStreaming =
                !isUser &&
                isLastMessage &&
                isBusy &&
                message.content.length > 0;

              return (
                <Message key={message.id} align={isUser ? "end" : "start"}>
                  {!isUser && (
                    <MessageAvatar>
                      <Avatar className="size-7">
                        <AvatarImage
                          src="/profile/raven.jpg"
                          alt="Raven"
                          className="object-cover"
                        />
                        <AvatarFallback>RM</AvatarFallback>
                      </Avatar>
                    </MessageAvatar>
                  )}

                  <MessageContent className="max-w-[80%]">
                    <Bubble variant={isUser ? "default" : "muted"}>
                      <BubbleContent className="whitespace-pre-wrap wrap-anywhere">
                        {isTyping ? (
                          <TypingIndicator />
                        ) : (
                          <>
                            {message.content}

                            {isStreaming && (
                              <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-current align-middle" />
                            )}
                          </>
                        )}
                      </BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              );
            })}
            {/* Auto-scroll target */}
            <div ref={messagesEndRef} />
          </div>
        )}
      </CardContent>

      {/* Input */}
      <CardFooter className="shrink-0 border-t p-3">
        <form onSubmit={handleSubmit} className="w-full">
          <InputGroup>
            <InputGroupTextarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={isBusy ? "" : "Ask me something..."}
              disabled={isBusy}
              maxLength={1000}
              className="min-h-9 max-h-20 resize-none overflow-y-auto"
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey && !isBusy) {
                  event.preventDefault();
                  event.currentTarget.form?.requestSubmit();
                }
              }}
            />

            <InputGroupAddon align="block-end">
              <InputGroupButton
                type="submit"
                variant="default"
                size="icon-sm"
                disabled={!input.trim() || isBusy}
                className="ml-auto"
              >
                <ArrowUpIcon />
                <span className="sr-only">Send message</span>
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </CardFooter>
    </Card>
  );
}
