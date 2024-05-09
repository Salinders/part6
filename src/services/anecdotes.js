import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getId = () => (Math.random() * 100000).toFixed(0)

const createNew = async (content) => {
    const object = { content, id: getId(), votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
}


const updateVotes = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    const objectToModify = response.data
    const updatedObject = { ...objectToModify, votes: objectToModify.votes + 1 }
    const request = axios.put(`${baseUrl}/${id}`, updatedObject)
    return request.then(response => response.data)
}

export default { getAll, createNew, updateVotes }