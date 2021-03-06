var { Given, When, Then } = require('cucumber');
var { browser } = require('selenium-webdriver');

const expect = require('chai').expect;

Given(/^I go to the website "([^"]*)"$/, (url) => {
  browser.url(url);
});

Then(/^I expect the title of the page "([^"]*)"$/, (title) => {
  expect(browser.getTitle()).to.be.eql(title);
});
