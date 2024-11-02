import loginPage from '../pages/login.pages.js';
import MirroringPage from '../pages/mirroring.pages.js'; 

describe('User can log in and add an account mirroring', () => {
    beforeEach(() => {
        // Melakukan login sebelum setiap pengujian
        cy.visit('/login');
        cy.fixture('users.json').then((data) => {
            loginPage.inputEmail(data.emailoperation);
            loginPage.inputPass(data.password);
        });
        loginPage.clickLoginButton();
        cy.url().should('include', '/account-mirroring');
    });

    it('User can add a new account mirroring', () => {
        MirroringPage.addAccount();
        cy.get('#companyName').clear().type('PT Bina');
        MirroringPage.selectType('ASYNC');
        cy.get('#requestInterval').clear().type('20'); 
        MirroringPage.selectFrom('EasygoTest'); 
        MirroringPage.selectTo('RedBusTes');
        MirroringPage.clickCancel(); 
        MirroringPage.clickContinue();
    });
});
