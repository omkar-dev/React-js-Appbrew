import React from 'react';
import {render } from "react-dom";
import PropTypes from 'prop-types';

export class Header extends React.Component {
   render() {


    const style = {
    backgroundColor:'blue',
    color:'red'
      };
    
      return (
 

        <div className="container">
       
        <nav className="nav style={style} justify-content-end">

            
{this.props.content.Links.map((link,i)=>   <li key={i} className="nav-item  ">
          <a className="nav-link active" href="#">{link}</a>
        </li>)}



            

           
     

      </nav>
      </div>


      );
   }
}

Header.protoTypes={

content:PropTypes.object


};