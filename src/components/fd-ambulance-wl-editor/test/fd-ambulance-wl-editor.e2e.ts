import { newE2EPage } from '@stencil/core/testing';

describe('fd-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fd-ambulance-wl-editor></fd-ambulance-wl-editor>');

    const element = await page.find('fd-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
