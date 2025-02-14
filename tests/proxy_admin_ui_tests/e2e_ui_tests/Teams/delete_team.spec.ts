import { test, expect } from '@playwright/test';

    test.use({
        storageState: '/Users/husain/Desktop/litellm/tests/proxy_admin_ui_tests/fixtures/state.json',  // Use the saved session from login test
    });
    test('Delete Team test', async ({ page }) => {

        await page.goto('http://localhost:3000/ui?userID=default_user_id');

        const teamsSpan = page.locator('span', { hasText: 'Teams' });
        await expect(teamsSpan).toBeVisible();
        await teamsSpan.click();

        const tbody = page.locator('tbody').filter({ hasText: 'test_team' });
        await expect(tbody).toBeVisible();

        const row = tbody.locator('tr').filter({ hasText: 'test_team' });
        await expect(row).toBeVisible();

        const lastCell = row.locator('td').last();
        await expect(lastCell).toBeVisible();

        const deleteButton = lastCell.locator('span').last();
        await expect(deleteButton).toBeVisible();
        await deleteButton.click();

        const confirmButton = page.locator('span', { hasText: 'Delete' });
        await expect(confirmButton).toBeVisible();
        await confirmButton.click();
    });
