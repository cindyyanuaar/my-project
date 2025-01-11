import loginPage from '../pages/login.pages.js';
import ApiPage from '../pages/api.pages.js'; 

describe('User can Login', () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.fixture('users.json').then((data) => {
            loginPage.inputEmail(data.emailoperation);
            loginPage.inputPass(data.password);
        });
        loginPage.clickLoginButton();
        cy.url().should('include', '/account-mirroring'); 
    });

    it('User can View List API Management', () => {
        ApiPage.clickMenuApi(); 
        cy.wait(2000);
        cy.url().should('include', '/api'); // Pastikan kita berada di halaman perangkat
    });

    it('User can view Api Management List, Search and Sorting', () => {
        ApiPage.clickMenuApi(); 
        cy.wait(2000);
        cy.url().should('include', '/api'); 
        ApiPage.searchDevice('redbus');
        cy.wait(2000); 
        ApiPage.sortByName();
        cy.wait(2000); 
        ApiPage.sortByName();
        cy.wait(2000);
    });

    it('User can download', () => {
        ApiPage.clickMenuApi(); 
        cy.wait(2000);
        cy.url().should('include', '/api');
        ApiPage.downloadFile();  
        cy.wait(3000);
    })
    });

