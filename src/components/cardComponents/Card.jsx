function Card({shuffleArray, thing}) {
      return (
        <div className='card' onClick={shuffleArray}>
            <img src={thing[1]} className="dogImage"></img>
            <div className="dogName">{thing[0]}</div>
        </div>
      )
    }
    
export default Card;