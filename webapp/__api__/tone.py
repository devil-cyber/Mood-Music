import json
from ibm_watson import ToneAnalyzerV3
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
from __api__.api_data import API_DATA
from __api__.tone_mapper import TONE_MAPPER

authenticator = IAMAuthenticator(API_DATA['apikey'])
tone_analyzer = ToneAnalyzerV3(
    version='2017-09-21',
    authenticator=authenticator
)

tone_analyzer.set_service_url(API_DATA['url'])
def Tone(text):
    try:
        text = text
        tone_analysis = tone_analyzer.tone({'text': text},content_type='application/json').get_result()
        tone_details = tone_analysis['document_tone']['tones']
        if tone_details == []:
            return "neutral"
        else:
            return TONE_MAPPER[(tone_details[0])['tone_id']]
    except Exception as e:
        print(str(e))
        return None
        



