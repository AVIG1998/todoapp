'use client'

import { useState } from "react"
import { Header } from "./header"
import { InputSection } from "./input-section"
import { TaskList } from "./task-list"
import { FilterSort } from "./filter-sort"
import { Footer } from "./footer"

export function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Create wireframe", completed: false },
    { id: 2, name: "Develop UI", completed: false },
    { id: 3, name: "Test application", completed: true },
  ])

  const addTask = (name: string) => {
    setTasks([...tasks, { id: Date.now(), name, completed: false }])
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed))
  }

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
      <Header />
      <InputSection onAddTask={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      <FilterSort />
      <Footer tasksRemaining={tasks.filter(t => !t.completed).length} onClearCompleted={clearCompleted} />
    </div>
  )
}

