import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor!!!')
  }
  

  apple = () => {
    this.setState(current => ({
      count: current.count ,
    }));
  };
  orange = () => {
    this.setState(current => ({
      count: current.count,
    }));
  };
  banana = () => {
    this.setState(current => ({
      count: current.count,
    }));
  };
  componentDidMount(){
    console.log('componentDidMount!!!');
  }
  componentWillUpdate(){
    console.log('componentWillUpdate!!!');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount!!!');
  }
  render() {
    console.log('render!!!')
    return(
      <div>
      <h1>어떤 과일을 좋아하나요? </h1>
      <button onClick={this.apple}>사과</button>&nbsp;&nbsp;&nbsp;
      <button onClick={this.orange}>오렌지</button>&nbsp;&nbsp;&nbsp;
      <button onClick={this.banana}>바나나</button>
      </div>
    );
  } 
}

export default App;