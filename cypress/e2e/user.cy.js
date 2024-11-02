import loginPage from '../pages/login.pages.js';
import UserPage from '../pages/user.pages.js'; 

describe('User can log in and manage user accounts', () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.fixture('users.json').then((data) => {
            loginPage.inputEmail(data.emailoperation);
            loginPage.inputPass(data.password);
        });
        loginPage.clickLoginButton();
        cy.url().should('include', '/account-mirroring'); 
    });

    it('User can add a new user', () => {
        UserPage.clickMenuUser(); 
        cy.wait(2000);
        UserPage.clickAddUser(); 
        UserPage.inputName('John testing'); 
        cy.wait(1000);
        UserPage.inputEmail('jon4n@gmail.com'); 
        cy.wait(1000);
        UserPage.selectRole('SMG'); 
        cy.wait(1000);
        UserPage.inputPassword('!1234Qwer'); 
        cy.wait(1000);
        UserPage.inputConfirmPassword('!1234Qwer'); 
        cy.wait(1000);
        UserPage.clickContinue();
        cy.wait(2000);
        UserPage.clickAddUserSave();
        cy.wait(7000);
        
    });

    it('User can edit an user', () => {
        UserPage.clickMenuUser(); 
        cy.wait(2000);
        UserPage.clickEditUser(); 
        cy.wait(200);
        UserPage.editUserName('Admin Logistik'); 
        cy.wait(1000);
        UserPage.clickSaveUser();
        cy.wait(300);
        cy.url().should('include', '/user');
        cy.wait(400);

    });

    it('User can delete user', () => {
        UserPage.clickMenuUser();
        cy.wait(200);
        UserPage.clickDeleteUser();
        cy.wait(500); 
        UserPage.confirmDeleteUser();
    });
});
