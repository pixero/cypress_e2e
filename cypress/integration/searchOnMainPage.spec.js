import {MainSearchPage} from "cypress/pages/mainSearchPage";

describe('Search on main page google.com',()=>{
    it('search on main page',()=>{
        cy.visit('https://www.google.ru/');
    })
})
