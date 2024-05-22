# Getting Started

## Installation

1. Copy this repo.
2. Run `npm install` in integrated terminal.
3. Update `package.json` with your project name and version number.

## Development

Run `npm run watch` in integrated terminal.
*Note: To exit this process, press `control + c` with the terminal selected.*

This will start automatically bundling your code on each save.

It will also start a local server at `http://localhost:8080/`

Put this in a custom code block at the end of your page:
`<script src="http://localhost:8080/main.js"></script>`

***You should never edit the `dist` folder, only the `src` folder. The `dist` folder will be automatically generated.***

## Deployment

Update `package.json` with the latest version number.

Run `npm run build` in integrated terminal

This will bundle your code into the `dist` folder, with a JS file and a Webflow-compatible `txt` file.

Upload this TXT file to Webflow, and link to it like you would any other JS file:
`<script src="webflow-url-here.txt" type="text/javascript"></script>`

**This should replace the localhost script tag you added during development.**
