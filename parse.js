const fs = require('fs');
const html = fs.readFileSync('ddg.html', 'utf8');
const results = html.match(/<a class="result__snippet[^>]+>([\s\S]*?)<\/a>/g);
if (results) results.forEach(r => console.log(r.replace(/<[^>]+>/g, '').trim()));
