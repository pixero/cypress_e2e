
let token;

const AuthRequest = () =>{
    before(()=> {
        cy.request('POST','api/v1/auth/login',{
            UserName:"ap.rzd.auto",
            Password:"RZDaptest20@"
        });
        cy.getCookie('AZ1490').should('exist').then((cookie) => {
            token = cookie.value;
        });
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('AZ1489', token);
    });
}

export default AuthRequest;