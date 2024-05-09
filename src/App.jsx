import { useEffect } from 'react'
import AnecdotesList from './components/AnecdotesList'
import AnecdoteForm from './components/AnecdoteForm'
import Filter from './components/Filter'
import ancedoteService from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    ancedoteService
      .getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  }, [dispatch])


  return (
    <div>
      <h2>Anecdotes</h2>

      <Filter />
      <AnecdotesList />
      <AnecdoteForm />
    </div>

  )
}

export default App