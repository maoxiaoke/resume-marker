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

  return server;
}

async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:1337/', {waitUntil: 'networkidle0'});
  const pdf = await page.pdf({
    path: './resume.pdf',
    margin: {
      top: 39,
      bottom: 38,
      left: 39,
      right: 38,
    },
    format: 'A4',
    printBackground: true,
    headerTemplate: '<span></span>',
    footerTemplate: '<span style="font-size: 8px; display: inline-block; margin-left: 38px; opacity: 0.6;">This is built by Resume Marker - https://github.com/maoxiaoke/resume-marker. Find Me: <a href="https://twitter.com/xiaokedada">Twitter</a> . <a href="https://www.nazha.co/">Blog</a> . <a href="https://github.com/maoxiaoke">Github</a> . <a href="https://nazha-blog.notion.site/nazha-blog/625e1e53ccd2454980464a3d8e5dffd1">Notion</a> . <a href="https://www.zhihu.com/people/mao-xiao-ke">知乎</a></span>',
    displayHeaderFooter: true,
    pageRanges: '1',
  });

  await browser.close();
  return pdf
};

(async () => {
  const server = await startServer()
  await printPDF()

  server.close();
})();