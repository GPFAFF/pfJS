import {expect} from 'chai';
import { JSDOM } from 'jsdom'
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say pfJS Boilerplate', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    new JSDOM(index, function(err, window) {
      const h1 = window.document.getElementByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('pfJS Boilerplate');
      done();
      window.close();
    });
  });
});
