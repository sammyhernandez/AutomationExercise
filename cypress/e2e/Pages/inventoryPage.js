class InventoryPage{

    elements = {
        carousel: ()=> cy.get('[id="slider-carousel"]'),
        productList: ()=> cy.get('[class="col-sm-9 padding-right"]'),
        product: ()=> cy.get('.features_items > :nth-child(3) > .product-image-wrapper'),
        productDetail: ()=> cy.get('[href="/product_details/1"]'),
        productDetailTitle: ()=> cy.get('[class="product-information"]'),
        addToCarButton: ()=> cy.get('[type="button"]'),
        productAdded: ()=> cy.get('[class="modal-title w-100"]'),
        continueShoppingButton: ()=> cy.get('[class="btn btn-success close-modal btn-block"]'),
        viewCarButton: ()=> cy.get('a[href="/view_cart"]'),
        productInTheCart: ()=> cy.get('[id="product-1"]')
        
   }

   validateProductList(){
    this.elements.productList().find('div').then(products =>{
      cy.wrap(products).should('contain', 'Men Tshirt')
      //cy.wrap(products).should('to.have.text','Men Tshirt').click()
    })
   }
   viewProduct(){
    this.elements.product().eq(0).should('to.be.visible')
    this.elements.productDetail().should('to.be.visible').click()
    this.elements.productDetailTitle().should('contain', 'Blue Top')
 }
   addToCar(){
    this.elements.addToCarButton().should('contain','Add to cart').click()
    this.elements.productAdded().should('contain','Added!')
   }
   viewCar(){
    this.elements.viewCarButton().eq(1).click()
   }
   validateProductInTheCart(){
    this.elements.productInTheCart().should('contain', 'Blue Top')
   }
}

module.exports = new InventoryPage();