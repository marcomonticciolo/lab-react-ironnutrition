import logo from './logo.svg';
import './App.css';
import foods from './foods.json';

import { useState, useEffect } from 'react';
import FoodBox from './components/foodBox';


import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodForm from './components/AddFoodForm';

import SearchFood from './components/search';



function App() {
  
  const [food, setFoodDisplayed] = useState(foods)

  const [newFoodName, setNewFood] =useState('')
  
  const [newFoodImage, setNewImage] =useState('')
  
  const [newCalories, setCaloriesFood] =useState(1)

  const [newServings, setNewFoodServing] =useState(1)

  const [searchTerm, setSearchTerm] = useState('')


  const filtered = !searchTerm ? food : food.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))


    
  return (

    <div className="App">

<h1>Add food Entry</h1>

<FoodForm
  newFoodName={newFoodName}
  setNewFood={setNewFood}

  newFoodImage={newFoodImage}
  setNewImage={setNewImage}

  newCalories={newCalories}
  setCaloriesFood={setCaloriesFood}

  newServings={newServings}
  setNewFoodServing={setNewFoodServing}
  
  food={food}
  setFoodDisplayed={setFoodDisplayed}

  filtered={filtered}

  
/>



<Col>
<SearchFood
food={food}
setFoodDisplayed={setFoodDisplayed}
setSearchTerm={setSearchTerm}
searchTerm={searchTerm}
/>
        </Col>
      



<h1>Food List:</h1>

<Row>
 {filtered.map(foundFood => {
  return (
    <div>

      <FoodBox
         food={foundFood}
         foodArr={food}
         setFoodDisplayed={setFoodDisplayed}
      /> 

    </div>
  )
 })}
  </Row>


    </div>
  );
}

export default App;
