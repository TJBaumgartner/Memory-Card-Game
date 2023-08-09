import CardGrid from "./cardComponents/CardGrid";
import { useEffect, useState} from 'react'
function Main() {
    const someArray = {
        Thing1: 'imageUrl1',
        Thing2: 'imageUrl2',
        Thing3: 'imageUrl3',
        Thing4: 'imageUrl4',
        Thing5: 'imageUrl5',
        Thing6: 'imageUrl6',
        Thing7: 'imageUrl7',
        Thing8: 'imageUrl8',
        Thing9: 'imageUrl9',
        Thing10: 'imageUrl10',
    }
    const [thingArray, setThingArray] = useState(Object.keys(someArray));
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
        <CardGrid someArray={thingArray}></CardGrid>
        <button onClick={shuffleArray}>Click Me</button>
      </div>
    )
  }
  
  export default Main;
  