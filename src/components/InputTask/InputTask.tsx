import React from 'react'
import styles from './InputTask.module.css'

export default function InputTask() {
  return (
    <div className={styles.inputTask}>
      <input type="text" placeholder='Adicione uma nova tarefa' />
      <button type="button">Criar <img src='/src/assets/plus_simbol.svg' /></button>
    </div>
  )
}
