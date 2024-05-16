import requests

url = 'https://unsplash.com/photos/1234567890/download'
response = requests.get(url)

if response.status_code == 200:
    with open('image.jpg', 'wb') as f:
        f.write(response.content)
        print('Image downloaded successfully')
else:
    print('Error downloading image')