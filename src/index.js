import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { userInfo } from 'os';


  // var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
  // var element1 = React.createElement('button', { className: 'greeting' }, 'Hello, world!');
  //  ReactDOM.render(
  //    <h1> This is react</h1>,
  //    document.getElementById('root')
  //    );
  
  // const name = 'JB';
  // const ele = <h1>Name is {name}</h1>
  
  // ReactDOM.render(
  //   <h1>value of input {2+2}</h1>,
  //   document.getElementById('root')
  //   );
  
  // function nm(user){
  //   const name = 'JB';
    
  // return name + user.Fname;  
  // };
//   const user = {
//     Fname : 'me'
//   };

//   function nm(user){
// if(user){
//   return <div>{user.Fname}</div>
// }
// return <div>Welcome there! </div>
//   }
//   const ele = <div><h1>Name is  test ya{nm()}</h1>
//   <h1>second head</h1>
//   </div>;
//     ReactDOM.render(
//     ele,
//     document.getElementById('root')
//     );

ReactDOM.render(<App />, document.getElementById('root'))
