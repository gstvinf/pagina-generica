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
  DropdownItem } from 'reactstrap';

// import styles from './styles';

export default class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
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
                <NavLink href="">Components</NavLink>
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
      </div>
    );
  }
}
