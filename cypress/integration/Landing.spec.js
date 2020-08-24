/// <reference types="cypress" />
context('consent', () => {
  beforeEach(function () {
    cy.visit('http://localhost:3000/');
  });
  describe('Testing Consent form', function () {
    it('Should have an href link', () => {
      cy.get('[data-cy=abandon]').should('have.attr', 'href');
    });
    it('Should take us to Homepage', () => {
      cy.get('[data-cy=continue]').click();
      cy.url().should('include', '/home'); // => true
    });
  });
});
