import { test as base } from '@playwright/test';
import { LoginPage } from '@page/login/login.page';
import { RegistrationPage } from '@page/login/registration.page';


type TestFixtures = {
    loginPage: LoginPage;
    registrationPage:RegistrationPage;
};

export const test = base.extend<TestFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page, base.info());
        await use(loginPage);
    },
    registrationPage: async ({ page }, use) => {
        const registrationPage = new RegistrationPage(page, base.info());
        await use(registrationPage);
      },
});
