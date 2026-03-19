import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export function FeedSkeleton({ length = 3 }: { length?: number }) {
  return (
    <>
      {Array.from({ length: length }).map((_, i) => (
        <Card key={i} size="sm" className="mx-auto w-full max-w-2xl">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Skeleton className="size-10 rounded-full" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>
            <Skeleton className="ml-auto h-6 w-20 rounded-full" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
          <Separator className="my-2" />
          <CardFooter className="p-0">
            <div className="flex items-center gap-4 px-6 pb-4">
              <Skeleton className="h-8 w-16 rounded-md" />
              <Skeleton className="h-8 w-24 rounded-md" />
            </div>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
