import React from "react";
import {render} from "react-dom";




export class Home extends React.Component{

render(){


    console.log(this.props);

return(
<div className="Conatiner">
    <div className="row">



    <div className="jumbotron">

      {this.props.content.Header}
<br/>

      {this.props.content.subHead}

</div>

        </div>
        </div>



  
);





}




}