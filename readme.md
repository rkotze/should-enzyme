# should-enzyme

[![Build Status](https://travis-ci.org/rkotze/should-enzyme.svg?branch=master)](https://travis-ci.org/rkotze/should-enzyme)

[should.js](https://shouldjs.github.io/) assertions for [enzyme](https://github.com/airbnb/enzyme)

1. [Install](#install)
1. [Assertions](#assertions)
	1. [`attr(key, [value])`](#attrkey-value)
	1. [`checked()`](#checked)
	1. [`className(string)`](#classnamestring)
	1. [`containsText(string)`](#containstextstring)
	1. [`prop(key, [value])`](#propkey-value)

## Install

`npm i should-enzyme --save-dev`

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
| yes     | yes   | yes     |

Check to see if wrapper has prop and optionally check value.
