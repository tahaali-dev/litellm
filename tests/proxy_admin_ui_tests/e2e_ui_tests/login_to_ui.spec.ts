import { test, expect } from '@playwright/test';

test.describe('Login and Dashboard Flow', () => {
  
  // This will run first: Login Test
  test('login test', async ({ page }) => {
    // Go to login page
    await page.goto('http://localhost:4000/sso/key/generate');

    // Fill login form
    await page.fill('#username', 'ishaan-litellm');
    await page.fill('#password', 'langchain');
    const loginButton = page.locator('input[type="submit"]');
    await expect(loginButton).toBeEnabled();

    await loginButton.click();

    
    // Wait for navigation to the dashboard or success
    await expect(page).toHaveURL('http://localhost:4000/ui/?userID=default_user_id');

    // await page.goto('http://localhost:3000/ui?userID=default_user_id');

    // // Verify we're now on the 3000 port URL
    // await expect(page).toHaveURL('http://localhost:3000/ui?userID=default_user_id');

    // console.log(page.url());
    
    // // Save the cookies and storage state after login
    await page.context().storageState({ path: '/Users/husain/Desktop/litellm/tests/proxy_admin_ui_tests/fixtures/state.json' });
  });
});


// /*

// Login to Admin UI
// Basic UI Test

// Click on all the tabs ensure nothing is broken
// */

// import { test, expect } from '@playwright/test';

// test('admin login test', async ({ page }) => {
//   // Go to the specified URL
//   await page.goto('http://localhost:4000/sso/key/generate');

//   // Enter "admin" in the username input field
//   await page.fill('input[name="username"]', 'admin');

//   // Enter "gm" in the password input field
//   await page.fill('input[name="password"]', 'gm');

//   // Optionally, you can add an assertion to verify the login button is enabled
//   const loginButton = page.locator('input[type="submit"]');
//   await expect(loginButton).toBeEnabled();

//   // Optionally, you can click the login button to submit the form
//   await loginButton.click();

//   // Save the cookies and storage state after login
//   await page.context().storageState({ 
//     path: 'tests/proxy_admin_ui_tests/fixtures//Users/husain/Desktop/litellm/tests/proxy_admin_ui_tests/fixtures/state.json' 
//   });
//   // const tabs = [
//   //   'Virtual Keys',
//   //   'Test Key',
//   //   'Models',
//   //   'Usage',
//   //   'Teams',
//   //   'Internal User',
//   //   'Settings',
//   //   'Experimental',
//   //   'API Reference',
//   //   'Model Hub'
//   // ];

//   // for (const tab of tabs) {
//   //   const tabElement = page.locator('span.ant-menu-title-content', { hasText: tab });
//   //   await tabElement.click();
//   // }

// });
