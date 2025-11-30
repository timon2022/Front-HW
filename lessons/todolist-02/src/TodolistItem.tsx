import { ChangeEvent, useRef, useState, KeyboardEvent } from 'react'
import type { FilterValues, Task } from './App'
import { Button } from './Button'

type Props = {
  title: string
  tasks: Task[]
  deleteTask: (taskId: Task["id"]) => void
  changeFilter: (value: FilterValues) => void
  createTask: (value: Task['title']) => void
  changeTaskStatus: (id: Task['id'], satusValue: Task['isDone']) => void
  filter: FilterValues

}

export const TodolistItem = ({ title, tasks, deleteTask, changeFilter, createTask, changeTaskStatus, filter }: Props) => {

  const [taskTitle, setTitle] = useState('')
  const [error, setError] = useState<string | null>(null)
  // useRef - недостаток: нельзя получить значение после каждого введенного символа
  // const inputRef = useRef<HTMLInputElement>(null)

  const createTaskHandler = () => {
    if (taskTitle.trim() !== '') {
      createTask(taskTitle.trim())
      setTitle('')
    } else {
      setError('Title is required')
    }

  }
  const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
    setError(null)

  }
  const createTaskOnEnterHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      createTaskHandler()
    }
  }
  const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>, id: Task['id']) => {
    changeTaskStatus(id, e.currentTarget.checked)

  }
  return (
    <div>
      <h3>{title}</h3>
      <div>
        {/* <input ref={inputRef} />
          <Button title={'+'} onClick={()=>{
            if(inputRef.current)
            {
              createTask(inputRef.current.value)
              inputRef.current.value=''
            }
          }} /> */}
        <input
          className={error ? 'error' : ''}
          value={taskTitle}
          onChange={changeTaskTitleHandler}
          onKeyDown={createTaskOnEnterHandler}
        />
        <Button title={'+'} onClick={createTaskHandler}></Button>
        {error && <div className={'error-message'}>{error}</div>}

      </div>
      {tasks.length === 0 ? (
        <p>Тасок нет</p>
      ) : (
        <ul>
          {tasks.map(task => {
            return (
              <li key={task.id} className={task.isDone ? 'is-done' : ''}>
                <input type="checkbox" checked={task.isDone} onChange={(e) => { changeTaskStatusHandler(e, task.id) }} />
                <span>{task.title}</span>
                <Button onClick={() => { deleteTask(task.id) }} title='x'></Button>
              </li>
            )
          })}
        </ul>
      )}
      <div>
        <Button
          className={filter === 'all' ? 'active-filter' : ''}
          title={'All'} onClick={() => changeFilter("all")} />
        <Button
          className={filter === 'active' ? 'active-filter' : ''}
          title={'Active'} onClick={() => changeFilter("active")} />
        <Button
          className={filter === 'completed' ? 'active-filter' : ''}
          title={'Completed'} onClick={() => changeFilter("completed")} />
      </div>
    </div>
  )
}
