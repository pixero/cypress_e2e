import AuthRequest from "../commands/authRequest";


describe('Create require', () => {
    AuthRequest();

    it('create req spec ', function () {
        cy.visit("/hire-requests")
        cy.get("button").contains("+ Добавить заявку")
            .click()
        cy.get("div[data-testid=modal-editHireRequest]")
            .find("#RequestType")
            .type(`Специалисты{enter}`)
        cy.get("#Position")
            .type(`Агент{enter}`)
        cy.get("div[data-testid=modal-editHireRequest]")
            .find("div[id='ExtraData.UserGroup']")
            .type(`Тестовая группа 2{enter}`)
        cy.get("div[data-testid=modal-editHireRequest]")
            .find("input[id='ExtraData.StaffUnitId']")
            .type(`1223344`)
        cy.get("div[id='ExtraData.LegalEntity'")
            .type(`ОАО РЖД{enter}`)
        cy.get("div[data-testid=modal-editHireRequest]")
            .find("div[id='ExtraData.OrgStructure']")
            .type(`Холдинг РЖД{enter}`)
        cy.get("div[id='ExtraData.SeniorPosition'")
            .type(`Агент{enter}`)
        cy.get("div[data-testid=modal-editHireRequest]")
            .find("div[id='ExtraData.StaffUnit']")
            .type(`Да{enter}`)
        cy.get("#Reason")
            .type(`Новая штатная{enter}`)
        cy.get("#CloseDate")
            .click()
            .get("button").contains((new Date()).getDate())
            .click()
        cy.get("div[id='ExtraData.Responsibilities']")
            .type("Функциональные обязаности текст{enter}")
        cy.get("div[id='ExtraData.Education']")
            .type("Высшее{enter}")
    });
})