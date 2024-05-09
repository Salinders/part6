import anecdoteService from '../services/anecdotes'
import { createSlice } from '@reduxjs/toolkit'
const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addVote(state, action) {
      const id = action.payload.id
      const mmodifiedAnecdote = action.payload
      return state.map(anecdote => anecdote.id !== id ? anecdote : mmodifiedAnecdote)


    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }

  },

})
export const { addVote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions


export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const addVotes = id => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.updateVotes(id)
    dispatch(addVote(newAnecdote))
  }
}



export default anecdoteSlice.reducer