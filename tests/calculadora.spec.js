const { test, expect } = require('@playwright/test');
const path = require('path');

test.beforeEach(async ({ page }) => {
  const filePath = path.resolve(__dirname, '../index.html');
  await page.goto(`file://${filePath}`);
});

test.describe('Testes da Calculadora DevOps', () => {

  test('Deve somar 7 + 5 e exibir 12 no display', async ({ page }) => {
    await page.locator('button:has-text("7")').click();
    await page.locator('button:has-text("+")').click();
    await page.locator('button:has-text("5")').click();
    await page.locator('#btn-calcular').click();

    const display = page.locator('#display');
    await expect(display).toHaveValue('12');
  });

  test('Deve mudar a cor de fundo ao selecionar o tema Cyberpunk Neon', async ({ page }) => {
    await page.locator('#theme-select').selectOption('neon');
    const body = page.locator('body');
    await expect(body).toHaveCSS('background-color', 'rgb(15, 23, 42)');
  });

});
