import { useSelector, useDispatch } from 'react-redux'
import { voteIncrement } from '../reducers/anecdoteReducer'

const AnecdotesList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state)
    const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes)

    const vote = (id) => {
        dispatch(voteIncrement(id))
    }

    return (
        <div>
            {sortedAnecdotes.map(anecdote =>
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
        </div>
    )
}

export default AnecdotesList