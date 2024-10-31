import loginPage from '../pages/login.pages.js';
import LogoutPage from '../pages/logout.pages.js';

describe('As a user, you want to log in to the application so you can continue using the application features', () => {
    beforeEach(() => {
        // Bersihkan session dan cookie sebelum setiap test case
        cy.clearAllSessionStorage();
        cy.clearAllLocalStorage();
        cy.clearCookies();
        cy.viewport(1920, 1080);
        cy.visit('https://mirroring-staging.transtrack.id/login');
    });

    // Test case untuk pesan error jika password tidak diisi
    it('Users can see a password required error message', () => {
        // Isi email saja
        loginPage.inputEmail('admin@transtrack.id');
        cy.wait(5000);
    });

    // Test case untuk pesan error jika email atau password salah
    it('Users can see error messages when inputting incorrect credentials', () => {
        loginPage.inputEmail('admin@transtrack.id');
        loginPage.inputPass('4321rewq'); // password salah
        loginPage.clickLoginButton();
        loginPage.expectErrorMessage("Login Failed");
        cy.wait(5000);
    });

    it('Users can successfully log in', { tags: ['smoke'] }, () => {
        loginPage.inputEmail("admin@transtrack.id");
        loginPage.inputPass("password"); 
        loginPage.clickLoginButton();
    });

    //it('User can log out', () => {
       // LogoutPage.clickProfileDropdown(); 
      //  LogoutPage.clickLogout();
    });
//});
