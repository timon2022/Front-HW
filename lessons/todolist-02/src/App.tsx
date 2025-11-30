import { useState } from 'react'
import './App.css'
import { TodolistItem } from './TodolistItem'
import { v1 as uuidv1, v4 as uuidv4, v1 } from 'uuid';
export type FilterValues = "all"|"active"|"completed"

export type Task = {
  id: string
  title: string
  isDone: boolean
}

export const App = () => {

  const [tasks, setTasks] = useState<Task[]>([
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
    { id: v1(), title: 'Redux', isDone: false },
    { id: v1(), title: 'Typescript', isDone: false },
    { id: v1(), title: 'RTK query', isDone: false },
  ])




  const [filter, setFilter] = useState<FilterValues>('all')

  let filteredTasks = tasks
  if (filter === 'active') {
    filteredTasks = tasks.filter((task) => !task.isDone )
    console.log(filter)
  }
  if (filter === 'completed') {
    filteredTasks = tasks.filter((task) => task.isDone)
    console.log(filteredTasks)
  }

  const createTask = (titleTask:Task['id']) => {
    const newTask : Task ={
      id: v1(),
      isDone: false,
      title: titleTask
    }
    // const newTask =  { id: v1(), title: 'HTML&CSS', isDone: true }
    const nextState:Task[] = [...tasks,newTask]
    setTasks(nextState)
    // alert('тасочка создана')
  }

  const deleteTask = (taskId: Task['id']) => {
    const nextState = tasks.filter((task) => task.id !== taskId)
    setTasks(nextState)
  }

  const changeFilter = (value: FilterValues) => {
    setFilter(value)
  }

  const changeTaskStatus = (id:Task['id'], satusValue:Task['isDone']) => 
  {
    const task  = tasks.find( (task) => task.id === id   )
    if(task)
    {
      task.isDone= satusValue
      setTasks([...tasks])
    }
  }
  return (
    <div className="app">
      <TodolistItem filter={filter} title="What to learn" tasks={filteredTasks} 
      deleteTask={deleteTask} 
      changeFilter={changeFilter} 
      createTask={createTask}
      changeTaskStatus={changeTaskStatus}
      />
    </div>
  )
}
