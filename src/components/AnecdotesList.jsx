import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementVote } from '../reducers/anecdoteReducer';

const AnecdotesList = () => {
    const anecdotes = useSelector(state => {
        if (state.filter === null) {
            return state.anecdotes
                .sort((a, b) => b.votes - a.votes)
        }
        return state.anecdotes.filter((anecdote) =>
            anecdote.content.toLowerCase()
                .includes(state.filter.toLowerCase()))
            .sort((a, b) => b.votes - a.votes)
    })
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(incrementVote({ id: id }));
    };

    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>{anecdote.content}</div>
                    <div>
                        has: {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>Vote</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AnecdotesList;
