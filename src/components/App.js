import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';
import {getMaxId} from '../helpers';

class App extends Component {
state = {
    gifts: []
}

addGift = () => {
    const { gifts } = this.state;
    const ids = gifts.map(gift => gift.id );
    const maxId = getMaxId(ids);

    gifts.push({ id: maxId + 1 });
    this.setState({ gifts });

}
removeGift = id => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id);
    this.setState({ gifts });
}
render(){
    return (
        <div>
            <h3>G-Giver</h3>
             <div className="gift-list">
             {
                 this.state.gifts.map( gift => {
                     return <Gift
                      key={gift.id}
                      gift = {gift}
                      removeGift={this.removeGift}
                      />
                 })
             }
             </div>
            <Button className="btn-add" onClick={this.addGift} >Add</Button>
           
        </div>    
    )
}
}

export default App;