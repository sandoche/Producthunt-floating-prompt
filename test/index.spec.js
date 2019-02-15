/* global describe, it, before */

import chai from 'chai';
import FloatingPrompt from '../lib/producthunt-floating-prompt.js';

chai.use(require('chai-dom'));
chai.expect();

const expect = chai.expect;

// mocking local storage
global.window = {
  localStorage: {
    getItem: function(id) {
      return true;
    }
  }
};

describe('Given an instance of FloatingPrompt', () => {
  before(() => {
    FloatingPrompt({name:'GitNews', url:'https://www.producthunt.com/posts/gitnews'});
  });
});
