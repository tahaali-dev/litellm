import { test, expect } from '@playwright/test';

    test.use({
        storageState: '/Users/husain/Desktop/litellm/tests/proxy_admin_ui_tests/fixtures/state.json',  // Use the saved session from login test
    });
    test('Invite User in Team test', async ({ page }) => {

        await page.goto('http://localhost:3000/ui?userID=default_user_id');

        const teamsSpan = page.locator('span', { hasText: 'Internal Users' });
        await expect(teamsSpan).toBeVisible();
        await teamsSpan.click();
        
        const inviteUserSpan = page.locator('span', { hasText: '+ Invite User' });
        await expect(inviteUserSpan).toBeVisible();
        await inviteUserSpan.click();

        const user_email = 'user1@gmail.com';
        const user_role = 'proxy_admin';
        const user_team_id = 'test_team';

        const user_email_input = page.locator('#user_email');
        await expect(user_email_input).toBeVisible();
        await user_email_input.fill(user_email);

        const user_role_input = page.locator('#user_role');
        await expect(user_role_input).toBeVisible();
        await user_role_input.click();

        const user_role_option = page.locator(`#user_role_${user_role}_option`);
        await expect(user_role_option).toBeVisible();
        await user_role_option.click();

        const user_team_id_input = page.locator('#user_team_id');
        await expect(user_team_id_input).toBeVisible();
        await user_team_id_input.click();

        const user_team_id_option = page.locator(`#user_team_id_${user_team_id}_option`);
        await expect(user_team_id_option).toBeVisible();
        await user_team_id_option.click();

        const createUserSpan = page.locator('span', { hasText: 'Create User' });
        await expect(createUserSpan).toBeVisible();
        await createUserSpan.click();

        const copyInvitationLinkSpan = page.locator('span', { hasText: 'Copy invitation link' });
        await expect(copyInvitationLinkSpan).toBeVisible();
        await copyInvitationLinkSpan.click();

        await page.mouse.click(500, 450);

    });
