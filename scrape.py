import urllib.request
import re

url = "https://fontawesome.com/icons/cart-shopping?s=regular"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        # find svg containing cart
        svg_matches = re.findall(r'<svg[^>]*>.*?</svg>', html)
        for svg in svg_matches:
            if 'cart' in svg.lower() or 'shopping' in svg.lower() or 'path' in svg:
                print("Found SVG:")
                print(svg[:300])
except Exception as e:
    print("Error:", e)
