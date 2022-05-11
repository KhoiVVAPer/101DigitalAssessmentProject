describe("Example", () => {
  beforeEach(async () => {
    await device.launchApp();
  });

  it("should render login", async () => {
    await expect(element(by.id("login-button-login"))).toBeVisible();
  });

  it('should have "See Your Changes" section', async () => {
    await element(by.id("login-button-login")).tap();
  });
});
