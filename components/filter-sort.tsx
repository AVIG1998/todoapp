import { Button } from "@/components/ui/button"
import { ArrowUpDown } from 'lucide-react'

export function FilterSort() {
  return (
    <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200">
      <div className="flex space-x-2">
        <Button variant="ghost" size="sm">All</Button>
        <Button variant="ghost" size="sm">Active</Button>
        <Button variant="ghost" size="sm">Completed</Button>
      </div>
      <Button variant="ghost" size="sm">
        <ArrowUpDown className="h-4 w-4 mr-2" />
        Sort
      </Button>
    </div>
  )
}

