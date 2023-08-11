function Card({shuffleArray, thing}) {
      return (
        <div className='Card' onClick={shuffleArray}>{thing[0]}</div>
      )
    }
    
export default Card;