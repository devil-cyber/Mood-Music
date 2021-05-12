# Music According To Chat Tone👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> Deomo url https://mood-song.herokuapp.com/ but frontend need some more work & work in progress

## Objective of Project:)
In this project, we would be combining multiple services and open-source tools to make a Chatbot that recommends songs based on the tone of the conversation which the user is having with the chatbot.

## Project Context:)
In this project, we would be building an extensive Chatbot service, to which you can talk to. And talking to a chatbot wouldn't be business-driven. It would just be casual conversations. Further, on top of it, the chatbot would also be recommending songs to the user based on the tone of the user. This song recommendation feature employs the use of [Last.fm](https://www.last.fm/api) API, very much similar to the popular Spotify API. Also for tone/emotion analysis of the conversation we will be using the [IBM](https://www.youtube.com/watch?v=wUb--6FPBik) Tone Analyzer API.

## Product Architecture
![image](https://github.com/devil-cyber/Mood-Music/blob/master/asset/arch.png)

## High-Level Approach
- User starts the conversation
- Emotional Analysis of the conversation is done using the IBM - Emotional API
- Get the reply to the conversation from the Cakechat Chatbot
- Based on the Emotion which the app perceives, top songs are retrieved using Last.fm songs API
- If a user listens to a particular song for sometime, a similar song would be recommended to the user using Last.fm API.
  
## Demo

![gif](https://github.com/devil-cyber/Mood-Music/blob/master/asset/demo.gif)

## Chatting Engine

- The chatting engine is based upon  Hierarchical Recurrent Encoder-Decoder (HRED) architecture for handling deep dialog context.

- Multilayer RNN with GRU cells. The first layer of the utterance-level encoder is always bidirectional. By default, CuDNNGRU implementation is used
- The chatting engine is hosted on AWS server and it has been intgreated to the frontend via an API end point



## Team

👤 **Manikant Kumar**
* Roll: CSE/18/23
* Website: https://devil-cyber.github.io/CodingSpace/
* Github: [@devil-cyber](https://github.com/devil-cyber)
* LinkedIn: [@manikant-kumar-550998192](https://linkedin.com/in/manikant-kumar-550998192)

👤 **Kavya Alla**
* Roll: CSE/18/21
* Github: [@kavya151](https://github.com/kavya151)

👤 **Angirekula Sujith**
* Roll: CSE/18/22
* Github: [@sujith805](https://github.com/suijith805)


## Show your support

Give a ⭐️ if this project helped you!


***
 
