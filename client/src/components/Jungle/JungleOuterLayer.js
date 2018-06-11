import React, { Component } from 'react';
import OuterLayer from "../../img/jungle_underground.png";

class JungleOuterLayer extends Component {
    render() {
        return (
            <img src={OuterLayer} alt="" style={{width: '100%', position: 'relative', minHeight: '145vh', top: '0'}}/>
        )
    }
}

export default JungleOuterLayer;