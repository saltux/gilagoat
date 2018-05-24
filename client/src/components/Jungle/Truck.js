import React, { Component } from 'react';
import Truck from "../../img/jeep_jungle.png";

class TruckLayer extends Component {
    render() {
        return (
            <img src={Truck} alt="" style={{ height: '690px', width: 'auto', position: 'relative', bottom: '105px'}}/>
        )
    }
}

export default TruckLayer;