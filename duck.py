import urllib.request
import urllib.parse
import re

query = urllib.parse.quote("cart-shopping regular svg path d=")
url = f"https://html.duckduckgo.com/html/?q={query}"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        print("Scraped length:", len(html))
        # Look for path d="..."
        matches = re.findall(r'd="([^"]+)"', html)
        for m in matches:
            if len(m) > 50:
                print("Path:", m[:100] + "...")
except Exception as e:
    print("Error:", e)
