import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function CardLoader() {
  return (
    <div className="grid max-w-7xl mx-auto gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Card key={i} className="overflow-hidden rounded-2xl border-0  bg-gray-950">
          <Skeleton className="h-[200px] bg-gray-500 border border-gray-950" />
          <CardContent className="p-6">
            <div className="space-y-4">
              <Skeleton className="h-5 w-2/3 bg-gray-500" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full bg-gray-500" />
                <Skeleton className="h-4 w-5/6 bg-gray-500" />
              </div>
              <div className="flex justify-end">
                <Skeleton className="h-4 w-4 rounded-full bg-gray-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

