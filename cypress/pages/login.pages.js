var ActionPageLogin = {
    // Definisi selector untuk elemen-elemen
    textField_Email: '#inputEmail',
    textField_Password: '#inputPass',
    btnLogin: '#btn-login',
    burgetButtonMenu: '[data-test-id="btn-dropdown-profile"]',
    btnLogout: '#dropdown-example',
    errorMessage: '.alert.alert-danger', 

    // Fungsi input email
    inputEmail: function(email) {
        cy.get(this.textField_Email).type(email);
        cy.wait(200);
    },

    // Fungsi input password
    inputPass: function(password) {
        cy.get(this.textField_Password).type(password);
        cy.wait(300);
    },

    // Fungsi memeriksa tombol login dalam keadaan disabled
    checkLoginButtonDisabled: function() {
        cy.get(this.btnLogin).should('be.disabled');
    },

    // Fungsi klik button login setelah memastikan tidak disabled
    clickLoginButton: function() {
        cy.get(this.btnLogin).should('not.be.disabled').click();
    },

    // Fungsi untuk memeriksa pesan error berdasarkan teks
    expectErrorMessage: function(errorMessage) {
        cy.contains(errorMessage); // Menggunakan teks langsung
    },
}

export default ActionPageLogin;
