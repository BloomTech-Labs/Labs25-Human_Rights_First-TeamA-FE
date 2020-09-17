/// <reference types="cypress" />

const { default: Item } = require("antd/lib/list/Item");

context('map', () => {
  beforeEach(function () {
    cy.visit('http://localhost:3000/map');
  });
  describe('Testing map component', function (){
      it('Should have a popover on hover/mouseover', () => {
        cy.visit('http://localhost:3000/');
        cy.get('[data-cy=continue]').click();
          cy.get('[data-cy=map-marker-4]').click();
      })
  })
});
