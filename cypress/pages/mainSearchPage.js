export class MainSearchPage {
    constructor  () {
        return cy.visit('https://www.google.ru/');
    }
    search (value)  {
        return cy.get('input[aria-label="Найти"]')
            .type(value);
    }
}
