import { browser, element, by } from 'protractor';

describe('Person Search E2E Tests', function () {

  let expectedMsg = 'Search for a Person';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});
