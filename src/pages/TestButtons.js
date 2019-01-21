import React, { Component } from 'react';

import { Button, Fade, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// import styles from './styles';

export default class TestButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: false,
      fadeOut: true,
      longClick: false,
      doubleClick: false,
      delay: false,
    };

    this.clickCount = 0;
    this.singleClickTimer = '';

    this.toggleIn = this.toggleIn.bind(this);
    this.toggleOut = this.toggleOut.bind(this);
    this.doubleClickHandle = this.doubleClickHandle.bind(this);
    this.longClickHandle = this.longClickHandle.bind(this);
    this.delayClickHandle = this.delayClickHandle.bind(this);
  }
  toggleIn() {
    this.setState({ fadeIn: !this.state.fadeIn });
  }
  toggleOut() {
    this.setState({ fadeOut: !this.state.fadeOut });
  }

  doubleClickHandle() {
    this.clickCount++;
    if (this.clickCount === 1) {
      this.singleClickTimer = setTimeout(function () {
        this.clickCount = 0;
      }.bind(this), 300);
    } else if (this.clickCount === 2) {
      clearTimeout(this.singleClickTimer);
      this.clickCount = 0;
      this.setState({ doubleClick: !this.state.doubleClick });
    }
  }
  longClickHandle() {
    this.setState({ longClick: !this.setState.longClick });
  }
  delayClickHandle() {
    this.buttonPressTimer = setTimeout(() =>
      this.setState({ delay: !this.setState.delay })
      , 3000);
  }

  render() {
    return (
      <div>
        <FormGroup >

          <FormGroup>
            <Button color="primary" onClick={this.toggleIn}>Click para verificar a mensagem</Button>
            <Fade in={this.state.fadeIn}>
              Você clicou no botão e aqui está sua mensagem :)
            </Fade>
          </FormGroup>

          <FormGroup>
            <Button color="info" onClick={this.doubleClickHandle}>Click duas vezes </Button>
            <Fade in={this.state.doubleClick}>
              Você clicou duas vezes para aparecer essa carinha (:
            </Fade>
          </FormGroup>

          <FormGroup>
            <Button color="success" onClick={this.longClickHandle}>Segure o botão</Button>
            <Fade in={this.state.longClick}>
              Você segurou para aparecer isso.
            </Fade>
          </FormGroup>

          <FormGroup>
            <Button color="warning" onClick={this.delayClickHandle}>Mensagem com delay</Button>
            <Fade in={this.state.delay}>
              Demorou 3 segundos para aparecer essa mensagem ;D
            </Fade>
          </FormGroup>

          <FormGroup>
            <Button color="danger" onClick={this.toggleOut}>Click para esconder a mensagem</Button>
            <Fade in={this.state.fadeOut}>
              Essa mensagem deixará de existir. ^^
            </Fade>
          </FormGroup>

        </FormGroup>
      </div>
    );

  }
}
