import React from 'react';

function Food({fav}) {
  return (
  <h3>I love  { fav }</h3>
  );
}

const foodLink = [
  {
    name: '근육',
  },
  {
    name: '글루타민',
  },
  {
    name: '프로틴'
  }
];

function App() {
  // return <div className="App" />;
  return (
    <div>
      <h1>Hello</h1>
    </div>
    );
}

export default App;
