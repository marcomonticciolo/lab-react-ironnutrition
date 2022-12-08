import { Card,Col,Button} from 'antd';


function FoodBox (props) {
  
 return (
    
 <Col>
    <Card
      title={props.food.name}
      style={{ width: 230, height: 300, margin: 10 }}
    >
      <img src={props.food.image} height={60} alt="food" />
      <p> Calories: {props.food.calories}</p>
      <p>Servings: {props.food.servings}</p>
      <p>total Cals:{props.food.calories * props.food.servings}</p>
      <Button 
      onClick={() =>{
        const newArr = props.foodArr.filter(f =>{
          return f.name !== props.food.name
        })
        console.log(newArr)
        props.setFoodDisplayed(newArr)
      }}
      type="primary"> Delete </Button>
    </Card>
  </Col>
  
    
    )
        }


export default FoodBox