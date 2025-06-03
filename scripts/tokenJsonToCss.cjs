import fs from "fs";

const tokens = JSON.parse(fs.readFileSync("./src/theme/tokens.json", "utf8"));

function toCssVarName(path) {
  return "--" + path.join("-");
}

function generateCssVars(obj, path = []) {
  let css = "";
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      css += generateCssVars(value, [...path, key]);
    } else {
      const varName = toCssVarName([...path, key]);
      css += `  ${varName}: ${value};\n`;
    }
  }
  return css;
}

const cssVars = `@import "tailwindcss";@theme {\n${generateCssVars(tokens)}}\n`;

fs.writeFileSync("./src/theme/legacy-theme-tokens.css", cssVars);
console.log("Generated generic CSS variables!");
