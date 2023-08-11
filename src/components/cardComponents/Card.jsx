function Card({shuffleArray, thing}) {
      return (
        <div className='Card' onClick={shuffleArray}>{thing}</div>
      )
    }
    
export default Card;