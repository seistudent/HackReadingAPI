# HackReading

Welcome to HackReading! This is a productivity application, that helps you organise your notes and better leverage the power of reading to build knowledge. 

This app utilises Natural Language Processing Tools (entity extraction, summarization), and adopts a crowd-sourced and community-curated approach (real-time collaborative discussions via chat functionality). 

# Background Story

I built this app as part of a final project for my General Assembly Software Engineering Immersive program. The intent was to solidify my learning around building a full-stack web application with the highly-popular MERN stack. I used a standalone front-end UI based on React.js, and built a separate back-end API using node.js, express, and mongodb. 

Separately, I also wanted to pick up new technologies centered around NLP as well as real-time features given the growing centrality of such features. As such, I explored existing NLP API services from Aylien, as well as experimented with building out a live-chat functionality using socket.io. 

# How it works!

1. Create a user account
2. Write a new note based on a book which you are reading
3. When you submit your completed note, we conduct entity extraction and auto-summarization of your notes
4. View other people's summaries and discuss in real time via chat

# Technologies used

1. MERN Stack - MongoDB, Express, React, Node.js; Creat React App, React Router, js-cookie
2. Bootstrap and React-Bootstrap for front-end formatting
3. Socket.io for real time editing
4. Aylien API for entity extraction and text summarization (API)

# Technologies for Upcoming Features Pipeline

1. Google Cloud Text-to-Speech (API)
2. Systran.io for translation (API)

# To Do

1. Build front-end: landing page and about page
2. Build front-end: user sign up, note creation and dashboard 
3. Build back-end: API for user model and note model 
4. Build note editing
5. Integrate NLP functionality, build API routes into back-end
6. Build real-time chat functionality

# Try it!

1. Live App: http://hackreading.herokuapp.com/
2. Live API: http://hackreadingapi.herokuapp.com/
3. App Github code: https://github.com/seistudent/HackReadingApp
4. API Github code: https://github.com/seistudent/HackReadingAPI