import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: 'alalalal',
    // cardDescription: '',
    // cardAttr1: '',
    // cardAttr2: '',
    // cardAttr3: '',
    // cardImage: '',
    // cardRare: '',
    // cardTrunfo: 'false',
    // // hasTrunfo: 'false',
    // isSaveButtonDisabled: 'false',
  };

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { cardName } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form cardName={ cardName } />
        <Card />
      </div>
    );
  }
}

export default App;
