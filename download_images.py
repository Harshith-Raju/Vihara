import os
import requests
from urllib.parse import urlparse

# Create images directory if it doesn't exist
if not os.path.exists('images'):
    os.makedirs('images')

# List of image URLs and their filenames
images = {
    'login-bg.jpg': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    'register-bg.jpg': 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    'flight-booking.jpg': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
    'hotel-reservation.jpg': 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    'tour-packages.jpg': 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800',
    'gallery-hero.jpg': 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    'gallery-1.jpg': 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c',
    'gallery-2.jpg': 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    'gallery-3.jpg': 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad',
    'gallery-4.jpg': 'https://images.unsplash.com/photo-1519681393784-d120267933ba'
}

def download_image(url, filename):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            with open(os.path.join('images', filename), 'wb') as f:
                f.write(response.content)
            print(f'Successfully downloaded {filename}')
        else:
            print(f'Failed to download {filename}')
    except Exception as e:
        print(f'Error downloading {filename}: {str(e)}')

# Download gallery-1.jpg only
download_image(images['gallery-1.jpg'], 'gallery-1.jpg')

print('Image download process completed!') 