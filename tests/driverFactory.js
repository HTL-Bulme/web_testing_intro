const { Builder } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

async function createDriver() {
  let options = new firefox.Options();
  const isHeadless = process.env.HEADLESS !== 'false';

  if (isHeadless) {
    options.addArguments('-headless');
    // may prevent rendering bugs
    options.addArguments('--width=1920');
    options.addArguments('--height=1080');
  }

  let driver = await new Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(options)
    .build();

  return driver;
}

module.exports = { createDriver };
