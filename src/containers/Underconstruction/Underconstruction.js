import React, { Component } from "react";
import ucimage from '../../assets/images/underConstruction1.png';


class Underconstruction extends Component {
render() {
return(
<div className = "underConstructionDIV">

<img className = "underConstruction"  src={ucimage} />

</div>
);
}
}

export default Underconstruction;
