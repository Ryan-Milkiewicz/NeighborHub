"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

const postTypes = [
  { type: "general", emoji: "💬", label: "General" },
  { type: "alert", emoji: "⚠️", label: "Alert" },
  { type: "event", emoji: "📅", label: "Event" },
  { type: "free", emoji: "🎁", label: "Free Stuff" },
] as const;

type PostType = (typeof postTypes)[number]["type"];

export function PostForm({ initials }: { initials: string }) {
  const [selectedType, setSelectedType] = useState<PostType>("general");
  const [post, setPost] = useState<string>("");

  // Create post mutation
  const createPost = useMutation(api.posts.createPost);

  const handleSubmit = async () => {
    if (!post.trim()) return;
    await createPost({ post, type: selectedType });
    setPost("");
  };
  return (
    <Card size="sm" className="mx-auto w-full max-w-2xl">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">
            What's on your mind?
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <Textarea
          value={post}
          onChange={(e) => setPost(e.target.value)}
          placeholder="What's happening in the neighborhood?"
          className="min-h-[80px] resize-none border-none shadow-none focus-visible:ring-0"
        />
      </CardContent>
      <Separator className="my-2" />
      <CardFooter className="flex items-center justify-between">
        <div className="flex gap-2">
          {postTypes.map(({ type, emoji, label }) => (
            <Badge
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedType(type)}
            >
              {emoji} {label}
            </Badge>
          ))}
        </div>
        <Button size="sm" onClick={handleSubmit} disabled={!post.trim()}>
          Post
        </Button>
      </CardFooter>
    </Card>
  );
}
