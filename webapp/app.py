from flask import Flask, request, render_template,url_for,redirect,jsonify
from __api__.music import Get_Song
from __api__.chat import GET_CHAT_DATA
import json
import os


app = Flask(__name__,static_url_path='/static')




@app.route('/',methods=['GET','POST'])
def home():
    return render_template('home.html')

@app.route('/data',methods=['GET','POST'])
def t():
    try:
        if request.method == "POST":
            json = request.get_json(force=True)
            print(json['msg'])
            chat_data,tone = GET_CHAT_DATA(json['msg'])
            if chat_data == None:
                return jsonify('There is something wrong with the text')
            data = [chat_data, tone]
            return jsonify(data)
        
        return render_template('new.html')
    except Exception as e:
        print(e)


port = int(os.getenv('PORT')) 
if __name__ == "__main__":
    app.run(host="0.0.0.0",port=port)