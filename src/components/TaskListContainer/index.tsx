import React, { useState } from 'react'
import { TaskListProps, TasksProps } from '../../App'
import { TaskList } from '../TaskList'
import styles from './TaskListContainer.module.css'


export function TaskListContainer({ tasks }: TasksProps ) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.newTasks}>
        <p>Tarefas criadas </p>
        <p>0</p>
        </div>
        <div className={styles.finishedTasks}>
        <p>Concluídas </p>
        <p>0</p>
        </div>
      </div>
      <TaskList tasks={tasks} />
    </div>
  )
}
