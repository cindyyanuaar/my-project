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
    btnCancelRole: 'form > .flex-row > .text-gray-700',
    btnContinue: '#btnContinue',
    btnAddUserSave: 'form > .flex-row > .text-white',
    btnFilter: '#btnFilter',
    btnApply: '.p-4 > .flex-row > .text-white',
    btnReset: '.p-4 > .flex-row > .text-gray-700',
    checkboxSuperAdmin: '#active-filter-0 > .w-4',
    btnConfirmDeleteUser: '#modalDeleteUser > .max-w-3xl > .relative > .p-2 > .flex-col > div.flex > #btnConfirm', 

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

    // Fungsi untuk klik tombol 'Add User' yang menyimpan user
    clickAddUserSave: function() {
        cy.get('form > .flex-row > .text-white').click({ force: true }); 
    },

    //Fungsi klik tombol 'Edit' pada user tertentu
    clickEditUser: function() {
        cy.get(':nth-child(1) > :nth-child(6) > .space-x-5 > #btnEdit').click({ force: true })},

    // Fungsi edit nama user
    editUserName: function(newName) {
    cy.get(this.inputNameField).clear().click({ force: true }).type(newName, { force: true });
    },

    // Fungsi klik 'Save'
    clickSaveUser: function() {
        cy.get('form > .flex-row > .text-white').click({ force: true }); 
    },

    // Fungsi untuk klik button delete
    clickDeleteUser: function() {
        cy.get(this.btnDeleteUser).click();
    },

    // Fungsi untuk konfirmasi delete (klik tombol "Yes, Delete")
    confirmDeleteUser: function() {
        cy.get('#modalDeleteUser > .max-w-3xl > .relative > .p-2 > .flex-col > div.flex > #btnConfirm').click();
    },

    // Fungsi filter 
    filter: function() {
        cy.get(this.btnFilter).click();
        cy.wait(2000);
        cy.get(this.checkboxSuperAdmin).click({ force: true});
        cy.wait(2000);
        cy.get(this.btnApply).click({ force: true});
        cy.wait(3000);
        cy.get(this.btnFilter).click();
        cy.wait(2000);
        cy.get(this.btnReset).click({force: true});

    }

};

export default UserPage;
