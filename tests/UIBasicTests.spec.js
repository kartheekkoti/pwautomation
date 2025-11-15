const { test, expect } = require("@playwright/test");

test("Opening Google page using context", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.google.com");
  expect(await page.title()).toBe("Google");
});

test("Opening Google page using page fixture", async ({ page }) => {
  await page.goto("https://www.google.com");
  await expect(page).toHaveTitle("Google");
});
