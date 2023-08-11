import CardGrid from "./cardComponents/CardGrid";
import {useState} from 'react'
import shepard from '../images/shepard.png'
import chi from '../images/chi.png'
import corgi from '../images/shepard.png'
import dachshund from '../images/dachshund.png'
import husky from '../images/husky.png'
import mastif from '../images/mastif.png'
import poodle from '../images/poodle.png'
import shiba from '../images/shiba.png'
import terrier from '../images/terrier.png'
import bulldog from '../images/bulldog.png'

function Main() {
    const someArray = {
        Thing1: shepard,
        Thing2: chi,
        Thing3: corgi,
        Thing4: dachshund,
        Thing5: husky,
        Thing6: mastif,
        Thing7: poodle,
        Thing8: shiba,
        Thing9: terrier,
        Thing10: bulldog,
    }
    const [thingArray, setThingArray] = useState(Object.entries(someArray));
    function shuffleArray() {
        const newArray = [...thingArray];
        for (var i = newArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = newArray[i];
            newArray[i] = newArray[j];
            newArray[j] = temp;
        }
        setThingArray(newArray);
    }
    return (
      <div className='Main'>
        <div className="cardGrid">
            <CardGrid someArray={thingArray} shuffleArray={shuffleArray}></CardGrid>
        </div>
      </div>
    )
  }
  
  export default Main;
  