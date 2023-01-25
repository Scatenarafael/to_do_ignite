import React, { useState } from 'react'
import { TasksProps } from '../../App'
import NoContentComponent from './NoContentComponent'
// import { tasks } from '../../data/db_fakedatatasks'
import TaskLine from './TaskLine'
import styles from './TaskList.module.css'



export function TaskList({ tasks, toggleTaskDone, removeTask }: TasksProps) {
  return (
    <div className={styles.body}>
      {
        tasks.length ? (
        tasks.map((task) => {
          return (
            <TaskLine id={task.id} done={task.done} content={task.taskContent} removeTask={removeTask} toggleTaskDone={toggleTaskDone} key={task.id} />
          )
        })
        ) : (
          <NoContentComponent />
        )
      }
    </div>
  )
}
