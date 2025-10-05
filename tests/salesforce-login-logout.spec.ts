import test, { expect } from "@playwright/test";

test("Salesforce Login and Logout", async ({ page }) => {
  // Go to Salesforce login page
  await page.goto("https://login.salesforce.com/");
  await page.locator("#username").fill("dilip@testleaf.com");
  await page.locator("#password").fill("Leaf@123");
  await page.locator("input[name='Login']").click();

  // Wait for the home page to load (adjust selector as needed)
  await page.waitForSelector(".slds-icon-waffle", { timeout: 15000 });

  // Click on user profile icon (adjust selector as needed)
  await page.locator("button[title*='User'], .profileTrigger, .oneUserProfileCardTrigger").first().click();

  // Click on Logout (adjust selector as needed)
  await page.locator("a[title='Log Out'], a[title='Logout'], a.logout").first().click();

  // Verify logout by checking login page is visible again
  await expect(page.locator("#username")).toBeVisible();
  console.log("Login and Logout successful");
  console.log("Checking the GitHub code update")
});
