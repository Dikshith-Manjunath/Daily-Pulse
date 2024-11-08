# Dayananda Sagar College of Engineering
# Kempegowda International Airport Bengaluru
# India Gate

import webbrowser, pyperclip

def open_google_maps():
    address = pyperclip.paste()
    url = f"https://www.google.com/maps/search/{address}"
    webbrowser.open(url)

if __name__ == "__main__":
    print("Opening Google Maps for the address in your clipboard...")
    open_google_maps()
