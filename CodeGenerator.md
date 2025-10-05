ICE
Instruction:
1. We're going to login into the Salesforce application
2. You can use these credentials Login: dilip@testleaf.com & Pswd: Leaf@123
3. You can login and then click on logout button in the page which it is getting navigated on logging in
4. Create a test file under tests folder 
5. Compile and run the code and display the result

Context:
Salesforce login and logout

Example:
import test, { expect } from "@playwright/test";

test("Create Leads", async({page}) =>
{
    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("dilip@testleaf.com")
    await page.locator("#password").fill("Leaf@123")
    //await page.waitForTimeout(5000)
    await page.locator("input[name='Login']").click()
    

    // await page.locator(".slds-icon-waffle").waitFor({ state: 'visible' });
    //await page.locator(".slds-icon-waffle").click();


    await page.locator(".slds-icon-waffle").click()
    await page.locator("//button[@aria-label='View All Applications']").click()
    // await page.waitForLoadState('domcontentloaded');
    // await page.getByRole('button', { name: 'View All Applications' }).click()

    //await page.waitForURL('https://testleaf4-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home', { timeout: 15000 });
    //await page.pause()
    //const viewAllBtn = page.getByRole('button', { name: 'View All Applications' });
    // await viewAllBtn.waitFor({ state: 'visible', timeout: 10000 });
    // await viewAllBtn.click();
    await page.locator("//p[text()='Sales']").click()

    await page.locator("//a[@title='Leads']").click()
    await page.locator("//a[@title='New']").click()

    await page.locator("//button[@name='salutation']").click()
    await page.locator("span[title='Ms.']").click()
    await page.getByPlaceholder("Last Name").fill("Shyam")
    await page.locator("//input[@name='Company']").fill("Acc")
    await page.locator("//button[@name='SaveEdit']").click()

    const leadName = await page.locator("a[title='Shyam']").innerText()
    expect(leadName).toBe("Shyam")
    console.log("Lead is created")



})