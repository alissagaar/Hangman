function HangmanWord() {
    const word = 'test'
  return (
    <div style={{display:'flex', gap: '.25em', fontSize:'6rem', fontWeight:'bold', textTransform:'uppercase', fontFamily:'monospace'}}>
        {word.split('').map((letter, index)=> (<span></span>))}
    </div>
  )
}

export default HangmanWord