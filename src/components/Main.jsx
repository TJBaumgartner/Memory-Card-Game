import CardGrid from "./cardComponents/CardGrid";
import {useState} from 'react'
import shepard from '../images/shepard.png'
import chi from '../images/chi.png'
import corgi from '../images/corgi.png'
import dachshund from '../images/dachshund.png'
import husky from '../images/husky.png'
import mastif from '../images/mastif.png'
import poodle from '../images/poodle.png'
import shiba from '../images/shiba.png'
import terrier from '../images/terrier.png'
import bulldog from '../images/bulldog.png'

function Main() {
    const dogBreeds = {
        'shepard': shepard,
        'chi': chi,
        'corgi': corgi,
        'dachshund': dachshund,
        'husky': husky,
        'mastif': mastif,
        'poodle': poodle,
        'shiba': shiba,
        'terrier': terrier,
        'bulldog': bulldog,
    }
    const [dogArray, setDogArray] = useState(Object.entries(dogBreeds));
    const [clickedDogs, setClickedDogs] = useState([])
    const [count, setCount] = useState(0);
    const [highScore, setHighScore] = useState(0)
    function shuffleArray(dog) {
      if(clickedDogs.includes(dog)){
        setCount(0);
        setClickedDogs([]);
        if(count >= highScore){
          setHighScore(count);
        }
      }else{
        setCount(count + 1);
        setClickedDogs([...clickedDogs, dog]);
      }
      const newArray = [...dogArray];
      for (var i = newArray.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = newArray[i];
          newArray[i] = newArray[j];
          newArray[j] = temp;
      }
      setDogArray(newArray);
    }

    return (
      <div className='Main'>
          <div>{count}{highScore}</div>
        <div className="cardGrid">
            <CardGrid dogBreeds={dogArray} shuffleArray={shuffleArray}></CardGrid>
        </div>
      </div>
    )
  }
  
  export default Main;
  