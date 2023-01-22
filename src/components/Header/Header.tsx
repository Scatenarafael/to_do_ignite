import React from 'react'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src="/src/assets/todo_logo.svg" alt="todo_logo" />
    </header>
  )
}
