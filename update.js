const fs = require('fs');
let content = fs.readFileSync('src/data/products.ts', 'utf8');
const updates = {
  'reg_02': ['White'],
  'reg_04': ['Yellow', 'Pink', 'Beige', 'Sky blue', 'White', 'Red', 'Grey', 'Maroon', 'Black', 'Navy blue'],
  'reg_05': ['Orange', 'Light Green', 'White', 'Black', 'Yellow', 'Sky blue'],
  'reg_07': ['Red', 'Royal Blue', 'Green', 'White', 'Grey', 'Black', 'Yellow'],
  'reg_08': ['Red', 'Royal Blue', 'Green', 'White', 'Grey', 'Black', 'Yellow'],
  'reg_09': ['White', 'Red', 'Grey', 'Black', 'Yellow', 'Light Green', 'Pink', 'Lavender', 'Sky blue', 'Orange', 'Navy blue', 'Beige'],
  'reg_10': ['White', 'Red', 'Grey', 'Black', 'Yellow', 'Light Green', 'Pink', 'Lavender', 'Sky blue', 'Orange', 'Navy blue', 'Beige'],
  'reg_11': ['Black', 'White', 'Beige', 'Red', 'Lavender', 'Sage green', 'Brown', 'Off-White', 'Orange', 'Navy blue'],
  'reg_12': ['Black', 'White', 'Pink', 'Grey', 'Sky blue', 'Beige', 'Red', 'Lavender', 'Light Green', 'Maroon'],
  'os_01': ['White', 'Red', 'Grey', 'Black', 'Yellow', 'Light Green', 'Pink', 'Lavender', 'Sky blue', 'Orange', 'Navy blue', 'Beige'],
  'os_02': ['Black', 'White', 'Beige', 'Red', 'Lavender', 'Sage green', 'Brown', 'Off-White', 'Orange', 'Navy blue'],
  'os_03': ['Black', 'White', 'Sky blue', 'Beige', 'Red', 'Lavender', 'Maroon', 'Rose gold', 'Dark Green', 'Off-White', 'Brown'],
  'os_04': ['Black', 'White', 'Pink', 'Grey', 'Sky blue', 'Beige', 'Red', 'Lavender', 'Light Green', 'Maroon'],
  'os_05': ['Black', 'Blue', 'Red'],
  'polo_01': ['White', 'Red', 'Grey', 'Black', 'Yellow', 'Light Green', 'Pink', 'Lavender', 'Sky blue', 'Orange', 'Navy blue', 'Beige'],
  'polo_02': ['Black', 'Yellow', 'Orange', 'White', 'Light Green', 'Sky blue', 'Red', 'Grey', 'Navy blue'],
  'polo_03': ['Black', 'White', 'Orange', 'Maroon', 'Dark Green', 'Navy blue', 'Beige', 'Pink', 'Grey', 'Light Green', 'Red', 'Yellow', 'Sky blue', 'Royal Blue'],
  'polo_04': ['Black', 'White', 'Orange', 'Maroon', 'Dark Green', 'Navy blue', 'Beige', 'Pink', 'Grey', 'Light Green', 'Red', 'Yellow', 'Sky blue', 'Royal Blue'],
  'polo_05': ['Black', 'White', 'Maroon', 'Dark Green', 'Navy blue', 'Grey', 'Red', 'Yellow', 'Sky blue', 'Royal Blue'],
  'polo_06': ['Black', 'White', 'Maroon', 'Dark Green', 'Navy blue', 'Grey', 'Red', 'Yellow', 'Sky blue', 'Royal Blue'],
  'w_03': ['Black', 'Blue', 'Red']
};

let lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  for (const [id, colors] of Object.entries(updates)) {
    if (lines[i].includes(`id: "${id}"`)) {
      lines[i] = lines[i].replace(/colors: \[.*?\],/, `colors: ${JSON.stringify(colors)},`);
    }
  }
}

fs.writeFileSync('src/data/products.ts', lines.join('\n'));
console.log('done2');
