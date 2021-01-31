describe('Auth',()=>{
    it('login in the Skillaz',()=>{
        cy.visit("https://ws.rc.skillaz.ru/auth")
        cy.get('#Password')
            .type('RZDaptest20@')
            .should('have.value',"RZDaptest20@")
        cy.get('#UserName')
            .type("ap.rzd.auto")
            .should('have.value',"ap.rzd.auto")
        cy.get('button')
            .contains('Войти')
            .click()
    })
})