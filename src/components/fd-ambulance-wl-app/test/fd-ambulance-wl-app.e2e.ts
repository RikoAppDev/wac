import { newE2EPage } from '@stencil/core/testing';

describe('fd-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fd-ambulance-wl-app></fd-ambulance-wl-app>');

    const element = await page.find('fd-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
