import Card from "./Card";

function CardGrid({someArray, shuffleArray}) {
    return (
      someArray.map(thing => <Card key={thing} shuffleArray={shuffleArray} thing={thing}></Card>)
      )
  }
  
  export default CardGrid;