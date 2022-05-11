const makeId = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

describe("Main flow", () => {
  beforeEach(async () => {
    await device.launchApp();
  });

  it("should render login", async () => {
    await expect(element(by.id("header-login"))).toBeVisible();
    await expect(element(by.id("login-username-input"))).toBeVisible();
    await expect(element(by.id("login-password-input"))).toBeVisible();
    await expect(element(by.id("login-button-login"))).toBeVisible();
  });

  it("should show error when login failed", async () => {
    const randomText = makeId(10);
    await element(by.id("login-username-input")).typeText(randomText);
    await element(by.id("login-password-input")).typeText(randomText);
    await element(by.id("login-button-login")).tap();
    await waitFor(element(by.id("login-error")))
      .toBeVisible()
      .withTimeout(5000);
  });

  it("should navigate to dashboard when login success", async () => {
    await element(by.id("login-username-input")).clearText();
    await element(by.id("login-username-input")).typeText(
      "dung+octopus4@101digital.io"
    );
    await element(by.id("login-password-input")).clearText();
    await element(by.id("login-password-input")).typeText("Abc@123456");
    await element(by.id("login-button-login")).tap();
    await waitFor(element(by.id("header-dashboard")))
      .toBeVisible()
      .withTimeout(5000);
  });

  it("should navigate to invoice details when click in one item", async () => {
    await expect(element(by.id("dashboard-list-invoice"))).toBeVisible();
    await expect(element(by.id("invoice-row-0"))).toBeVisible();
    await element(by.id("invoice-row-0")).tap();
    await expect(element(by.id("header-invoice-details"))).toBeVisible();
  });

  it("should navigate back to dashboard when click on back arrow", async () => {
    await element(by.id("header-invoice-details-btn-go-back")).tap();
    await expect(element(by.id("dashboard-list-invoice"))).toBeVisible();
  });

  it("should navigate to create invoice when click on add button", async () => {
    await element(by.id("header-dashboard-btn-right")).tap();
    await expect(element(by.id("header-create-invoice"))).toBeVisible();
    await expect(element(by.id("invoice-details-save-btn"))).toBeVisible();
  });

  it("should create successful new invoice and show in list", async () => {
    const randomStr = makeId(10);
    await element(by.id("invoice-details-descriptions-input")).typeText(
      randomStr
    );
    await element(by.id("invoice-details-save-btn")).tap();
    await waitFor(element(by.id("header-dashboard")))
      .toBeVisible()
      .withTimeout(5000);
    await element(by.id("invoice-row-0")).tap();
    await expect(
      element(by.id("invoice-details-descriptions-input"))
    ).toHaveText(randomStr);
    await element(by.id("header-invoice-details-btn-go-back")).tap();
    await expect(element(by.id("header-dashboard"))).toBeVisible();
  });

  it("should change data when change sort order", async () => {
    const firstItemInvoiceNumber = (
      await element(by.id("invoice-row-0-invoiceNumber-value")).getAttributes()
    ).text;
    await element(by.id("dashboard-sort-btn")).tap();
    await waitFor(element(by.id("invoice-row-0-invoiceNumber-value")))
      .not.toHaveText(firstItemInvoiceNumber)
      .withTimeout(5000);
  });

  it("should found invoice when input specific invoice number", async () => {
    const invoiceNumber = "INV1652282269111";
    await element(by.id("dashboard-search-input")).typeText(invoiceNumber);
    await waitFor(element(by.id("invoice-row-0-invoiceNumber-value")))
      .toHaveText(invoiceNumber)
      .withTimeout(5000);
  });

  it("should not found any item when input wrong format invoice number", async () => {
    const invoiceNumber = makeId(10);
    await element(by.id("dashboard-search-input")).clearText();
    await element(by.id("dashboard-search-input")).typeText(invoiceNumber);
    await waitFor(element(by.id("invoice-row-0-invoiceNumber-value")))
      .not.toBeVisible()
      .withTimeout(5000);
  });

  it("should reload data when clear input search", async () => {
    await expect(
      element(by.id("dashboard-search-input-btn-clear"))
    ).toBeVisible();
    await element(by.id("dashboard-search-input-btn-clear")).tap();

    await waitFor(element(by.id("invoice-row-0-invoiceNumber-value")))
      .toBeVisible()
      .withTimeout(5000);
  });

  it("should logout success when press logout", async () => {
    await expect(element(by.id("header-dashboard-btn-left"))).toBeVisible();
    await element(by.id("header-dashboard-btn-left")).tap();

    await waitFor(element(by.id("header-login")))
      .toBeVisible()
      .withTimeout(2000);
  });
});
