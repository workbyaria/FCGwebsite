/**
 * fcg-logo.png is JPEG data (misnamed). Flood-fill from edges to remove black bg → real PNG+alpha.
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const inputPath = path.join(root, "public", "fcg-logo.png");
const backupPath = path.join(root, "public", "fcg-logo-source.jpg");

const { data, info } = await sharp(inputPath)
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const w = info.width;
const h = info.height;
const rgb = data;
const bgThreshold = 48;

function isBg(x, y) {
  const i = (y * w + x) * 3;
  const r = rgb[i];
  const g = rgb[i + 1];
  const b = rgb[i + 2];
  return Math.max(r, g, b) < bgThreshold;
}

const seen = new Uint8Array(w * h);
const alpha = new Uint8Array(w * h);
alpha.fill(255);

const q = [];
function enqueue(x, y) {
  if (x < 0 || x >= w || y < 0 || y >= h) return;
  const k = y * w + x;
  if (seen[k] || !isBg(x, y)) return;
  seen[k] = 1;
  q.push(x, y);
}

for (let x = 0; x < w; x++) {
  enqueue(x, 0);
  enqueue(x, h - 1);
}
for (let y = 0; y < h; y++) {
  enqueue(0, y);
  enqueue(w - 1, y);
}

while (q.length) {
  const y = q.pop();
  const x = q.pop();
  const k = y * w + x;
  alpha[k] = 0;
  const nbs = [
    [x + 1, y],
    [x - 1, y],
    [x, y + 1],
    [x, y - 1],
  ];
  for (const [nx, ny] of nbs) {
    if (nx < 0 || nx >= w || ny < 0 || ny >= h) continue;
    const nk = ny * w + nx;
    if (!seen[nk] && isBg(nx, ny)) {
      seen[nk] = 1;
      q.push(nx, ny);
    }
  }
}

const rgba = Buffer.alloc(w * h * 4);
for (let k = 0; k < w * h; k++) {
  const i = k * 3;
  const o = k * 4;
  rgba[o] = rgb[i];
  rgba[o + 1] = rgb[i + 1];
  rgba[o + 2] = rgb[i + 2];
  rgba[o + 3] = alpha[k];
}

fs.copyFileSync(inputPath, backupPath);

await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
  .png({ compressionLevel: 9 })
  .toFile(inputPath + ".tmp");

fs.renameSync(inputPath + ".tmp", inputPath);

const meta = await sharp(inputPath).metadata();
console.log("Wrote transparent PNG:", inputPath, meta);
