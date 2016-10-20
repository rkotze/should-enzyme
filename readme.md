# should-enzyme

[![npm version](https://img.shields.io/npm/v/should-enzyme.svg)](https://www.npmjs.com/package/should-enzyme) 
[![Build Status](https://travis-ci.org/rkotze/should-enzyme.svg?branch=master)](https://travis-ci.org/rkotze/should-enzyme)

[should.js](https://shouldjs.github.io/) assertions for [enzyme](https://github.com/airbnb/enzyme)

1. [Install](#install)
1. [Setup](#setup)
1. [Assertions](#assertions)
	1. [`attr(key, [value])`](#attrkey-value)
	1. [`checked()`](#checked)
	1. [`className(string)`](#classnamestring)
	1. [`containsText(string)`](#containstextstring)
	1. [`prop(key, [value])`](#propkey-value)
	1. [`state(key, [value])`](#statekey-value)
	1. [`text(string)`](#textstring)

## Install

`npm i should-enzyme --save-dev`

## Setup

```js
import 'should';
import 'should-enzyme';
```

## Assertions

### `attr(key, [value])`

| render | mount | shallow |
| -------|-------|-------- |
| yes     | yes   | yes     |

Check to see if element has attribute and optionally check value.

### `checked()`

| render | mount | shallow |
| -------|-------|-------- |
| yes     | yes   | yes     |

Check to see if input type checkbox is checked.

### `className(string)`

| render | mount | shallow |
| -------|-------|-------- |
| yes     | yes   | yes     |

Check to see if wrapper has css class.

### `containsText(string)`

| render | mount | shallow |
| -------|-------|-------- |
| yes     | yes   | yes     |

Check to see if wrapper contains text.

### `prop(key, [value])`

| render | mount | shallow |
| -------|-------|-------- |
| no     | yes   | yes     |

Check to see if wrapper has prop and optionally check value.

### `state(key, [value])`

| render | mount | shallow |
| -------|-------|-------- |
| no     | yes   | yes     |

Check to see if wrapper has state property and optionally check value.

```js
import React, { Component } from 'react';
import {mount, render, shallow} from 'enzyme'

class StateFixture extends Component {
  constructor(){
    super();
    this.state = {
      bestFruit: 'mango'
    };
  }

  render(){
    return (
        <div id="best-mangos">
          {this.state.bestFruit}
        </div>
      );
  }
}

const wrapper = mount(<StateFeature />);

wrapper.should.have.state('bestFruit');
wrapper.should.not.have.state('anotherFruit');

wrapper.should.have.state('bestFruit', 'mango');
wrapper.should.not.have.state('anotherFruit', 'banana');
```

### `text(string)`

| render | mount | shallow |
| -------|-------|-------- |
| yes    | yes   | yes     |

Check to see if the exact text content is in wrapper.

```js
import React from 'react';
import {mount, render, shallow} from 'enzyme';

const TextFeature (props) => (
      <div id='text-feature'>
        <span id='text-span'>Test</span>
      </div>
    );

const wrapper = mount(<TextFeature />);

wrapper.find('#text-span').should.have.text('Test');

wrapper.find('#text-span').should.not.have.text('Other text');
```