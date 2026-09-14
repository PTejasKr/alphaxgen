const fs = require('fs');
const content = fs.readFileSync('src/app/journal/journal.module.css', 'utf8');
const before = content.substring(0, content.indexOf('/* Sticky Scroll Section */'));
const newCss = \
/* Stacking Section */
.stackingSection {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  position: relative;
  border-top: none;
  padding-top: 0;
}

@media (min-width: 1024px) {
  .stackingSection {
    border-top: var(--border-width) solid var(--ink);
    padding-top: var(--space-xl);
    gap: 0;
    min-height: 100vh;
  }
}

.stackCardWrapper {
  position: relative;
}

@media (min-width: 1024px) {
  .stackCardWrapper {
    position: sticky;
    height: 80vh;
    margin-bottom: 20vh;
  }
  
  .stackCardWrapper:last-child {
    margin-bottom: 5vh;
  }
}

.stackCard {
  display: flex;
  flex-direction: column;
  background-color: var(--paper);
  border: var(--border-width) solid var(--ink);
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

@media (min-width: 1024px) {
  .stackCard {
    flex-direction: row;
    height: 100%;
    border-radius: 16px;
    transform-origin: top center;
  }
}

.cardText {
  padding: var(--space-md);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 1024px) {
  .cardText {
    padding: var(--space-xl);
  }
}

.valueNumber {
  font-family: var(--font-display), sans-serif;
  font-size: 24px;
  color: var(--ink);
  -webkit-text-stroke: 0;
  line-height: 1;
  margin-bottom: 8px;
}

@media (min-width: 1024px) {
  .valueNumber {
    font-size: var(--display-lg);
    color: var(--paper);
    -webkit-text-stroke: 2px var(--ink);
    line-height: 0.8;
    margin-bottom: var(--space-sm);
  }
}

.valueTitle {
  font-family: var(--font-heading), sans-serif;
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 8px;
}

@media (min-width: 1024px) {
  .valueTitle {
    font-size: var(--h1);
    margin-bottom: var(--space-sm);
  }
}

.valueDesc {
  font-size: 16px;
  max-width: 600px;
  margin-bottom: 16px;
}

@media (min-width: 1024px) {
  .valueDesc {
    font-size: var(--body);
    margin-bottom: 0;
  }
}

.cardVisual {
  position: relative;
  width: 100%;
  aspect-ratio: 4/5;
  border-top: var(--border-width) solid var(--ink);
}

@media (min-width: 1024px) {
  .cardVisual {
    aspect-ratio: auto;
    flex: 1;
    height: 100%;
    border-top: none;
    border-left: var(--border-width) solid var(--ink);
  }
}
\;

fs.writeFileSync('src/app/journal/journal.module.css', before + newCss);
