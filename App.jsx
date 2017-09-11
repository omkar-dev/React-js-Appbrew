import React from 'react';
import {render } from "react-dom";
import {Header} from "./Components/Header.jsx";

import {Home} from "./Components/Home.jsx";
class App extends React.Component {
   render() {

var About={
Header:"About",
subHead:"We are a no one Company "

};


var Headerdata={
 Links:["logo","first","Second","Third"]
};

      return (
 
       <div>
        <Header content={Headerdata}/>
        <Home content={About}/>

</div>

      );
   }
}

export default App;