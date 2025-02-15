import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage'; 
let homePage;
const topButtons = [
    ['Turtas ir apribojimai', /ntr/],
    ['Juridiniai asmenys', /jar/],
    ['Adresai', /adr/],
    ['Gyventojai', /gr/],
];//defining the website's top buttons so they could be altered in the future if needed.
 const midButtons = [
    ['Klientų savitarna', /savitarna/],
    ['Nuomos, panaudos sutarčių', /1555/],
    ['Informacija žemės mokesčio', /666/],
    ['Mokestinės vertės paieška', /paieska-un/],
    ['Atviri duomenys ir statistika', /atviri_duomenys/],
    ['Pagalba ir konsultacijos', /info.registrucentras.lt/],
    ['Individualus NT vertinimas', /ind_vertinimas/],
    ['Kadastriniai matavimai', /matavimai/],
    ['Energinio naudingumo', /energinis_efektyvumas/],
    ['E. važytynės ir e. aukcionai', /1554/],
    ['Gyventojų registro duomenų', /1575/],
    ['Užsakomųjų duomenų rinkinių', /1645/],
//defining all of the middle page buttons.
 ];


test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);  //  Initialize once for all tests
    await homePage.navigate();  //  Ensures every test starts on the homepage
});

test('Website opens successfully', async () => {
});
    //testing if the website opens.

test.describe('Top Buttons Navigation', () => {
    topButtons.forEach(([linkText, expectedUrlPart]) => {
        test(`"${linkText}" button redirects successfully`, async ({ page }) => {
            await homePage.openSection(linkText, expectedUrlPart);
    });
    });
});
//this group tests for each of the top buttons of the webpage.

test('Measurements banner redirects successfully', async () => {
    await homePage.openMeasurements();
});

test.describe('Middle page buttons navigation', () => {
    midButtons.forEach(([linkText, expectedUrlPart]) => {
        test(`"${linkText}" button redirects successfully`, async ({ page }) => {
            await homePage.openSection(linkText, expectedUrlPart);
            //testing for all of the buttons in the middle of the page.
    });
    });
});