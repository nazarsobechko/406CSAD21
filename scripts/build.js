const fs = require("fs");
const path = require("path");

const sourceDirectory = path.join(__dirname, "..", "src");
const buildDirectory = path.join(__dirname, "..", "build");

fs.rmSync(buildDirectory, { recursive: true, force: true });
fs.mkdirSync(buildDirectory, { recursive: true });

for (const fileName of fs.readdirSync(sourceDirectory)) {
  if (fileName.endsWith(".js")) {
    fs.copyFileSync(
      path.join(sourceDirectory, fileName),
      path.join(buildDirectory, fileName)
    );
  }
}
