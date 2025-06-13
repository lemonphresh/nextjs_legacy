import { expect,test } from "@playwright/test";

test("homepage has title", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page).toHaveTitle("Lemon");
});
