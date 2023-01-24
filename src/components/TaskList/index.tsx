import React, { useState } from 'react'
import { TasksProps } from '../../App'
import NoContentComponent from './NoContentComponent'
// import { tasks } from '../../data/db_fakedatatasks'
import TaskLine from './TaskLine'
import styles from './TaskList.module.css'



export function TaskList({ tasks }: TasksProps) {
  return (
    <div className={styles.body}>
      {
        tasks.length ? (
        tasks.map((task) => {
          return (
            <TaskLine done={task.done} content={task.taskContent} key={task.id} />
          )
        })
        ) : (
          <NoContentComponent />
        )
      }
    </div>
  )
}
