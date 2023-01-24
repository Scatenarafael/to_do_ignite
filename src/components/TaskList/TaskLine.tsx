import React, { ImgHTMLAttributes } from 'react'
import styles from './TaskLine.module.css'

interface TaskLineProps extends ImgHTMLAttributes<HTMLImageElement> {
  done: boolean
  content: string
}

export default function TaskLine({done = false, content, ...props}: TaskLineProps) {
  return (
    <div className={styles.taskLine}>
      <img src={done ? '/src/assets/check-done.svg' : '/src/assets/check-undone.svg'} alt={props.alt} />
      <p className={done ? styles.lineThrough : styles.lineThroughNone}>{content}</p>
    </div>
  )
}
