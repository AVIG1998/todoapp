import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from 'lucide-react'

export function InputSection({ onAddTask }: { onAddTask: (name: string) => void }) {
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      onAddTask(input.trim())
      setInput("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 flex space-x-2">
      <Input
        type="text"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow"
      />
      <Button type="submit" size="icon">
        <Plus className="h-4 w-4" />
        <span className="sr-only">Add task</span>
      </Button>
    </form>
  )
}

