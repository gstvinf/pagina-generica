import React, { Component } from 'react';

import { Col, Row, Button, Form, FormGroup, Label, FormText } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';



// import styles from './styles';

export default class TestCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      check5: false,
    };
    this.changeHandle = this.changeHandle.bind(this);
  }


  changeHandle() {
    console.log(this.state.check5)
    this.setState(state => ({
      check5: !state.check5
    }))
    console.log(this.state.check5)
  }

  render() {
    return (
      <div>
        <h2>Checkbox</h2>

        <FormGroup check>
          <Input type="checkbox" name="check" id="check1" />
          <Label for="check1" check>Is not checked</Label>
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox" defaultChecked name="check" id="check2" />
          <Label for="check2" check>Default Checked</Label>
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox" disabled name="check" id="check3" />
          <Label for="check3" check>Disabled :D </Label>
        </FormGroup>

        <FormGroup check>
          <Input type="checkbox" disabled defaultChecked name="check" id="check4" />
          <Label for="check4" check>Checked and Disabled haha</Label>
        </FormGroup>

        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <Input addon type="checkbox" defaultChecked={this.state.check5} aria-label="Checkbox for following text input" name="check" id="check5" />
            </InputGroupText>
          </InputGroupAddon>
          <Input onChange={this.changeHandle} placeholder="Try check it!" />
        </InputGroup>

      </div >
    );
  }
}
