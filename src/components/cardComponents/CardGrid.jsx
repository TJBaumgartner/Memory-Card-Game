import Card from "./Card";

function CardGrid({dogBreeds, shuffleArray}) {
    return (
      dogBreeds.map(dog => <Card key={dog} shuffleArray={shuffleArray} dog={dog}></Card>)
      )
  }
  
  export default CardGrid;