import loginPage from '../pages/login.pages.js';
import RolePage from '../pages/role.pages.js'; 
import LogoutPage from '../pages/logout.pages.js';

describe('User can log in and manage roles', () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.fixture('users.json').then((data) => {
            loginPage.inputEmail(data.emailoperation);
            loginPage.inputPass(data.password);
        });
        loginPage.clickLoginButton();
        cy.url().should('include', '/account-mirroring'); 
    });

    it('User can add a new role', () => {
        RolePage.clickMenuRole(); 
        cy.wait(2000);
        RolePage.clickAddRole(); 
        RolePage.inputRoleName('Admin 1'); 
        cy.wait(1000);
        RolePage.checkUserFeature();
        RolePage.clickSaveRole();
    });
});
