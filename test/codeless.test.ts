import {chromium} from "playwright";

describe('launch browser', () => {

    test('Recorded script', async() =>{

        const browser = await chromium.launch({

            headless: false
        });
            const context = await browser.newContext({
              recordVideo:{
                dir: "./videos/",
              size: {
                width: 800,
                height: 600
              }
            }
            });

            const page = await context.newPage();


                      // Go to https://letcode.in/

  await page.goto('https://letcode.in/');

  // Click text=Log in

  await page.click('text=Log in');

  //await expect(page).toHaveURL('https://letcode.in/signin');

  // Click [placeholder="Enter registered email"]

  await page.click('[placeholder="Enter registered email"]');

  // Fill [placeholder="Enter registered email"]

  await page.fill('[placeholder="Enter registered email"]', 'jayakrishna2398@gmail.com');

  // Press Tab

  await page.press('[placeholder="Enter registered email"]', 'Tab');

  // Fill [placeholder="Enter password"]

  await page.fill('[placeholder="Enter password"]', 'kicha23031998');

  // Click button:has-text("LOGIN")

  await Promise.all([

    page.waitForNavigation(/*{ url: 'https://letcode.in/' }*/),

    page.click('button:has-text("LOGIN")')

  ]);

  // Click text=Product

  await page.click('text=Product');

  //await expect(page).toHaveURL('https://letcode.in/letxpath');

  // Click text=Work Space

  await page.click('text=Work Space');

  //await expect(page).toHaveURL('https://letcode.in/test');

  // Click text=All in One

  await page.click('text=All in One');

  //await expect(page).toHaveURL('https://letcode.in/forms');

  // Click [placeholder="Text input"]

  await page.click('[placeholder="Text input"]');

  // Press CapsLock

  await page.press('[placeholder="Text input"]', 'CapsLock');
  
  // Fill [placeholder="Text input"]

  await page.fill('[placeholder="Text input"]', 'R');

  // Press CapsLock

  await page.press('[placeholder="Text input"]', 'CapsLock');

  // Fill [placeholder="Text input"]

  await page.fill('[placeholder="Text input"]', 'Ravi');

  // Press Tab

  await page.press('[placeholder="Text input"]', 'Tab');

  // Press CapsLock

  await page.press('#lasttname', 'CapsLock');

  // Fill #lasttname

  await page.fill('#lasttname', 'K');

  // Press CapsLock

  await page.press('#lasttname', 'CapsLock');

  // Fill #lasttname

  await page.fill('#lasttname', 'Kumar');

  // Press Tab

  await page.press('#lasttname', 'Tab');

  // Press ArrowRight

  await page.press('[placeholder="Email input"]', 'ArrowRight');

  // Fill [placeholder="Email input"]

  await page.fill('[placeholder="Email input"]', 'hello@gmail.com');

  // Click [placeholder="Phone Number"]

  await page.click('[placeholder="Phone Number"]');

  // Fill [placeholder="Phone Number"]

  await page.fill('[placeholder="Phone Number"]', '6670934056');

  // Click [placeholder="Address Line-1"]

  await page.click('[placeholder="Address Line-1"]');

  // Fill [placeholder="Address Line-1"]

  await page.fill('[placeholder="Address Line-1"]', 'guindy');

  // Press Tab

  await page.press('[placeholder="Address Line-1"]', 'Tab');

  // Fill [placeholder="Address Line-2"]

  await page.fill('[placeholder="Address Line-2"]', 'chennai');

  // Press Tab

  await page.press('[placeholder="Address Line-2"]', 'Tab');

  // Press CapsLock

  await page.press('[placeholder="State"]', 'CapsLock');

  // Fill [placeholder="State"]

  await page.fill('[placeholder="State"]', 'TN');

  // Press CapsLock

  await page.press('[placeholder="State"]', 'CapsLock');

  // Click [placeholder="Postal-Code"]

  await page.click('[placeholder="Postal-Code"]');

  // Fill [placeholder="Postal-Code"]

  await page.fill('[placeholder="Postal-Code"]', '678903');

  // Fill input[name="dob"]

  await page.fill('input[name="dob"]', '1995-04-01');

  // Fill input[name="gender"]

  //await page.fill('input[name="gender"]', 'on');

  // Click input[name="gender"]

  await page.click('input[name="gender"]');

  // Check input[type="checkbox"]

  await page.check('input[type="checkbox"]');

  // Click input[type="submit"]

  await Promise.all([

    page.waitForNavigation(/*{ url: 'https://letcode.in/forms' }*/),

    page.click('input[type="submit"]')

  ]);

  // Click text=Sign out

  await Promise.all([

    page.waitForNavigation(/*{ url: 'https://letcode.in/' }*/),

    page.click('text=/.*Sign out.*/')

  ]);
})
    })