import fs from "fs";
import path from "path";
import csv from "csv-parser";

const templateFolder = path.join("template");
const csvFile = path.join("websites.csv");
const buildFolder = path.join("build");

if (!fs.existsSync(buildFolder)) fs.mkdirSync(buildFolder);

const results = [];

fs.createReadStream(csvFile)
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    results.forEach((row) => {
      const webFolder = path.join(buildFolder, row.domain);
      copyFolderSync(templateFolder, webFolder);

      // update main.jsx
      const mainFile = path.join(webFolder, "src", "main.jsx");
      let content = fs.readFileSync(mainFile, "utf8");

      content = content.replace("{TITLE}", row.title || "Template");
      content = content.replace("{DESCRIPTION}", row.description || "Description");
      content = content.replace("{PHONE}", row.phone || "01785****79");
      content = content.replace("{ADDRESS}", row.address || "Demo");

      fs.writeFileSync(mainFile, content, "utf8");

      console.log(`Generated Website: ${row.domain}`);
    });
  });

function copyFolderSync(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) copyFolderSync(srcPath, destPath);
    else fs.copyFileSync(srcPath, destPath);
  }
}
