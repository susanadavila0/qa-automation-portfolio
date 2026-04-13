class LoginPage {
  // Locators
  constructor(page) {
    this.page = page;
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.loginButton = 'button[type="submit"]';
    this.errorMessage = '.error-message';
  }

  // Methods
  async navigateTo(url) {
    await this.page.goto(url);
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async getErrorMessage() {
    return await this.page.textContent(this.errorMessage);
  }

  async isErrorMessageVisible() {
    return await this.page.isVisible(this.errorMessage);
  }
}

module.exports = LoginPage;