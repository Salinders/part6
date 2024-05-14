# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

  const updateVoteMutation = useMutation({
    mutationFn: updateAnecdotes,
    onSuccess: (updatedAnecdote) => {

      console.log('update', updatedAnecdote)

      const anecdotes = queryClient.getQueryData('anecdotes')

      queryClient.setQueryData('anecdotes', anecdotes.map(anecdote =>

        anecdote.id === updatedAnecdote.id ? updatedAnecdote : anecdote

      ))