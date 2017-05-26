# Denver Drinx

Trello:  https://trello.com/b/tVDShFAP/denver-drinx

Heroku:  https://enigmatic-brushlands-11009.herokuapp.com/ --NOTE: This is only our backend/server.  Our front-end is ran through Ionic and we make API calls to our Heroku. 


![wireframe1](/wireframe/image2.JPG)
![wireframe2](/wireframe/image1.JPG)

### Elevator Pitch:

Move to Denver recently and wondering where the best happy hours are?  Maybe you just moved into a new neighborhood and you aren’t familiar with the local watering holes.  In comes Denver Drinx, the app that tells you where to drink and when to get the happiest deals that Denver has to offer.  Upon opening the app it will track your location and list happy hours within your vicinity.  You’ll also be able to view the happy hour time window remaining,  so that you can decide whether or not making the trek is worth the effort.

This app is great for anyone looking to try new spots and save some money by hitting up the drink and food specials around town.  It takes away the thinking and decision making that can make you and your friends bicker when deciding on a meetup spot.  Cheers!

### User Research:

The answers to these survey questions helped us decide to focus on both drink and food specials within the app as they seem equally important.  It does seem like the uber feature is of interest to ppl so we are going to work on incorporating that.  Also the focus for happy hour is generally current location based so we are going to first seed the database with areas that have the highest population of bars.  The dog friendly piece doesn’t seem to be a big enough factor to use as an initial property in our app.  The list menu is more popular than the map upon opening the app so we are going to start with the listview and then incorporate a map view as a separate tab.  

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

# Contributors

Nate Tutchton: https://github.com/ntutchton
Cameron Barclay:  https://github.com/CamB17
Jessica Wood:  https://github.com/jessHwood

# Plans for the Future

We'd like to move this into the new Ionic platform in order to integrate more features as well as update the design.  Next up is seeding all of the Denver neighborhood bars as currently we center the app around the Highlands as well as RiNo. 


