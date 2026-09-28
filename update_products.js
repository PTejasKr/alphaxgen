const fs = require('fs');

let content = fs.readFileSync('src/data/products.ts', 'utf-8');

content = content.replace(/\{ id: "(reg_[^"]+)",(.*?)images: \[".*?"\]/g, '{ id: "$1",$2images: ["/images/regular-collection.png"]');
content = content.replace(/\{ id: "(os_[^"]+)",(.*?)images: \[".*?"\]/g, '{ id: "$1",$2images: ["/images/oversized-collection.png"]');
content = content.replace(/\{ id: "(polo_[^"]+)",(.*?)images: \[".*?"\]/g, '{ id: "$1",$2images: ["/images/polo-collection.png"]');
content = content.replace(/\{ id: "(w_[^"]+)",(.*?)images: \[".*?"\]/g, '{ id: "$1",$2images: ["/images/womens-collection.png"]');
content = content.replace(/\{ id: "os_05"(.*?)images: \[".*?"\]/g, '{ id: "os_05"$1images: ["/images/acid wash zoom.png"]'); // acid wash

fs.writeFileSync('src/data/products.ts', content);
