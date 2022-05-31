import fs from 'fs';
import puppeteer from 'puppeteer';

async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://www.nazha.co', {waitUntil: 'networkidle0'});
  const pdf = await page.pdf({ format: 'A4' });

  await browser.close();
  return pdf
};

(async () => {
  const pdf = await printPDF()
  console.log('pdf', pdf)

  fs.writeFileSync('./some.pdf', pdf)
})();