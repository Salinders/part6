import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'
export const createAnecdote = async newNote =>
    await axios.post(baseUrl, newNote).then(res => res.data)

export const getAnecdotes = async () => {
    await axios.get(baseUrl).then(res => res.data)
}

export const updateAnecdotes = async updatedAnecdote => {
    await axios.put(`${baseUrl}/${updatedAnecdote.id}`, updatedAnecdote)
        .then(res => res.data)
}