import { Settings, User } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground p-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">To-Do List</h1>
      <div className="flex items-center space-x-4">
        <button aria-label="Settings">
          <Settings className="h-6 w-6" />
        </button>
        <button aria-label="User profile">
          <User className="h-6 w-6" />
        </button>
      </div>
    </header>
  )
}

