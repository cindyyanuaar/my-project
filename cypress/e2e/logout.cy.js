import loginPage from '../pages/login.pages.js';
import LogoutPage from '../pages/logout.pages.js';
import UserPage from '../pages/user.pages.js'; 

describe('User can log out', () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.fixture('users.json').then((data) => {
            loginPage.inputEmail(data.emailoperation);
            loginPage.inputPass(data.password);
        });
        loginPage.clickLoginButton();
        cy.url().should('include', '/account-mirroring'); 
        cy.wait(5000);
    });

    it('User can log out', () => {
        LogoutPage.clickProfileDropdown();
        cy.wait(3000);
        LogoutPage.clickLogout();
        
    });
});
