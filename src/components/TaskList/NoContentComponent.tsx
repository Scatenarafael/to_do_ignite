import React from 'react'
import styles from './NoContentComponent.module.css'

export default function NoContentComponent() {
  return (
    <div className={styles.noContentContainer}>
      <img src="/src/assets/Clipboard.svg" alt="clipboard" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
