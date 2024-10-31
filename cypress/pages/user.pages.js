var UserPage = {
    btnAddUser: '#btnAddUser',
    userList: '.text-3xl', 
    menuUser: '#menuUser', 
    addUserModal: '.max-w-3xl > .bg-gray-50 > :nth-child(1) > .justify-between > .flex > .space-y-2 > .text-xl', 
    editUserModal: '#editUserModal', 
    btnDeleteUser: '#btnDelete', 
    inputNameField: '#name',
    inputEmailField: '#email',
    inputPasswordField: '[data-test="field-password-user"]',
    inputConfirmPasswordField: ':nth-child(2) > .rounded-lg > #confirmPassword',
    inputRoleField: '.relative > .flex-col > .rounded-lg > .block',
    btnEditUser: ':nth-child(10) > :nth-child(6) > .space-x-5 > #btnEdit', 

    // Fungsi klik menu User
    clickMenuUser: function() {
        cy.get(this.menuUser).click(); 
    },

    // Fungsi klik tombol 'Add User'
    clickAddUser: function() {
        cy.get(this.btnAddUser).click({ force: true }); 
    },

    // Fungsi input nama
    inputName: function(name) { 
        cy.get(this.inputNameField).type(name); 
    },

    // Fungsi input email
    inputEmail: function(email) {
        cy.get(this.inputEmailField).type(email); 
    },

    // Fungsi input password
    inputPassword: function(password) {
        cy.get(this.inputPasswordField).type(password); 
    },

    // Fungsi input konfirmasi password
    inputConfirmPassword: function(password) {
        cy.get(this.inputConfirmPasswordField).type(password); 
    },

    // Fungsi pilih role
    selectRole: function(roleOption) {
        cy.get(this.inputRoleField).click(); //dropdown
        cy.contains(roleOption).click({ force: true }); 
    },

    // Fungsiklik tombol 'Cancel' 
    clickCancel: function() {
        cy.get('form > .flex-row > .text-gray-700').click(); 
    },

    // Fungsi  klik tombol 'Continue' 
    clickContinue: function() {
        cy.get('#btnContinue').click({ force: true }); 
    },

    //Fungsi klik tombol 'Edit' pada user tertentu
    clickEditUser: function() {
        cy.get(this.btnEditUser).click(); 
    },

    // Fungsi edit nama user
    editUserName: function(newName) {
        cy.get(this.inputNameField).clear().type(newName);
    },

    // Fungsi klik 'Save'
    clickSaveUser: function() {
        cy.get('form > .flex-row > .text-white').click(); 
    },

    // Fungsi untuk klik button delete
    clickDeleteUser: function() {
        cy.get(this.btnDeleteUser).click();
    }
};

export default UserPage;
