export class MainSearchPage {
    constructor  () {
        cy.visit('https://www.google.ru/');
    }
    search (value)  {
        cy.get('input[aria-label="Найти"]')
            .type(`${value}{enter}`);
        return this;
    }
    checkFirstResult (value){
        cy.get('#rso').children()
            .first()
            .should('contain',value);
        return this;
    }
}
