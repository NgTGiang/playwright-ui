import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test.describe("Home Page with three Sliders only", () => {
  test("", async ({ page }) => {
    const homePage = new HomePage(page);
    (await homePage.goToHomePage())
            .clickShopButton();
  })
})