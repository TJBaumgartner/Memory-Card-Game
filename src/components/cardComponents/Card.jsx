function Card({shuffleArray, thing}) {
      return (
        <div className='card' onClick={shuffleArray}><img src={thing[1]} className="dogImage"></img>{thing[0]}</div>
      )
    }
    
export default Card;