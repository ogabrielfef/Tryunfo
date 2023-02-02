import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';
import './App.css';

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
    filterName: '',
    trunfo: false,
    rareFilter: 'todas',
    trunfoFilter: false,
  };

  onButtonDelete = (cardName) => {
    const { cardList } = this.state;
    const newCardList = cardList.filter((card) => card.cardName !== cardName);
    this.setState({
      cardList: newCardList,
    });
    if (cardList.some((card) => card.cardTrunfo)) {
      this.setState({
        hasTrunfo: false,
        cardTrunfo: false,
      });
    }
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

  handleChangeList = (event) => {
    const value = event.target.type === 'checkbox'
      ? event.target.checked : event.target.value;
    this.setState({
      [event.target.name]: value,
    }); console.log(event.target.value);
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
    const { cardList, filterName, trunfoFilter, rareFilter } = this.state;
    return (
      <div className="conteiner">
        <div className="header">
          <h1>Tryunfo</h1>
        </div>
        <div className="content-box">
          <Form
            { ...this.state }
            onInputChange={ this.handleChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            { ...this.state }
          />
        </div>
        <section className="filter">
          <div className="filter-settings">
            <label htmlFor="name-filter">
              Filtro de Busca
              <input
                name="filterName"
                onChange={ this.handleChangeList }
                value={ filterName }
                disabled={ trunfoFilter }
                data-testid="name-filter"
                type="text"
                id="filterName"
              />
            </label>
            <label htmlFor="rare-filter">
              <select
                id="rare-filter"
                name="rareFilter"
                data-testid="rare-filter"
                value={ rareFilter }
                onChange={ this.handleChangeList }
                disabled={ trunfoFilter }
              >
                <option value="todas">todas</option>
                <option value="normal">normal</option>
                <option value="raro">raro</option>
                <option value="muito raro">muito raro</option>
              </select>
            </label>
            <label htmlFor="trunfo-filter">
              Trunfo filter:
              <input
                type="checkbox"
                id="trunfo-filter"
                name="trunfoFilter"
                data-testid="trunfo-filter"
                checked={ trunfoFilter }
                onChange={ this.handleChangeList }
              />
            </label>
          </div>
          <div className="card-deck">
            { cardList
              .filter((card) => (rareFilter === 'todas'
                ? cardList : rareFilter === card.cardRare))
              .filter((card) => card.cardName.includes(filterName))
              .filter((card) => (trunfoFilter
                ? card.cardTrunfo : cardList))
              .map((card) => (
                <CardList
                  key={ card.cardName }
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                  onButtonDelete={ this.onButtonDelete }
                />
              ))}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
