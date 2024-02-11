import { useState } from "react"
import AcencodteButton from "./anecdote-button"
import AnecdoteLine from "./anecdote-line";
import { ANECDOTES } from "./anecdotes";
import VoteButton from "./vote-button";

export function App() {

   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(ANECDOTES.length).fill(0));

  const selectRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * ANECDOTES.length);
    setSelected(randomIndex);
  };

  const addVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes); 
    console.log(newVotes);
  };

  const selectAnecdoteWithMostVotes = () => {
    let maxIndex = 0;
    for (let i = 1; i < votes.length; i++) {
      if (votes[i] > votes[maxIndex]) {
        maxIndex = i;
      }
    }
    return ANECDOTES[maxIndex];
  }


  return (
    <>
      
      <AnecdoteLine title={'Anecdote of the day'} selectedAnecdote={ANECDOTES[selected]} />
      <VoteButton onClick={addVote} />
      <AcencodteButton onClick={selectRandomAnecdote}/>
      <AnecdoteLine title={'Anecdote with most votes'} selectedAnecdote={selectAnecdoteWithMostVotes(votes)} />
    </>
  )
}

export default App
