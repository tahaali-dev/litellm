import { test, expect } from '@playwright/test';

    test.use({
        storageState: '/Users/husain/Desktop/litellm/tests/proxy_admin_ui_tests/fixtures/state.json',  // Use the saved session from login test
    });
    test('Edit Team test', async ({ page }) => {

        const willlSubmit = true;
        const willlBackButton = false;


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

        const editButton = lastCell.locator('span').first();
        await expect(editButton).toBeVisible();
        await editButton.click();

        const editSettings = page.locator('span', { hasText: 'Edit Settings' });
        await expect(editSettings).toBeVisible();
        await editSettings.click();

        const team_alias = page.locator('#team_alias');
        await expect(team_alias).toBeVisible();
        await team_alias.fill('test_team_x_y_z');

        const models_list_selector = page.locator('.ant-select-selection-overflow').first();
        await expect(models_list_selector).toBeVisible();
        
        // Select and remove the first item in the selection overflow
        const firstItem = page.locator('.ant-select-selection-item-remove').first();
        await expect(firstItem).toBeVisible();
        await firstItem.click();
        await page.keyboard.press('Backspace');

        if (willlSubmit) {
            const submitButton = page.locator('span', { hasText: 'Save Change' });
            await expect(submitButton).toBeVisible();
            await submitButton.click();
        } else {
            const cancelButton = page.locator('span', { hasText: 'Cancel' });
            await expect(cancelButton).toBeVisible();
            await cancelButton.click();
        }

        if(willlBackButton) {
            const backButton = page.locator('span', { hasText: '← Back' });
            await expect(backButton).toBeVisible();
            await backButton.click();
        }

        // const isTeamTitleVisible = page.locator('.text-tremor-title').first();
        // await expect(isTeamTitleVisible).toBeVisible();

        // const isTeamIdVisible = page.locator('.font-mono').first();
        // await expect(isTeamIdVisible).toBeVisible();

    });
