# Denver Drinx

Trello:  https://trello.com/b/tVDShFAP/denver-drinx

![wireframe1](/wireframe/image2.JPG)
![wireframe2](/wireframe/image1.JPG)

# Let's Find some Happy Hours!!

The goal of this app is to get your current location via Google maps and then provide you with a list of each happy hour in your area.  The list will be sorted by distance, and upon clicking the bar you'll see the happy hour details including drink and food specials.  We'll also provide a short description of the restaurant's vibe.  The ideal user is anyone that loves getting awesome deals and drinking and eating delicious things.  Soooo, everyone?? 

# Server Build

We used SQL for our database as well as Sequelize.  We seeded our database with bars in the RiNo and Highlands area to start and then deployed to Heroku.  We are currently making API calls from our Heroku site to get all bars and then using those in our Ionic display.  

# Ionic/Front End Build

We used Ionic to build out our front end.  The landing page gives you a list of bars, and from this list you can go into each bar and view the happy hour details.  On the land page you see the bar name, distance to the bar from your current location, and the time left in each happy hour.  If the happy hour hasn't started yet we list the time that the happy hour starts.  To the left of the home tab is the map view if you'd like to view everything in map view instead.  
* Current location is calculated using the Cordova GeoLocation - listed in miles with precision 2
* Still working on the uber functionality - stretch goal
* Ionic was very insteresting to style in - an ongoing learning experience!!


5/9/17
	Nate- creating server files and outline/ text template for our Postgres DB

	To start the server:
	1- create a .env file and add "username=[Your Username]"
	2- $ node server/db/dbSetup.js
	3- $ node server/db/seed.js
	4- $ nodemon
	
Seed file notes - need to fix barfausto's website
