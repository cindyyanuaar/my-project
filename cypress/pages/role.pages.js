var RolePage = {
    btnAddRole: '#btnAddRole',
    roleList: '.text-3xl',
    menuRole: '#menuRoleManagement', 
    addRoleModal: 'modal-add-role > .max-w-3xl > .relative > :nth-child(1) > .justify-between > .flex > .space-y-2 > .text-xl', 
    checkboxUser: '#User', 
    checkboxRole: '#Role\ Management',
    checkboxAccountMirroring: '#Account\\ Mirroring', // Checkbox untuk Account Mirroring (memakai escape backslash karena ada spasi di ID)
    inputRoleNameField: '#roleName',
    btnCancelRole: 'form > .flex-row > .text-gray-700',
    btnSave: 'form > .flex-row > .text-white',
    btnEdit: '#btnEdit',
    DetailRole: '#modal-detail-role',
    searchInputRole: '#searchRoleManagement',
    clearButton: '#searchRoleManagementClear', 


    // Fungsi klik menu Role
    clickMenuRole: function() {
        cy.get(this.menuRole).click(); 
    },

    // Fungsi klik 'Add Role'
    clickAddRole: function() {
        cy.get(this.btnAddRole).click({ force: true }); 
    },

    // Fungsi input nama role
    inputRoleName: function(name) {
        cy.get('#roleName').type(name);
    },

    // Fungsi mencentang checkbox "User"
    checkUserFeature: function() {
        cy.get(this.checkboxUser).check(); 
    },

    // Fungsi klik 'Cancel' 
    clickCancel: function() {
        cy.get('form > .flex-row > .text-gray-700').click(); 
    },
    
    // save 
    clickSaveRole: function() {
        cy.get('form > .flex-row > .text-white').click(); 
    },

    // Fungsi Edit 
    clickView: function(){
        cy.get(this.DetailRole).click({ force: true });
        cy.get(this.btnEdit).click({ force: true });
        cy.get(this.checkboxRole).check();
        cy.get(this.btnSave).click();
    },

    // Fungsi search perangkat
    searchRole: function(query) {
        cy.get(this.searchInputRole).type(query); 
        cy.wait(3000);
        cy.get(this.clearButton).click(); 
    },

    }
export default RolePage;
