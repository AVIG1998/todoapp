import { TodoList } from "@/components/todo-list"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <TodoList />
      </div>
    </main>
  )
}

