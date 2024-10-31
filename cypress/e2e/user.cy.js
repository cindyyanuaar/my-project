import loginPage from '../pages/login.pages.js';
import UserPage from '../pages/user.pages.js'; 
import LogoutPage from '../pages/logout.pages.js';

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
        UserPage.inputEmail('john@gmail.com'); 
        cy.wait(1000);
        UserPage.selectRole('SMG'); 
        cy.wait(1000);
        UserPage.inputPassword('password123'); 
        cy.wait(1000);
        UserPage.inputConfirmPassword('password123'); 
        cy.wait(1000);
        UserPage.clickContinue();
        
    });

    it('User can edit an user', () => {
        UserPage.clickMenuUser(); 
        cy.wait(2000);
        UserPage.clickEditUser(); 
        cy.wait(200);
        UserPage.editUserName('Cimin'); 
        cy.wait(1000);
        UserPage.clickSaveUser();
        cy.wait(300);
        cy.url().should('include', '/user');
        cy.wait(400);

    });

    it('User can delete user', () => {
        UserPage.clickMenuUser();
        cy.wait(200)
        UserPage.clickDeleteUser();
    })

    

    // it('User can log out', () => {
       // LogoutPage.clickProfileDropdown(); // Klik dropdown profil
       // cy.wait(200);
       // LogoutPage.clickLogout(); // Klik tombol logout
       // cy.wait(300);
      //  cy.url().should('include', '/login'); // Pastikan kembali ke halaman login
    });
//});
