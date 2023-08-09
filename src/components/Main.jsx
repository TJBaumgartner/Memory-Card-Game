import CardGrid from "./cardComponents/CardGrid";
//import React, { useState, useEffect } from 'react'
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
    return (
      <div className='Main'>
        <CardGrid someArray={someArray}></CardGrid>
      </div>
    )
  }
  
  export default Main;
  