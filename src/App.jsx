import { useSelector, useDispatch } from 'react-redux'
import { createAnecdote, voteIncrement } from './reducers/anecdoteReducer'
const App = () => {
  const anecdotes = useSelector(state => state)
  const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes)
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
  }

  const vote = (id) => {
    dispatch(voteIncrement(id))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {sorted.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App