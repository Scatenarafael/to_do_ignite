import React, { ImgHTMLAttributes } from 'react'
import styles from './TaskLine.module.css'

interface TaskLineProps extends ImgHTMLAttributes<HTMLImageElement> {
  id: string
  done: boolean
  content: string
  toggleTaskDone: (id: string) => void
  removeTask: (id: string) => void
}

export default function TaskLine({id, done = false, content, toggleTaskDone, removeTask, ...props}: TaskLineProps) {
  return (
    <div 
      className={styles.taskLine}
      >
      <div 
        className={styles.DoneTaskContent}
        onClick={() => {toggleTaskDone(id)}}
        >
        <img 
          src={done ? '/src/assets/check-done.svg' : '/src/assets/check-undone.svg'} 
          alt={props.alt} 
        />
        <p className={done ? styles.lineThrough : styles.lineThroughNone}>{content}</p>
      </div>
      <button 
        className={styles.TrashBtn}
        onClick={() => { removeTask(id) }}
      >
          <img src="/src/assets/trash.svg" alt="delete-task" />
      </button>
    </div>
  )
}
