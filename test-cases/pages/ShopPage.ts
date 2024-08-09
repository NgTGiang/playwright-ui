import { Page } from "@playwright/test";

export class ShopPage{

  constructor(private readonly page: Page) {
    this.page = page;
  }

  async clickHomeButton() {
    
  }
}