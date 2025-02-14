import { test, expect } from '@playwright/test';

    test.use({
        storageState: '/Users/husain/Desktop/litellm/tests/proxy_admin_ui_tests/fixtures/state.json',  // Use the saved session from login test
    });
    test('Create Team test', async ({ page }) => {

        await page.goto('http://localhost:3000/ui?userID=default_user_id');

        const teamsSpan = page.locator('span', { hasText: 'Teams' });
        await expect(teamsSpan).toBeVisible();
        await teamsSpan.click();

        const createNewTeamButton = page.locator('button', { hasText: '+ Create New Team' });
        await expect(createNewTeamButton).toBeVisible();
        await createNewTeamButton.click();

        const team_alias = page.locator('#team_alias');
        await expect(team_alias).toBeVisible();
        await team_alias.fill('test_team');

        const models_select = page.locator('#create-team-models');
        await expect(models_select).toBeVisible();
        await models_select.click();

        const models_select_option_1 = page.locator('#create-team-models-gpt-4-option');
        await expect(models_select_option_1).toBeVisible();
        await models_select_option_1.click();

        const models_select_option_2 = page.locator('#create-team-models-sagemaker-completion-model-option');
        await expect(models_select_option_2).toBeVisible();
        await models_select_option_2.click();

        const max_budget = page.locator('#max_budget');
        await expect(max_budget).toBeVisible();
        await max_budget.fill('100');

        const additional_settings_button = page.locator('button[id*="headlessui-disclosure-button-"]');
        await expect(additional_settings_button).toBeVisible();
        await additional_settings_button.click();


        const createTeamButton = page.locator('span', { hasText: 'Create Team' });
        await expect(createTeamButton).toBeVisible();
        await createTeamButton.click();
    });
