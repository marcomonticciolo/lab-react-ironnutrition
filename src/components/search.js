import { Card, Row, Col, Divider, Input, Button } from 'antd';


function SearchFood (props){

   
 
    
    return (
    <Col>
        <h1><span> Search Bar: </span></h1>
                <Input 
                onChange={(event) => {
                    props.setSearchTerm(event.target.value)
                    console.log('search term', props.searchTerm)
                  }
        

                }/>
                </Col>
    )
}

export default SearchFood