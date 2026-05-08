import { expect } from '@playwright/test';

class ProductsPage {
  constructor(page) {
    this.page = page;
    this.sortDropdown = page.locator('.product_sort_container');
    this.cartLink = page.locator('.shopping_cart_link');
    this.burgerMenu = page.locator('#react-burger-menu-btn');
    this.resetAppState = page.locator('#reset_sidebar_link');
    this.logoutLink = page.locator('#logout_sidebar_link');
    this.inventoryList = page.locator('.inventory_list');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async verifyPageLoaded() {
    await expect(this.inventoryList).toBeVisible();
  }

  async resetState() {
    await this.burgerMenu.click();
    await this.page.locator('.bm-menu-wrap').waitFor({ state: 'visible' });
    await this.resetAppState.click();
    await this.page.locator('#react-burger-cross-btn').click();
    await this.page.locator('.bm-menu-wrap').waitFor({ state: 'hidden' });
  }

  async logout() {
    await this.burgerMenu.click();
    await this.page.locator('.bm-menu-wrap').waitFor({ state: 'visible' });
    await this.logoutLink.click();
  }

  async sortZA() {
    await this.sortDropdown.selectOption('za');
  }

  async getFirstProductName() {
    const firstName = await this.page.locator('.inventory_item_name').first().textContent();
    return firstName.trim();
  }

  async addProductToCart(productId) {
    await this.page.locator(`#add-to-cart-${productId}`).click();
  }

  async addFirstProductToCart() {
    const firstProduct = this.page.locator('.inventory_item').first();
    const productName = await firstProduct.locator('.inventory_item_name').textContent();
    await firstProduct.locator('.btn_inventory').click();
    return productName.trim();
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async verifyCartCount(count) {
    await expect(this.cartBadge).toHaveText(String(count));
  }
}

export { ProductsPage };