import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(
            viewport={'width': 428, 'height': 926},
            is_mobile=True,
            user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1'
        )
        page = await context.new_page()
        await page.goto("https://latatea.vercel.app/#/process", wait_until="networkidle")
        await page.wait_for_timeout(3000)
        
        process_html = await page.evaluate('''() => {
            const section = Array.from(document.querySelectorAll('section')).find(s => s.innerText.toLowerCase().includes('process')) || document.body;
            const clone = section.cloneNode(true);
            clone.querySelectorAll('svg').forEach(svg => svg.innerHTML = '...');
            return clone.innerHTML;
        }''')
        with open("process_dump.html", "w", encoding="utf-8") as f:
            f.write(process_html)
        await browser.close()

asyncio.run(main())
