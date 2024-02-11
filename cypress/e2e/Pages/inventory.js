class InventoryPage{

    elements = {
        carousel: ()=> cy.get('[id="slider-carousel"]')
    }



}

module.exports = new InventoryPage();