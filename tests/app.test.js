const { By, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const { createDriver } = require('./driverFactory');

const timeout = 30000;

describe('React App E2E Tests (Jest + Selenium + Firefox)', () => {
  let driver;

  beforeAll(async () => {
    driver = await createDriver();

    // Ensure your Vite app is running via `npm run dev` on port 5173
    await driver.get('http://localhost:5173');
  }, timeout);

  afterAll(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  test('should load the application header', async () => {
    const header = await driver.findElement(By.css('header h1'));
    const text = await header.getText();
    expect(text).toBe('Student Task Manager');
  });

  test('should add a new task to the list', async () => {
    const input = await driver.findElement(By.id('task-input'));
    const text = 'Master Jest and Firefox Testing';
    await input.sendKeys(text);

    const button = await driver.findElement(By.id('add-btn'));
    await button.click();

    // Wait for the new task item to render
    const taskItem = await driver.wait(
      until.elementLocated(By.xpath(`//span[contains(text(), '${text}')]`)),
      5000
    );

    expect(await taskItem.isDisplayed()).toBe(true);
  });
});
