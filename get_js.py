import urllib.request
import json
try:
    url = "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/js/regular.js"
    req = urllib.request.Request(url)
    with urllib.request.urlopen(req) as response:
        content = response.read().decode('utf-8')
        # We can search for cart-shopping
        idx = content.find("cart-shopping")
        if idx != -1:
            print("Found in regular.js at index:", idx)
            print(content[idx:idx+200])
        else:
            print("Not found in regular.js")
except Exception as e:
    print("Error:", e)
