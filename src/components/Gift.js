import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
export default class Gift extends Component {

    state = { 
        person:'',
        gift:''
    }

    handleChange = e => {
        this.setState({ person: e.target.value });
    }
    handleChangeGift = e => {
        this.setState({gift: e.target.value})
    }
    render(){
        return( 

            <div className="gift">
                <Form>

                    <FormGroup>
                    <ControlLabel>Person</ControlLabel>
                    <FormControl
                            type="text"
                            className="input-person"
                            value={this.state.person}
                            placeholder="Person"
                            onChange={this.handleChange}
                        />
                    </FormGroup>    

    <FormGroup>
                 <ControlLabel>Gift</ControlLabel>
                 <FormControl
          type="text"
          className="input-gift"
          value={this.state.gift}
          placeholder="Gift"
          onChange={this.handleChangeGift}
          />
                    </FormGroup>    
                </Form>
                <Button className="btn-remove" 
                        onClick={ () => this.props.removeGift(this.props.gift.id)}>
                                Delete
                         </Button>   
         
            </div>
        )
    }
}