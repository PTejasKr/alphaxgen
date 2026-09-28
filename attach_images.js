const fs = require('fs');
let content = fs.readFileSync('src/data/products.ts', 'utf-8');

const regImages = [
  '"/images/men/regular black.png"',
  '"/images/men/regular blue.png"',
  '"/images/men/regular brown.png"',
  '"/images/men/regular red.png"',
  '"/images/men/regular white.png"'
].join(', ');

const osImages = [
  '"/images/men/oversize black.png"',
  '"/images/men/oversize bblue.png"',
  '"/images/men/oversize white.png"',
  '"/images/men/oversize acid wash.png"'
].join(', ');

const poloImages = [
  '"/images/men/polo black.png"',
  '"/images/men/polo blue.png"',
  '"/images/men/polo brown.png"',
  '"/images/men/polo l_blue.png"',
  '"/images/men/polo white.png"'
].join(', ');

content = content.replace(/\{ id: "(reg_[^"]+)",(.*?)images: \[.*?\]/g, '{ id: "$1",$2images: [' + regImages + ']');
content = content.replace(/\{ id: "(os_[^"]+)",(.*?)images: \[.*?\]/g, '{ id: "$1",$2images: [' + osImages + ']');
content = content.replace(/\{ id: "(polo_[^"]+)",(.*?)images: \[.*?\]/g, '{ id: "$1",$2images: [' + poloImages + ']');

content = content.replace(/\{ id: "os_05",(.*?)images: \[.*?\]/g, '{ id: "os_05",$1images: ["/images/men/oversize acid wash.png", "/images/men/oversize black.png", "/images/men/oversize bblue.png", "/images/men/oversize white.png"]');

fs.writeFileSync('src/data/products.ts', content);
console.log("updated products.ts");

