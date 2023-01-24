import React, { useState } from 'react'
import styles from './InputTask.module.css'

interface InputTaskProps {
  handleAddTask: (taskContent: string) =>  void
}

export default function InputTask({ handleAddTask }: InputTaskProps) {
  const [taskContentState, setTaskContentState] = useState('')

  return (
    <div className={styles.inputTask}>
      <input 
        type="text" 
        value={taskContentState} 
        onChange={(e) => {setTaskContentState(e.target.value)}}
        placeholder='Adicione uma nova tarefa' 
        />
      <button 
        type="button" 
        onClick={() => {
          handleAddTask(taskContentState)
          setTaskContentState('')
          }}
          >
          Criar 
          <img src='/src/assets/plus_simbol.svg' />
      </button>
    </div>
  )
}
