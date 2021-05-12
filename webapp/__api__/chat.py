import requests
from __api__.api_data import CHAT_SERVER_API
from __api__.tone import Tone



def GET_CHAT_DATA(text):
    try:
        
        tone__ = Tone(text)
        if tone__ != None:
            chat_data = requests.post(f"{CHAT_SERVER_API}",json={"context":[text],"emotion":tone__})
            return chat_data.json()['response'],tone__
        else:
            return "error with text","error with tone"
    except Exception as e:
        print(str(e))
    

