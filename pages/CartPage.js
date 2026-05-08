const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('#checkout');
    this.cartItems = page.locator('.cart_item');
    this.itemNames = page.locator('.inventory_item_name');
  }

  async checkout() {
    await this.checkoutButton.click();
  }

  async verifyItemsInCart(expectedItems) {
    const itemNames = await this.itemNames.allTextContents();
    for (const item of expectedItems) {
      expect(itemNames).toContain(item);
    }
  }

  async verifyCartNotEmpty() {
    const count = await this.cartItems.count();
    expect(count).toBeGreaterThan(0);
  }
}

module.exports = { CartPage };