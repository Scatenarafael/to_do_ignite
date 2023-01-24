import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './components/Header/Header'
import InputTask from './components/InputTask/InputTask'
import { TaskListContainer } from './components/TaskListContainer'
import { v4 as v4uuid } from 'uuid'

export interface TaskListProps {
  id: string
  taskContent: string
  done: boolean
}

export interface TasksProps {
  tasks: TaskListProps[]
}

function App() {
  const [tasks, setTasks] = useState<TaskListProps[]>([])

  function addTask(taskContent: string): void {
    setTasks((oldState) => {
      return [ ...oldState, 
        {
        id: v4uuid(),
        taskContent,
        done: false
      }
    ]})}
  
  function removeTask(id: string): void {
    const newTaskArray = tasks.filter((task) => { return task.id !== id })
    setTasks(newTaskArray)
  }

  function toggleTaskDone(id: string):void {
    const partialNewTaskArray = tasks.filter((task) => { return task.id !== id })
    const taskToSetDone = tasks.find((task) => { return task.id === id}) ?? {id, taskContent: '', done: false}
    setTasks([
      ...partialNewTaskArray,
      {
        id,
        taskContent: taskToSetDone.taskContent,
        done: !taskToSetDone
      }
    ])
  }


return (
  <div>
    <Header />
    <div className={styles.container}>
      <InputTask handleAddTask={addTask} />
      <TaskListContainer tasks={tasks} />
    </div>
  </div>
)
}

export default App
