"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";

export function Comment({
  postId,
  isOpen,
}: {
  postId: string;
  isOpen: boolean;
}) {
  return (
    <Collapsible open={isOpen} className="w-full">
      <CollapsibleContent className="flex flex-col gap-2 w-full">
        <div className="flex items-start gap-3 rounded-md border px-4 py-2 text-sm">
          <Avatar className="size-7">
            <AvatarFallback className="text-xs">SR</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">Sara R.</p>
            <p className="text-muted-foreground">Thanks for the heads up!</p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-md border px-4 py-2 text-sm">
          <Avatar className="size-7">
            <AvatarFallback className="text-xs">TK</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">Tom K.</p>
            <p className="text-muted-foreground">Avoid 7th Ave for sure.</p>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
