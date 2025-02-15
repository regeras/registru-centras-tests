import { expect } from '@playwright/test';

export class HomePage {
    constructor(page) {
        this.page = page;
    }

async navigate() {
    await this.page.goto('https://www.registrucentras.lt/');
    await expect(this.page).toHaveURL(/registrucentras.lt/);
//defining navigate to open the page and check the url.
}


//defining openSection to let me test all the buttons.
async openSection(linkText, expectedUrlPart) {
    await this.page.getByRole('link', { name: linkText}).first().click();
    await expect(this.page).toHaveURL(expectedUrlPart);
 }

async openMeasurements() {
    await this.page.getByRole('link', { name: 'Kadastriniai matavimai' }).first().click();
    await expect(this.page).toHaveURL(/matavimai/);
}


}
