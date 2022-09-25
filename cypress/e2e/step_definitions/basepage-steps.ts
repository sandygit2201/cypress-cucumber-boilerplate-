import {Given} from "@badeball/cypress-cucumber-preprocessor";

Given("Invoke application Home page", ()=> {
    cy.visit('/')
});