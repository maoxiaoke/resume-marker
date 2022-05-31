"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const generator_1 = require("@pdfme/generator");
const template = {
    basePdf: generator_1.BLANK_PDF,
    schemas: [
        {
            a: {
                type: 'text',
                position: { x: 0, y: 0 },
                width: 10,
                height: 10,
            },
            b: {
                type: 'text',
                position: { x: 10, y: 10 },
                width: 10,
                height: 10,
            },
            c: {
                type: 'text',
                position: { x: 20, y: 20 },
                width: 10,
                height: 10,
            },
        },
    ],
};
const inputs = [{ a: 'a1', b: 'b1', c: 'c1' }];
(0, generator_1.generate)({ template, inputs }).then((pdf) => {
    console.log(pdf);
    // Browser
    // const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
    // window.open(URL.createObjectURL(blob));
    // Node.js
    fs_1.default.writeFileSync(path_1.default.join(__dirname, `test.pdf`), pdf);
});
