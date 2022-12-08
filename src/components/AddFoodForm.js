import { Card, Row, Col, Divider, Input, Button } from 'antd';

function FoodForm (props) {
    return (

<form >
<Col>
    <label>Name</label>
    <Input value={props.newFoodName} type="text" onChange={(e) =>{
        props.setNewFood(e.target.value)
    }} />
    <label>image</label>
    <Input value={props.newFoodImage} type="text" onChange={(e) => {
            props.setNewImage(e.target.value)
    }} />
    <label>Calories</label>
    <Input value={props.newCalories} type="number" onChange={(e) => {
        props.setCaloriesFood(e.target.value)
    }} />
    <label>Servings</label>
    <Input value={props.newServings} type="number" onChange={(e) =>{
        props.setNewFoodServing(e.target.value)
    }} />
    <Button 
    onClick={(e) =>{
        const createdFoodArr = [...props.food]
        createdFoodArr.push({
            name: props.newFoodName,
            image: props.newFoodImage,
            calories: props.newCalories,
            servings: props.newServings
        })
        props.setFoodDisplayed(createdFoodArr)
    }} >Create</Button>
  </Col>
  </form>

    )
}

export default FoodForm
