import React, { Component } from 'react';

import { Col, Row, Button, Form, FormGroup, Label, FormText } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';



// import styles from './styles';

export default class TestCheckbox extends Component {
  render() {
    return (
      <div>
        <InputGroup>

          <FormGroup check>
            <Input type="checkbox" name="check" id="check1" />
            <Label for="check1" check>Check me out</Label>
          </FormGroup>

          <FormGroup check>
            <Input type="checkbox" defaultChecked name="check" id="check2" />
            <Label for="check2" check>Check me out</Label>
          </FormGroup>

          <FormGroup check>
            <Input type="checkbox" disabled name="check" id="check3" />
            <Label for="check3" check>Check me out</Label>
          </FormGroup>

          <FormGroup check>
            <Input type="checkbox" disabled defaultChecked name="check" id="check4" />
            <Label for="check4" check>Check me out</Label>
          </FormGroup>


          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <Input addon type="checkbox" aria-label="Checkbox for following text input" />
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Check it out" />
          </InputGroup>

          <br />
          <InputGroup>
            <Label>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                  To the Left!
              </InputGroupText>
              </InputGroupAddon>
            </Label>
            <Input />


          </InputGroup>
          <br />
          <InputGroup>
            <Input />
            <InputGroupAddon addonType="append">
              <InputGroupText>To the Right!</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>To the Left!</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="and..." />
            <InputGroupAddon addonType="append">
              <InputGroupText>To the Right!</InputGroupText>
            </InputGroupAddon>
          </InputGroup>

        </InputGroup>



      </div>
    );
  }
}
