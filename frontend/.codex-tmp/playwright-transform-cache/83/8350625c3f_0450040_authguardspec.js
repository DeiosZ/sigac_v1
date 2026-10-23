// 397e5a50c7015b576d6f827c733562877283840a
"use strict";

var _test = require("@playwright/test");
_test.test.describe('Guard de autenticación', () => {
  (0, _test.test)('redirige a /login si se intenta acceder a /socios sin sesión', async ({
    page
  }) => {
    await page.goto('/socios');
    await (0, _test.expect)(page).toHaveURL(/\/login$/);
  });
  (0, _test.test)('redirige a /login si se intenta acceder al formulario de socios sin sesión', async ({
    page
  }) => {
    await page.goto('/socios/nuevo');
    await (0, _test.expect)(page).toHaveURL(/\/login$/);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdGVzdCIsInJlcXVpcmUiLCJ0ZXN0IiwiZGVzY3JpYmUiLCJwYWdlIiwiZ290byIsImV4cGVjdCIsInRvSGF2ZVVSTCJdLCJzb3VyY2VzIjpbImF1dGgtZ3VhcmQuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHBlY3QsIHRlc3QgfSBmcm9tICdAcGxheXdyaWdodC90ZXN0JztcclxuXHJcbnRlc3QuZGVzY3JpYmUoJ0d1YXJkIGRlIGF1dGVudGljYWNpw7NuJywgKCkgPT4ge1xyXG4gIHRlc3QoJ3JlZGlyaWdlIGEgL2xvZ2luIHNpIHNlIGludGVudGEgYWNjZWRlciBhIC9zb2Npb3Mgc2luIHNlc2nDs24nLCBhc3luYyAoeyBwYWdlIH0pID0+IHtcclxuICAgIGF3YWl0IHBhZ2UuZ290bygnL3NvY2lvcycpO1xyXG5cclxuICAgIGF3YWl0IGV4cGVjdChwYWdlKS50b0hhdmVVUkwoL1xcL2xvZ2luJC8pO1xyXG4gIH0pO1xyXG5cclxuICB0ZXN0KCdyZWRpcmlnZSBhIC9sb2dpbiBzaSBzZSBpbnRlbnRhIGFjY2VkZXIgYWwgZm9ybXVsYXJpbyBkZSBzb2Npb3Mgc2luIHNlc2nDs24nLCBhc3luYyAoeyBwYWdlIH0pID0+IHtcclxuICAgIGF3YWl0IHBhZ2UuZ290bygnL3NvY2lvcy9udWV2bycpO1xyXG5cclxuICAgIGF3YWl0IGV4cGVjdChwYWdlKS50b0hhdmVVUkwoL1xcL2xvZ2luJC8pO1xyXG4gIH0pO1xyXG59KTtcclxuIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtBQUVBQyxVQUFJLENBQUNDLFFBQVEsQ0FBQyx3QkFBd0IsRUFBRSxNQUFNO0VBQzVDLElBQUFELFVBQUksRUFBQyw4REFBOEQsRUFBRSxPQUFPO0lBQUVFO0VBQUssQ0FBQyxLQUFLO0lBQ3ZGLE1BQU1BLElBQUksQ0FBQ0MsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUUxQixNQUFNLElBQUFDLFlBQU0sRUFBQ0YsSUFBSSxDQUFDLENBQUNHLFNBQVMsQ0FBQyxVQUFVLENBQUM7RUFDMUMsQ0FBQyxDQUFDO0VBRUYsSUFBQUwsVUFBSSxFQUFDLDRFQUE0RSxFQUFFLE9BQU87SUFBRUU7RUFBSyxDQUFDLEtBQUs7SUFDckcsTUFBTUEsSUFBSSxDQUFDQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBRWhDLE1BQU0sSUFBQUMsWUFBTSxFQUFDRixJQUFJLENBQUMsQ0FBQ0csU0FBUyxDQUFDLFVBQVUsQ0FBQztFQUMxQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=