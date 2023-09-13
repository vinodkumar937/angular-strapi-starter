import fse from "fs-extra";
import _ from "lodash";
import fs from "fs";

async function modifyTailwindConfigFile() {
  try {
    const tmpl = fs.readFileSync("../scripts/templates/tailwind/tailwind.template");
    const compile = _.template(tmpl.toString());

    await fse.writeFileSync("./tailwind.config.js",tmpl,{encoding:'utf8',flag:'w'});
  } catch (err) {
    throw err;
  }
}

async function addTailwindcssStyles() {
  try {
    const tmpl = fs.readFileSync("../scripts/templates/tailwind/tailwind.style.template");
    const compile = _.template(tmpl.toString());
    await fse.writeFileSync("./src/styles.css",tmpl,{encoding:'utf8',flag:'w'});
  } catch (err) {
    throw err;
  }
}

modifyTailwindConfigFile();
addTailwindcssStyles();
