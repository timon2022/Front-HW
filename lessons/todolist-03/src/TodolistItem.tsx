import React, { useState } from 'react'
import type { FilterValues, Task } from './App'
import { Button } from './Button'

type TodolistItemProps = {
  title: string
  tasks: Task[]
  deleteTask: (taskId: Task['id']) => void
  changeFilter: (filter: FilterValues) => void
  createTask: (title: Task['title']) => void
}

export const TodolistItem = (props: TodolistItemProps) => {
  // { title, tasks, deleteTask, changeFilter }: TodolistItemProps
  const { title,
    tasks,
    deleteTask,
    changeFilter,
    createTask
  } = props

  const [taskInput, setTaskInpyt] = React.useState('')
  const taskInpytRef = React.useRef<HTMLInputElement>(null);

  return (
    <div>
      <h3>{title}</h3>
      <div>
        {/* <input ref={taskInpytRef} /> */}
        <input value={taskInput}
          onChange={(e) => setTaskInpyt(e.currentTarget.value)}
        />
        <Button dialog={taskInput.length < 3} title={'+'} onClick={() => {
            createTask(taskInput)
            setTaskInpyt("")
        }} />
        {taskInput && taskInput.length <= 10 && <div>max length mast be 10 charters</div>}
        {taskInput.length > 10 && <div style={{ color: "red" }}>task title is too long</div>}
      </div>
      {tasks.length === 0 ? (
        <p>Тасок нет</p>
      ) : (
        <ul>
          {tasks.map(task => {
            return (
              <li key={task.id}>
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
                <Button title={'x'} onClick={() => deleteTask(task.id)} />
              </li>
            )
          })}
        </ul>
      )}
      <div>
        <Button title={'All'} onClick={() => changeFilter('all')} />
        <Button title={'Active'} onClick={() => changeFilter('active')} />
        <Button title={'Completed'} onClick={() => changeFilter('completed')} />
      </div>
    </div>
  )
}
