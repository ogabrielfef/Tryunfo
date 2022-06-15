import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="nome">
          Nome da carta:
          <input id="name" name="nome" type="text" data-testid="name-input" />
        </label>
        <br />
        <label htmlFor="descrição">
          Descrição:
          <textarea
            id="descrição"
            name="descrição"
            data-testid="descriçãodescription-input"
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
          />
        </label>
        <br />
        <label htmlFor="imagem">
          Insira o local da imagem:
          <input id="imagem" name="imagem " type="text" data-testid="image-input" />
        </label>
        <br />
        <label htmlFor="tipo">
          Raridade:
          <select id="tipo" name="tipo" data-testid="rare-input">
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
          />
        </label>
        <br />
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
