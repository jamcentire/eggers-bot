const { firefox } = require('playwright');

console.log('Hello, world!');


(async () => {
  const browser = await firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://nytimes.com');
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
})();