import re

# Update TSX
with open("src/components/home/ProcessSection.tsx", "r", encoding="utf-8") as f:
    tsx = f.read()

# Replace the mobile mapping logic
new_mapping = """
        {steps.map((step, index) => {
          let alignClass = '';
          let textSideClass = '';
          let connector = null;
          
          if (index === 0 || index === 4) {
            alignClass = styles.alignCenter;
            textSideClass = styles.textLeft;
          } else if (index === 1 || index === 3) {
            alignClass = styles.alignLeft;
            textSideClass = styles.textRight;
          } else if (index === 2) {
            alignClass = styles.alignRight;
            textSideClass = styles.textLeft;
          }

          if (index === 0) {
            connector = <div className={`${styles.connector} ${styles.connCenterLeft}`}></div>;
          } else if (index === 1) {
            connector = <div className={`${styles.connector} ${styles.connLeftRight}`}></div>;
          } else if (index === 2) {
            connector = <div className={`${styles.connector} ${styles.connRightLeft}`}></div>;
          } else if (index === 3) {
            connector = <div className={`${styles.connector} ${styles.connLeftCenter}`}></div>;
          }

          return (
            <React.Fragment key={step.id}>
              <div className={`${styles.mobileStep} ${alignClass}`}>
                <Reveal delay={index * 0.1}>
                  <div className={styles.stepInner}>
                    <div className={styles.stepIconWrap}>
                      {step.icon}
                      <div className={styles.stepNumber}>{step.id}</div>
                    </div>
                    <div className={`${styles.mobileTextWrap} ${textSideClass}`}>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDesc}>{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              </div>
              {connector}
            </React.Fragment>
          );
        })}
"""

# Replace the block between `<div className={styles.mobileTimeline}>` and `{/* Desktop Horizontal Layout`
pattern = re.compile(r'\{steps\.map\(\(step, index\) => \{.*?\n        \}\)\}', re.DOTALL)
tsx = pattern.sub(new_mapping.strip(), tsx)

with open("src/components/home/ProcessSection.tsx", "w", encoding="utf-8") as f:
    f.write(tsx)

# Update CSS
with open("src/components/home/ProcessSection.module.css", "r", encoding="utf-8") as f:
    css = f.read()

# Add the new CSS classes
new_css = """
.mobileStep {
  width: 144px; /* fixed width for exact calculations */
  position: relative;
  z-index: 10;
}
.mobileTextWrap {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 130px;
}
.textLeft {
  right: 100%;
  padding-right: 12px;
  text-align: right;
}
.textRight {
  left: 100%;
  padding-left: 12px;
  text-align: left;
}
.mobileTextWrap .stepTitle {
  text-align: inherit;
  margin-bottom: 2px;
  font-size: 0.95rem;
}
.mobileTextWrap .stepDesc {
  text-align: inherit;
  margin: 0;
  font-size: 0.85rem;
}
"""

css = css.replace('.mobileStep {\n  width: 144px; /* fixed width for exact calculations */\n  position: relative;\n  z-index: 10;\n}', new_css.strip())

with open("src/components/home/ProcessSection.module.css", "w", encoding="utf-8") as f:
    f.write(css)

print("Files updated successfully!")
