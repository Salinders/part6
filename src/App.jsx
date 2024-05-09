import { useEffect } from 'react'
import AnecdotesList from './components/AnecdotesList'
import AnecdoteForm from './components/AnecdoteForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())

  }, [dispatch])


  return (
    <div>
      < Notification />

      <h2>Anecdotes</h2>
      <Filter />
      <AnecdotesList />
      <AnecdoteForm />
    </div>

  )
}

export default App