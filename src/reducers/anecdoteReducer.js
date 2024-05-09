import { createSlice } from '@reduxjs/toolkit'
const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      state.push(
        action.payload
      )
    },
    incrementVote(state, action) {
      const id = action.payload.id
      const anecdoteToIncrement = state.find(n => n.id === id)
      console.log(anecdoteToIncrement)
      const mmodifiedAnecdote = {
        ...anecdoteToIncrement,
        votes: anecdoteToIncrement.votes + 1
      }
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




export const { createAnecdote, incrementVote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer