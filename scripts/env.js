import fse from "fs-extra";
import _ from "lodash";
import crypto from "crypto";
import fs from "fs";

const generateASecret = () => crypto.randomBytes(16).toString("base64");

async function createEnvFile() {
  try {

    const tmpl = fs.readFileSync("./scripts/env.template");
    const compile = _.template(tmpl.toString());

    const tokens = compile({
      appKeys: new Array(4).fill(null).map(generateASecret).join(","),
      apiTokenSalt: generateASecret(),
      transferTokenSalt: generateASecret(),
      adminJwtToken: generateASecret(),
      jwtSecret: generateASecret(),
    });

    await fse.writeFile("./backend/.env", tokens);
    
  } catch (err) {
    throw err;
  }
}

createEnvFile();

