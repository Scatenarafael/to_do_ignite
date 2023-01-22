import styles from './App.module.css'
import { Header } from './components/Header/Header'
import InputTask from './components/InputTask/InputTask'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <InputTask />
      </div>
    </div>
  )
}

export default App
