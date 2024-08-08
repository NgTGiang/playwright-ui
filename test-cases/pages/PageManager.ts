import { Page } from "@playwright/test";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";

export class PageManager{
  private readonly page: Page;
  private readonly homePage: HomePage;
  private readonly loginPage: LoginPage;

  constructor(page: Page) {
    this.page = page;
    this.homePage = new HomePage(this.page);
    this.loginPage = new LoginPage(this.page);
  }

  onHomePage = () => this.homePage;

  onLoginPage = () => this.loginPage;

}