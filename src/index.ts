import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

import { createServer } from 'vite';

async function startServer() {
  const server = await createServer({
    configFile: path.join(__dirname, '../client/vite.config.ts'),
    root: path.join(__dirname, '../client'),
    server: {
      port: 1337
    }
  });

  await server.listen();
  server.printUrls();
}

async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:1337/', {waitUntil: 'networkidle0'});
  const pdf = await page.pdf({ format: 'A4' });

  await browser.close();
  return pdf
};

(async () => {
  await startServer()
  const pdf = await printPDF()
  console.log('pdf', pdf)

  fs.writeFileSync('./some.pdf', pdf)
})();