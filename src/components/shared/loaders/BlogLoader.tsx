import { Skeleton } from "@/components/ui/skeleton"

export default function BlogSkeleton() {
  return (
    <article className="max-w-4xl mx-auto space-y-8 p-6">
      <div className="space-y-4">
        <Skeleton className="h-12 w-3/4 bg-gray-200" />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4 bg-gray-200" />
            <Skeleton className="h-4 w-24 bg-gray-200" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4 bg-gray-200" />
            <Skeleton className="h-4 w-28 bg-gray-200" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Skeleton className="h-20 w-full bg-gray-200" />
        <Skeleton className="h-24 w-full bg-gray-200" />
      </div>

      <Skeleton className="h-8 w-2/3 bg-gray-200" />

      <div className="space-y-4">
        <Skeleton className="h-16 w-full bg-gray-200" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-32 bg-gray-200" />
          <Skeleton className="h-8 w-full bg-gray-200" />
        </div>
      </div>
    </article>
  )
}

