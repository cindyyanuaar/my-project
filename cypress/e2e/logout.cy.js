import loginPage from '../pages/login.pages.js';
import LogoutPage from '../pages/logout.pages.js';
import UserPage from '../pages/user.pages.js'; // Jika perlu untuk navigasi sebelumnya

describe('User can log out', () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.fixture('users.json').then((data) => {
            loginPage.inputEmail(data.emailoperation);
            loginPage.inputPass(data.password);
        });
        loginPage.clickLoginButton();
        cy.url().should('include', '/account-mirroring'); // Memastikan pengguna diarahkan ke halaman Account Mirroring
    });

    it('User can log out successfully', () => {
        // Klik dropdown profil
        LogoutPage.clickProfileDropdown();
        cy.wait(200);
        LogoutPage.clickLogout();
        
    });
});
