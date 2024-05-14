import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../request'
import { useNotificationDispatch } from '../notificationContext'


const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const dispatch = useNotificationDispatch()

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote))
      //queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    },
    onError: () => {
      dispatch({type: 'showNotification', payload:`too short, anecdote must have a length of 5`})
      setTimeout(()=> {
        dispatch({type: 'hideNotification'})
      }, 5000)
    }
  })

  const addAnecdote = async (event) => {
    const genId = () => (Math.random() * 10000).toFixed(0)
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, id: genId(), votes: 0 })
    
    await dispatch({type: 'showNotification', payload:`You added: ${content}`})
    setTimeout(()=>{
      dispatch({type:'hideNotification'})
    }, 5000)
  }

  return (
    <div>
      <form onSubmit={addAnecdote}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
