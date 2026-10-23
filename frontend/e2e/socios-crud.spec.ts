import { expect, test, type Page } from '@playwright/test';

import { login } from './helpers';

async function seleccionarOpcion(page: Page, etiqueta: string, opcion: string): Promise<void> {
  await page.getByLabel(etiqueta).click();
  await page.getByRole('option', { name: opcion, exact: true }).click();
}

test.describe('CRUD de socios', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('crea, edita y elimina un socio', async ({ page }) => {
    const codigo = `E2E-${Date.now()}`;

    await page.getByRole('link', { name: '+ Nuevo socio' }).click();
    await expect(page).toHaveURL(/\/socios\/nuevo$/);

    await page.getByLabel('Código').fill(codigo);
    await page.getByLabel('Nombres').fill('Ana');
    await page.getByLabel('Apellidos').fill('Torres');
    await seleccionarOpcion(page, 'Acción', 'Ordinaria');
    await seleccionarOpcion(page, 'Etapa', 'Etapa 1');
    await page.getByLabel('Fecha de nacimiento').fill('1992-04-10');
    await page.getByRole('button', { name: 'Guardar' }).click();

    await expect(page).toHaveURL(/\/socios$/);
    await expect(page.getByText('Socio creado correctamente.')).toBeVisible();

    const fila = page.locator('tr', { hasText: codigo });
    await expect(fila).toBeVisible();
    await expect(fila.getByText('Etapa 1', { exact: true })).toBeVisible();

    await fila.getByRole('link', { name: 'Editar' }).click();
    await expect(page.getByLabel('Código')).toHaveValue(codigo);

    await seleccionarOpcion(page, 'Etapa', 'Etapa 2');
    await page.getByRole('button', { name: 'Guardar' }).click();

    await expect(page.getByText('Socio actualizado correctamente.')).toBeVisible();
    const filaActualizada = page.locator('tr', { hasText: codigo });
    await expect(filaActualizada.getByText('Etapa 2', { exact: true })).toBeVisible();

    page.once('dialog', (dialog) => dialog.accept());
    await filaActualizada.getByRole('button', { name: 'Eliminar' }).click();

    await expect(page.getByText('Socio eliminado correctamente.')).toBeVisible();
    await expect(page.locator('tr', { hasText: codigo })).toHaveCount(0);
  });

  test('cancela la eliminación si se rechaza la confirmación', async ({ page }) => {
    const codigo = `E2E-CANCEL-${Date.now()}`;

    await page.getByRole('link', { name: '+ Nuevo socio' }).click();
    await page.getByLabel('Código').fill(codigo);
    await page.getByLabel('Nombres').fill('Luis');
    await page.getByLabel('Apellidos').fill('Gómez');
    await seleccionarOpcion(page, 'Acción', 'Preferente');
    await seleccionarOpcion(page, 'Etapa', 'Etapa 1');
    await page.getByLabel('Fecha de nacimiento').fill('1988-01-15');
    await page.getByRole('button', { name: 'Guardar' }).click();

    const fila = page.locator('tr', { hasText: codigo });
    await expect(fila).toBeVisible();

    page.once('dialog', (dialog) => dialog.dismiss());
    await fila.getByRole('button', { name: 'Eliminar' }).click();

    await expect(page.locator('tr', { hasText: codigo })).toHaveCount(1);
  });

  test('no permite guardar el formulario si faltan campos obligatorios', async ({ page }) => {
    await page.getByRole('link', { name: '+ Nuevo socio' }).click();
    const botonGuardar = page.getByRole('button', { name: 'Guardar' });
    await expect(botonGuardar).toBeDisabled();

    await page.getByLabel('Código').focus();
    await page.getByLabel('Nombres').focus();

    await expect(page).toHaveURL(/\/socios\/nuevo$/);
    await expect(page.getByText('El código es obligatorio.')).toBeVisible();
  });
});
