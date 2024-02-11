class InventoryPage{

    elements = {
        productTitle: ()=> cy.get('[class="nav navbar-nav"]')
    }



}

module.exports = new InventoryPage();