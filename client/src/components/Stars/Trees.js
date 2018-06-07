import React, { Component } from 'react';
import Trees from "../../img/trees_lake.png";

class TreeLayer extends Component {
    render() {
        return (
            <img src={Trees} alt="" style={{position: 'relative', bottom: '245px'}}/>
        )
    }
}

export default TreeLayer;