import { Button } from "@/components/ui/button"

interface FooterProps {
  tasksRemaining: number
  onClearCompleted: () => void
}

export function Footer({ tasksRemaining, onClearCompleted }: FooterProps) {
  return (
    <footer className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t border-gray-200">
      <p className="text-sm text-gray-500">{tasksRemaining} tasks remaining</p>
      <Button variant="ghost" size="sm" onClick={onClearCompleted}>
        Clear Completed
      </Button>
    </footer>
  )
}

