/// <reference types="cypress" />

context('map', () => {
  beforeEach(function () {
    cy.visit('http://localhost:3000/map');
  });
  describe('Testing map component', function (){
      it('Should be able to view a twitter feed', () => {
        cy.visit('http://localhost:3000/');
        cy.get('[data-cy=continue]').click();
        cy.get('[data-cy=map-marker-4]').click({force: true});
        cy.get('[data-cy=view-evidence]').click();
        cy.get('[aria-busy="true"]');
        cy.get('.css-1dbjc4n').click();
      })
  })
});

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
