import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  // state = {
  //   cardName: '',
  //   cardDescription: '',
  //   cardAttr1: '',
  //   cardAttr2: '',
  //   cardAttr3: '',
  //   cardImage: '',
  //   cardRare: '',
  //   cardTrunfo: 'false',
  //   // hasTrunfo: 'false',
  //   isSaveButtonDisabled: 'false',
  // };

  // onInputChange = (event) => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  // onSaveButtonClick = () => {

  // }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="nome">
          Nome da carta:
          <input
            id="name"
            name="nome"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="descrição">
          Descrição:
          <textarea
            id="descrição"
            name="descrição"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="atributo1">
          Força:
          <input
            id="atributo1"
            name="atributo1"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="atributo2">
          Inteligência:
          <input
            id="atributo2"
            name="atributo2"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="atributo3">
          Velocidade:
          <input
            id="atributo3"
            name="atributo3"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="imagem">
          Insira o local da imagem:
          <input
            id="imagem"
            name="imagem "
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="tipo">
          Raridade:
          <select
            id="tipo"
            name="tipo"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="superTrunfo">
          A carta é um Super Trunfo?
          <input
            type="checkbox"
            id="superTrunfo"
            name="superTrunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
