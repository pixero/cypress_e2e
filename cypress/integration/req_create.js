import AuthRequest from "../commands/authRequest";
describe('Create require',()=>{
    AuthRequest();

    it('should ',  () => {
        cy.visit('/showcase')
        cy.get("button")
            .contains('+ Добавить кандидата')
            .click()
        cy.get('#LastName')
            .type("Тестович")
        cy.get('#Name')
            .type("Иван")
        cy.get('#MiddleName')
            .type("Петров")
        cy.get('#BirthDate')
            .type("03.02.2001")
        cy.get('#MiddleName').click()
        cy.get('#PhoneNumber')
            .type("000 123 45 67")
        cy.get("label[for=Source-HH]")
            .click()
        cy.get("button").contains('Сохранить')
            .click()
    });
})