import urllib.request
try:
    url = "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/regular/cart-shopping.svg"
    req = urllib.request.Request(url)
    with urllib.request.urlopen(req) as response:
        print(response.read().decode('utf-8'))
except Exception as e:
    print("Error:", e)
