import { Page } from '@playwright/test';

export class HomePage{

  constructor(private readonly page: Page) {
    this.page = page;
  }

  async goToHomePage() {
    await this.page.goto('http://practice.automationtesting.in/');
    return new HomePage(this.page);
  }

  async clickShopButton() {
    await this.page.getByTestId('menu-item-40').click();
  }
}
