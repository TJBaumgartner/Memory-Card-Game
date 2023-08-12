function Card({shuffleArray, dog}) {
      return (
        <div className='card' onClick={shuffleArray}>
            <img src={dog[1]} className="dogImage"></img>
            <div className="dogName">{dog[0]}</div>
        </div>
      )
    }
    
export default Card;