const fs = require("fs");
const path = require("path");

// folders
const imagesDir = path.join(__dirname, "public", "assets", "images");
const newDir = path.join(__dirname, "public", "assets", "new");

// safety check
if (!fs.existsSync(newDir)) {
  console.error("❌ new folder not found:", newDir);
  process.exit(1);
}

// read new images
const newImages = fs.readdirSync(newDir);

// recursive walk
function walk(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else {
      if (newImages.includes(file)) {
        const newImagePath = path.join(newDir, file);

        // replace
        fs.copyFileSync(newImagePath, fullPath);

        console.log(`✅ Replaced: ${fullPath}`);
      }
    }
  }
}

// run
walk(imagesDir);

console.log("🎉 Done replacing images");