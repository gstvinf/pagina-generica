import React, { Component } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,

  Button,
  Input,
  Text,
  Alert,
  Fade,

  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,

  FormGroup,
} from 'reactstrap';

// import styles from './styles';

export default class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      modal: false,
      erro: "Erro",
      fadeIn: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.toggle = this.toggle.bind(this);
    this.setErro = this.setErro.bind(this);
    this.toggleFadeIn = this.toggleFadeIn.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  toggleModal() {
    this.setState({
      modal: !this.state.modal,
      fadeIn: false
    });
  }

  setErro = (msg) => {
    this.setState({
      erro: msg
    });
  }

  toggleFadeIn() {
    this.setState({ 
      fadeIn: true
    });
  }


  validaLogin = (login, senha) => {
    var msg = "";

    if (login == "") msg = "O campo Login é obrigatório"
    if (senha == "") msg = "O campo Senha é obrigatório"
    if (senha.leng() < 6) msg = ""
    if (login.leng() < 3) msg = "Usuário muito curto"
    if (login == "" && senha == "")
      switch (login, senha) {
        case "correto", "":
          msg = "";
          break;
      }

    this.setErro(msg);
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Teste de Componentes</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.toggleModal}>Login</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://github.com/gstvinf/pagina-generica" target="_blank">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Op.
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Give me a feedback
                  </DropdownItem>
                  <DropdownItem>
                    Star my GitHub
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="https://github.com/gstvinf/pagina-generica" target="_blank" >
                    Give me a coffe
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>


        <FormGroup>
          <Modal isOpen={this.state.modal} >
            <ModalHeader toggle={this.toggleModal}>Entrar</ModalHeader>
            <ModalBody>
              <Input type="text" name="username" id="username" placeholder="Login" />
              <Input type="password" name="password" id="password" placeholder="Senha" />
              <Fade in={this.state.fadeIn}>
                <Alert color="danger">
                  {this.state.erro}
                </Alert>
              </Fade>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggleFadeIn}>Entrar</Button>
              <Button color="" onClick={this.toggleModal}>Cancelar</Button>
            </ModalFooter>
          </Modal>
        </FormGroup>

      </div>
    );
  }
}
