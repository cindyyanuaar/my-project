import loginPage from '../pages/login.pages.js';
import DevicePage from '../pages/device.pages.js'; 

describe('User Can Login', () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.fixture('users.json').then((data) => {
            loginPage.inputEmail(data.emailoperation);
            loginPage.inputPass(data.password);
        });
        loginPage.clickLoginButton();
        cy.url().should('include', '/account-mirroring'); 
    });

    it('User can view list Device', () => {
        DevicePage.clickMenuDevice(); 
        cy.url().should('include', '/device'); 
    });

    it('User can filter by status & interval time', () => {
        DevicePage.clickMenuDevice();
        cy.url().should('include', '/device'); 
        DevicePage.filterByStatusAndInterval(true, '10', '15', '0', '900'); 
    });

    it('User can search by plat number', () => {
        DevicePage.clickMenuDevice();
        cy.url().should('include', '/device'); 
        DevicePage.searchDevice('BM 9239 QU');
    });

    it('User can sorting by plat number', () => {
        DevicePage.clickMenuDevice();
        cy.url().should('include', '/device'); 
        DevicePage.sortByName();
    });

});
