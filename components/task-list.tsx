import { Checkbox } from "@/components/ui/checkbox"
import { Pencil, Trash2 } from 'lucide-react'

interface Task {
  id: number
  name: string
  completed: boolean
}

interface TaskListProps {
  tasks: Task[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  return (
    <ul className="divide-y divide-gray-200">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`p-4 flex items-center justify-between space-x-2 transition-all duration-300 ${
            task.completed ? "bg-gray-50" : ""
          }`}
        >
          <div className="flex items-center space-x-3 flex-grow">
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => onToggle(task.id)}
              id={`task-${task.id}`}
            />
            <label
              htmlFor={`task-${task.id}`}
              className={`flex-grow ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.name}
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <button
              aria-label="Edit task"
              className="text-gray-400 hover:text-gray-600"
            >
              <Pencil className="h-4 w-4" />
            </button>
            <button
              onClick={() => onDelete(task.id)}
              aria-label="Delete task"
              className="text-gray-400 hover:text-red-600"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

