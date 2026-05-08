const { expect } = require('@playwright/test');

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
    this.completeHeader = page.locator('.complete-header');
    this.totalLabel = page.locator('.summary_total_label');
    this.itemNames = page.locator('.inventory_item_name');
  }

  async fillDetails(first, last, postal) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(postal);
    await this.continueButton.click();
  }

  async verifyProductsInSummary(expectedProducts) {
    const products = await this.itemNames.allTextContents();
    for (const product of expectedProducts) {
      expect(products).toContain(product);
    }
  }

  async verifyTotalExists() {
    const total = await this.totalLabel.textContent();
    expect(total).toContain('Total:');
    return total;
  }

  async verifyTotalAmount(expectedAmount) {
    const total = await this.totalLabel.textContent();
    expect(total).toContain(expectedAmount);
  }

  async finishOrder() {
    await this.finishButton.click();
  }

  async verifySuccess() {
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }
}

module.exports = { CheckoutPage };