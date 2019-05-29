const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(``);
const { document } = (new JSDOM(``)).window;
const chai = require('../lib/chai/chai');
global.expect = chai.expect;
global.sinon = require('sinon');
global.window = window;
global.document = document;
const _ = require('../lib/underscore');
const $ = global.jQuery = require('jquery');

const fs = require('fs');

describe('Bare Minimum Requirements', function() {

  let fixtures = fs.readFileSync(__dirname + '/../spec/fixtures.js').toString();
  let stringifyJSONText = fs.readFileSync(__dirname + '/../src/stringifyJSON.js').toString();
  let stringifyJSONSpec = fs.readFileSync(__dirname + '/../spec/stringifyJSONSpec.js').toString();
  eval(fixtures);
  eval(stringifyJSONText);
  eval(stringifyJSONSpec);

  let getElementsByClassNameText = fs.readFileSync(__dirname + '/../src/getElementsByClassName.js').toString();
  let getElementsByClassNameSpec = fs.readFileSync(__dirname + '/../spec/getElementsByClassNameSpec.js').toString();
  eval(getElementsByClassNameText);
  eval(getElementsByClassNameSpec);

});
