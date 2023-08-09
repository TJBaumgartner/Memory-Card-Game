function CardGrid({someArray}) {
    return (
      someArray.map(thing => <div key={thing}>{thing}</div>)
      )
  }
  
  export default CardGrid;