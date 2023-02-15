function HangmanWord() {
    const word = 'test'
    const guessedLetters= ['t']
  return (
    <div style={{display:'flex', gap: '.25em', fontSize:'6rem', fontWeight:'bold', textTransform:'uppercase', fontFamily:'monospace'}}>
        {word.split('').map((letter, index)=> (
        <span key={index} style={{borderBottom: '.1em solid black'}}>
          <span style={{visibility:guessedLetters.includes(letter)? 'visible': 'hidden'}}>
          {letter}
          </span>
        </span>))}
    </div>
  )
}

export default HangmanWord