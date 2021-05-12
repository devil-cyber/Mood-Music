import json
import requests
from __api__.api_data import MUSIC_DATA

def Get_Song():
    url = f"http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key={MUSIC_DATA['apikey']}&format=json&limit=10"
    data = requests.get(url)
    data = dict(data.json())
    data = data['tracks']['track']
    music = []
    for i in data:
        music.append(i['name'])
        
    return music

