import loginPage from '../pages/login.pages.js';
import logoutPage from '../pages/logout.pages.js';

describe('As a user, I want to log in', () => {
    beforeEach(() => {
        // Bersihkan session dan cookie sebelum setiap test case
        cy.clearAllSessionStorage();
        cy.clearAllLocalStorage();
        cy.clearCookies();
        cy.viewport(1920, 1080);
        cy.visit('https://mirroring-staging.transtrack.id/login');
    });

    // case untuk password tidak diisi
    it('Users can see a password required button disable', () => {
        // Isi email saja
        loginPage.inputEmail('admin@transtrack.id');
        cy.wait(5000);
    });

    // case pesan error jika email atau password salah
    it('Users can see error messages when inputting incorrect credentials', () => {
        loginPage.inputEmail('admin@transtrack.id');
        loginPage.inputPass('4321rewq'); // password salah
        loginPage.clickLoginButton();
        loginPage.expectErrorMessage("Login Failed");
        cy.wait(5000);
    });

    // case untuk login berhasil
    it('Users can successfully log in and log out', { tags: ['smoke'] }, () => {
        loginPage.inputEmail("admin@transtrack.id");
        loginPage.inputPass("password"); 
        loginPage.clickLoginButton();

        // Logout setelah login berhasil
        logoutPage.clickProfileDropdown();
        cy.wait(3000);
        logoutPage.clickLogout();

        // Assertion mastiin user kembali ke halaman login
        cy.url().should('include', '/login');
    });
});
