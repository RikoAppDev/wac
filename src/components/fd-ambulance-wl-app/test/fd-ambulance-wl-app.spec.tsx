import { newSpecPage } from '@stencil/core/testing';
import { FdAmbulanceWlApp } from '../fd-ambulance-wl-app';

  describe('fd-ambulance-wl-app', () => {

    it('renders editor', async () => {
      const page = await newSpecPage({
        url: `http://localhost/entry/@new`,
        components: [FdAmbulanceWlApp],
          html: `<fd-ambulance-wl-app base-path="/"></fd-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("fd-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
        components: [FdAmbulanceWlApp],
          html: `<fd-ambulance-wl-app base-path="/ambulance-wl/"></fd-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("fd-ambulance-wl-list");
  });
});
