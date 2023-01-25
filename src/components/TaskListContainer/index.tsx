import React, { useState } from 'react'
import { TaskListProps, TasksProps } from '../../App'
import { TaskList } from '../TaskList'
import styles from './TaskListContainer.module.css'


export function TaskListContainer({ tasks, toggleTaskDone, removeTask }: TasksProps ) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.newTasks}>
        <p>Tarefas criadas </p>
        <p>{tasks.length}</p>
        </div>
        <div className={styles.finishedTasks}>
        <p>Concluídas</p>
        <p>{`${tasks.filter((task) => { return task.done === true}).length} de ${tasks.length}`}</p>
        </div>
      </div>
      <TaskList tasks={tasks.sort((a, b) => {
        if (a.taskContent > b.taskContent) {
          return 1
        }
        if (a.taskContent < b.taskContent) {
          return -1
        }
        return 0
      })} 
      toggleTaskDone={toggleTaskDone} 
      removeTask={removeTask}
      />
    </div>
  )
}
