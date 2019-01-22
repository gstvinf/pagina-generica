import React, { Component } from 'react';

import { Button, Fade, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
      modal: false,
      nestedModal: false,
      closeAll: false,
    };

    this.clickCount = 0;
    this.singleClickTimer = '';

    this.toggleFadeIn = this.toggleFadeIn.bind(this);
    this.toggleFadeOut = this.toggleFadeOut.bind(this);
    this.doubleClickHandle = this.doubleClickHandle.bind(this);
    this.longClickHandle = this.longClickHandle.bind(this);
    this.delayClickHandle = this.delayClickHandle.bind(this);

    this.toggleModal = this.toggleModal.bind(this);
    this.toggleModalNested = this.toggleModalNested.bind(this);
    this.toggleModalAll = this.toggleModalAll.bind(this);
  }

  toggleFadeIn() {
    this.setState({ fadeIn: !this.state.fadeIn });
  }

  toggleFadeOut() {
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

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleModalNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleModalAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }

  render() {
    return (
      <div>
        <FormGroup >

          <FormGroup>
            <Button color="primary" onClick={this.toggleFadeIn}>Click para verificar a mensagem</Button>
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
            <Button color="danger" onClick={this.toggleFadeOut}>Click para esconder a mensagem</Button>
            <Fade in={this.state.fadeOut}>
              Essa mensagem deixará de existir. ^^
            </Fade>
          </FormGroup>

          <FormGroup>
            <Button color="dark" onClick={this.toggleModal}>Botão do Modal</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
              <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br />
                <Button color="success" onClick={this.toggleModalNested}>Show Nested Modal</Button>
                <Modal isOpen={this.state.nestedModal} toggle={this.toggleModalNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                  <ModalHeader>Nested Modal title</ModalHeader>
                  <ModalBody>Stuff and things</ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggleModalNested}>Done</Button>{' '}
                    <Button color="secondary" onClick={this.toggleModalAll}>All Done</Button>
                  </ModalFooter>
                </Modal>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleModal}>Do Something</Button>{' '}
                <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </FormGroup>

        </FormGroup>
      </div>
    );

  }
}
