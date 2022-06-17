import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cardList: [],
  };

  clearInput = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo } = this.state;
    const obj = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };
    if (cardTrunfo) this.setState({ hasTrunfo: true });
    this.setState((prevState) => ({ cardList: [...prevState.cardList, obj] }),
      this.clearInput);
  }

  handleChange = (event) => {
    const value = event.target.type === 'checkbox'
      ? event.target.checked : event.target.value;
    this.setState({
      [event.target.name]: value,
    }, this.buttonSaveValidate);
  }

  buttonSaveValidate() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare } = this.state;
    const minNum = 0;
    const maxNum = 90;
    const maxTotal = 210;
    const parsed1 = parseInt(cardAttr1, 10);
    const parsed2 = parseInt(cardAttr2, 10);
    const parsed3 = parseInt(cardAttr3, 10);
    // console.log(parsed1);
    if (cardName === '' || cardDescription === ''
      || cardImage === '' || cardRare === ''
      || cardAttr1 === '' || cardAttr2 === '' || cardAttr3 === ''
    ) {
      this.setState({ isSaveButtonDisabled: true });
    } else if (parsed1 > maxNum || parsed1 < minNum) {
      this.setState({ isSaveButtonDisabled: true });
    } else if (parsed2 > maxNum || parsed2 < minNum) {
      this.setState({ isSaveButtonDisabled: true });
    } else if (parsed3 > maxNum || parsed3 < minNum) {
      this.setState({ isSaveButtonDisabled: true });
    } else if (parsed1 + parsed2 + parsed3 > maxTotal) {
      this.setState({ isSaveButtonDisabled: true });
    } else this.setState({ isSaveButtonDisabled: false });
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          { ...this.state }
        />
      </div>
    );
  }
}

export default App;
