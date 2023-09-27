import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
let myName = "Marlon"

const rows = []; 
for(let i = 0; i < 10; i++){
  rows.push(<li>{i}</li>);
}

const myList = <ul> {rows} </ul>;

console.log(rows)

root.render(
  <>
    <h1>Hello World</h1>
    <h2>Hello {myName} </h2>
    {myList}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

