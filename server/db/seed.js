var DB = require("../models").models;

////////////////////////////////////////////////////////////////////////
/////////////////////TEMPLATE FOR MAKING A NEW BAR//////////////////////
////////////////////////////////////////////////////////////////////////

var template = {
	day 			: [ /* weekday as a number 0-6 */ ],
	//hours/minutes correspond to the day at the same index, 
	// so day[1] ==> hours[1] and minutes[1]
	hours 			: [ [ /*starting hour, 0-23 , ending hour 0-23*/ ] ],
	minutes 		: [ [ /*minutes added to first hour 0-59 , minutes added to second hour 0-59*/ ] ],
	address			: /*Address as a string*/ "",
	phone			: /*address as a string*/"",
	name			: /*name as a string*/ "",
	drinkSpecials	: /*drink specials as a string*/ "",
	foodSpecials	: /*food specials as a string*/ "",
	image 			: "",
	description 	: "",
	website 		: "",
};

////////////////////////////////////////////////////////////////////////

var barArray = [
	//each bar is an object formatted like the template
	//0 is sunday 6 is saturday
	
	//RiNo HH
	{
		day 			: [ 1, 2, 3, 4, 5],
		hours 			: [ [17 , 18], [17 , 18], [17 , 18], [17 , 18], [17 , 18] ],
		minutes 		: [ [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ] ],
		address			: "3033 Brighton Blvd, Denver, CO, 80216",
		phone   		: "(303) 831-8862",
		name			: "Mister Tuna",
		drinkSpecials	: "$3 select beers, $5 select wines and well drinks, and a cocktail of the week for $6",
		foodSpecials	: null,
		image			: "https://cdn0.vox-cdn.com/thumbor/gSNNyacMH6QLFKFLxTyCKgmF8uQ=/0x600/cdn0.vox-cdn.com/uploads/chorus_asset/file/6782701/MisterTuna_2169e.0.jpg",
		description		: "New American fare including wood-fired meats & seafood pairs with cocktails in a slick, hip space.",
		website			: "https://www.mistertuna.com/"
	},
	//This has special late nights onfri-sat
	{
		day 			: [ 0, 2, 3, 4, 5, 6 ],
		hours 			: [ [ 15 , 18 ],[15 , 18], [15 , 18], [15 , 18], [15 , 18], [15 , 18] ],
		minutes 		: [ [ 0 , 0 ], [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ] ],
		address			: "2191 Arapahoe St, Denver, CO, 80205",
		phone   		: "(303) 997-9911",
		name			: "Lobby",
		drinkSpecials	: "$3 Mimosas and domestic beers, $4 craft beers, and 20% off most draft beers, $2 off specialty cocktails, $4 wells and Bellinis, $5 Cocktail of the Day and house wines, $6 Sangria, $6 beer and a shot, $3 select shots, 20% off beer flights, and $12 pitchers of house Margaritas, Long Island Ice Teas and John Dalys.",
		foodSpecials	: null,
		image			: "http://www.thelobbydenver.com/wp-content/uploads/2016/05/8B327BFC30FABF2787B537EA116C59AE.jpg",
		description		: "Restaurant & bar serving American comfort fare in a historic building with a courtyard patio.",
		website			: "http://www.thelobbydenver.com/"
	},
	{
		day 			: [ 1, 2, 3, 4, 5, 6 ],
		hours 			: [ [ 15 , 18 ],[15 , 18], [15 , 18], [15 , 18], [15 , 18], [15 , 18] ],
		minutes 		: [ [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ] ],
		address			: "2461 Larimer St, Denver, CO, 80205",
		phone       	: "(303) 297-3540",
		name			: "Sugarmill",
		drinkSpecials	: "$4-6 select beers and wines by the glass, select bottles of red or white wines $20.",
		foodSpecials	: "$4 small plates and $10 meat and cheese plate.",
		image			: "http://www.confluence-denver.com/galleries/Features/2014/Issue_63/sugarmill_05.jpg",
		description		: "Versatile, morning-to-night cafe offering seasonal desserts, New American small plates & cocktails.",
		website			: "http://sugarmilldesserts.com/"
	},
	//Has regular and late night prices
	{
		day 			: [ 2, 3, 4, 5, 6 ],
		hours 			: [ [ 18 , 19 ],[ 18 , 19 ], [18 , 19], [18 , 19], [18 , 19] ],
		minutes 		: [ [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ] ],
		address			: "1330 27th Street, Denver, CO, 80205",
		phone       	: "303-295-3333",
		name			: "Nocturne",
		drinkSpecials	: "$7 classic cocktails and Rose' of the Day.",
		foodSpecials	: "Half-priced oysters.",
		image			: "https://cdn0.vox-cdn.com/uploads/chorus_image/image/46614530/Nocturne_6.0.0.0.jpg",
		description 	: "Bi-level lounge & eatery serving up eclectic mix of small plates & cocktails amid live jazz music.",
		website			: "http://www.nocturnejazz.com/"
	},
		{
		day 			: [ 2, 3, 4, 5, 6 ],
		hours 			: [ [ 23 , 02 ],[ 22 , 02 ], [23 , 02], [23 , 02], [23 , 02] ],
		minutes 		: [ [ 0 , 0 ], [ 30 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ] ],
		address			: "1330 27th Street, Denver, CO, 80205",
		phone   		: "303-295-3333",
		name			: "Nocturne",
		drinkSpecials	: "$7 classic cocktails and Rose' of the Day.",
		foodSpecials	: "Half-priced oysters.",
		image			: "https://cdn0.vox-cdn.com/uploads/chorus_image/image/46614530/Nocturne_6.0.0.0.jpg",
		description 	: "Bi-level lounge & eatery serving up eclectic mix of small plates & cocktails amid live jazz music.",
		website			: "http://www.nocturnejazz.com/"
	},
	{
		day 			: [ 4, 5, 6 ],
		hours 			: [ [ 17 , 18 ],[17 , 18], [17 , 18] ],
		minutes 		: [ [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ] ],
		address			: "2449 Larimer St, Denver, CO, 80205",
		phone    		: "(303) 862-9850",
		name			: "Americatus",
		drinkSpecials	: "$3 Beer, $Cocktails, $5 House Wine",
		foodSpecials	: "$1 Bruschetta",
		image			: "https://cdn0.vox-cdn.com/uploads/chorus_image/image/49160957/12095092_906419149444089_7356893931283676830_o.0.0.jpg",
		description		: "Refined sandwiches, seasonal Italian dinners & a deli case in a small & artsy, rustic-modern space.",
		website			: "http://americatus.com/"
	},
	{
		day 			: [ 1, 2, 3, 4, 5 ],
		hours 			: [ [15 , 22], [15 , 18], [15 , 18], [15 , 18], [15 , 18] ],
		minutes 		: [ [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ] ],
		address			: "The Source, 3350 Brighton Boulevard, Unit 105",
		phone			: "(303) 296-2747",
		name			: "Comida",
		drinkSpecials	: "$5 Margaritas and Cocktails, $2-$3 Beers, and $5 House Wines.",
		foodSpecials	: "$4 Street Snacks, $15 Bacon Tacos with a shot of Maker's Mark",
		image			: "https://cdn.wedding-spot.com/images/venues/2751/comida-at-the-source-wedding-denver-co-1.1427695390.jpg",
		description		: "Sit-down extension of a popular food truck featuring Mexican street eats & creative margaritas.",
		website			: "eatcomida.com/en/"
	},
	{
		day 			: [ 0, 1, 2, 3, 4, 5, 6 ],
		hours 			: [ [16 , 18], [16 , 18], [16 , 18], [16 , 18], [16 , 18], [16 , 18], [16 , 18] ],
		minutes 		: [ [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ] ],
		address			: "3126 Larimer St, Denver, CO, 80205",
		phone			: "(720) 445-9691",
		name			: "Bar Fuasto",
		drinkSpecials	: "$6 Housemade Tonic and Gin, $6 CioCiaro Cup, $6 Collins, $2 Dad Beers, $2 Off Wine by the Glass.",
		foodSpecials	: "$6 Two Oysters, $6 Daily Bruschetta, $1 Off Antipasta",
		image			: "https://cdn0.vox-cdn.com/thumbor/raqSGYmKfW18-Pk4RRbI0n0WQ9o=/0x600/cdn0.vox-cdn.com/uploads/chorus_asset/file/3929558/BARFAUSTO_1453e.0.jpg",
		description		: "Hip, industrial hangout serving craft cocktails, beer & wine, plus charcuterie & other small plates.",
		website			: "www.barfuasto.com/"
	},
	{
		day 			: [ 0, 1, 2, 3, 4, 5, 6 ],
		hours 			: [ [11 , 02], [11 , 02], [11 , 02], [11 , 02], [11 , 02], [11 , 02], [11 , 02] ],
		minutes 		: [ [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ] ],
		address			: "3043 Brighton Boulevard, Denver, CO, 80216",
		phone			: "720-484-6428",
		name			: "Will Call",
		drinkSpecials	: "$2 Coors Banquet, $3 Domestic Drafts, $3.50 Wells",
		foodSpecials	: null,
		image 			: "http://willcalldenver.com/userfiles/645/images/will-call-home.jpg", 
		description		: "Vintage & modern style comes together at this watering hole & eatery for CO brew & bites.",
		website			: "http://willcalldenver.com/"
	},
	{
		day 			: [ 1, 2, 3, 4, 5, 6 ],
		hours 			: [ [16 , 20], [16 , 20], [16 , 20], [16 , 20], [16 , 20], [16 , 20] ],
		minutes 		: [ [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ] ],
		address			: "2721 Larimer Street, Denver, CO, 80205",
		phone			: "(303) 291-1007",
		name			: "Larimer Lounge",
		drinkSpecials	: "$2.50 PBRs, $2.50 wells, $1 off everything else",
		foodSpecials	: null,
		image			: "http://www.milehighhappyhour.com/wp-content/uploads/2014/04/Larimer-Lounge3-1000x500.jpg",
		description		: "Old-time bar east of downtown pouring drinks & showcasing punk rock & alternative bands.",
		website			: "http://www.larimerlounge.com/"
	},
	{
		day 			: [ 0, 2, 3, 4, 5, 6 ],
		hours 			: [ [16, 17], [16 , 18], [16 , 18], [16 , 18], [16 , 18], [16, 17]],
		minutes 		: [ [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ]],
		address			: "2500 Larimer Street, Denver, CO, 80205",
		phone			: "(303) 292-0700",
		name			: "Work and Class",
		drinkSpecials	: "$9 Barrel-Aged Cocktails, $6 House Cocktails, $4 House Red/ White Wine, $7 (Pent) House Wine, $4 Draft Beers",
		foodSpecials	: "$5 Chile Cheese Fries, $6 Chipotle Chicken Pot Pie, $10 Tamarind Pork Ribs, $7 Vegetarian Chile Relleno, $8 Bacon-Wrapped Asparagus & Grits, $6 Tempura Broccoli",
		image			: "http://www.lesdamescolorado.org/wp-content/uploads/2017/03/work-and-class-in-denver.jpg",
		description		: "Relaxed & cozy location serving homestyle Southern & Latin American cuisine, plus cocktails.",
		website			: "http://workandclassdenver.com/"
	},
	{
		day 			: [ 1, 2, 3, 4, 5 ],
		hours 			: [ [16 , 18] ],
		minutes 		: [ [ 0 , 0 ] ],
		address			: "1309 26th Street, Denver, CO, 80205",
		phone			: "303-736-8400",
		name			: "First Draft",
		drinkSpecials	:  null,
		foodSpecials	: "$7 Brasserie Board, $3 Fries, $5 Deviled Eggs, $6 Fresh Baked Pretzels, $7 Tempura Chicken Wings, $5 Brisket Slider, $5 Colorado Waygu Beef Burger Slider",
		image			: "https://www.porchdrinking.com/wp-content/uploads/2016/09/o.jpg",
		description		: "High-tech hangout with a self-service pouring system for beer, wine & cider, plus shareable plates.",
		website			: "http://www.firstdraftdenver.com/"
	},
		{
		day 			: [ 1, 2, 3, 4, 5 ],
		hours 			: [ [16 , 18], [16 , 18], [16 , 18], [16 , 18], [16 , 18] ],
		minutes 		: [ [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ] ],
		address			: "2030 W 30th Ave, Denver, CO 80211",
		phone			: "(303) 993-3120",
		name			: "Linger",
		drinkSpecials	:  "$4 Draft Beers, $6 Wine, $4 Premium Well Drinks, $5 Cocktails",
		foodSpecials	: "$5 Food Specials, menu changes monthly",
		image  			: "https://s-media-cache-ak0.pinimg.com/originals/7d/3a/50/7d3a5040409bcc0bfa5c1720582d6796.jpg",
		description		: "This old mortuary is now a lively restaurant with a rooftop lounge & global small plates.",
		website			: "http://lingerdenver.com/"
	},
	{
		day 			: [ 3, 4, 5, 6 ],
		hours 			: [ [14 , 18], [14 , 18], [14 , 18], [14 , 18] ],
		minutes 		: [ [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ] ],
		address			: "1691 Central St, Denver, CO 80211",
		phone			: "(303) 477-4582",
		name			: "Central Bistro",
		drinkSpecials	:  "$1 off all Draft Beers, $3 Coors Light, $5 Wine, $5 Cocktails",
		foodSpecials	: "Market Oysters 1/2 off, $3 Chicken Slider, $5 Tator Tots, $3 Baja Shrimp Tacos, $7 Chicken Wings, $9 Grilled Lamb Ribs, $9 Spanish Mussels, $10 Caramelized Brussels Sprouts, $7 Tuscan Green Salad, $14 Boxcar Burger and Beverage, $6 Artisan Cheese",
		image  			: "https://media-cdn.tripadvisor.com/media/photo-s/03/07/ce/f5/central-bistro-and-bar.jpg",
		description		: "Mod hot spot for creative American plates from an open kitchen, craft cocktails & a big patio.",
		website			: "http://www.centralbistrobar.com/"
	},
		{
		day 			: [ 0, 2 ],
		hours 			: [ [14 , 23], [14 , 23] ],
		minutes 		: [ [ 0 , 0 ], [ 0 , 0 ] ],
		address			: "1691 Central St, Denver, CO 80211",
		phone			: "(303) 477-4582",
		name			: "Central Bistro",
		drinkSpecials	:  "$1 off all Draft Beers, $3 Coors Light, $5 Wine, $5 Cocktails",
		foodSpecials	: "Market Oysters 1/2 off, $3 Chicken Slider, $5 Tator Tots, $3 Baja Shrimp Tacos, $7 Chicken Wings, $9 Grilled Lamb Ribs, $9 Spanish Mussels, $10 Caramelized Brussels Sprouts, $7 Tuscan Green Salad, $14 Boxcar Burger and Beverage, $6 Artisan Cheese",
		image  			: "https://media-cdn.tripadvisor.com/media/photo-s/03/07/ce/f5/central-bistro-and-bar.jpg",
		description		: "Mod hot spot for creative American plates from an open kitchen, craft cocktails & a big patio.",
		website			: "http://www.centralbistrobar.com/"
	},
		{
		day 			: [ 3, 4, 5],
		hours 			: [ [15 , 18], [15 , 18], [15 , 18] ],
		minutes 		: [ [ 0 , 0 ], [ 0 , 0 ], [0, 0] ],
		address			: "3316 Tejon St, Denver, CO 80211",
		phone			: "(720) 420-0622",
		name			: "Old Major",
		drinkSpecials	: "$7.50 Cocktails, $7 Wine, $6 Draft Beers, $ Beer and a shot of bourbon",
		foodSpecials	: "$4 Pork Fat French Fries, $6 Seafood Fritters of the Day, $9 Pork Burger, $5 Sausage plate, $13 Charcuterie Plate, $2.75 each oysters of the day, $7 Waygu Hot Dog, $7 Rib Tips",
		image  			: "http://www.confluence-denver.com/galleries/Features/2013/Issue_46/fina_art_02.jpg",
		description		: "Rustic-chic restaurant specializing in elevated dishes from sustainable sources & top-shelf drinks.",
		website			: "http://oldmajordenver.com/menu/"
	},
	{
		day 			: [ 0, 6],
		hours 			: [ [16 , 18], [16 , 18] ],
		minutes 		: [ [ 0 , 0 ], [ 0 , 0 ] ],
		address			: "3316 Tejon St, Denver, CO 80211",
		phone			: "(720) 420-0622",
		name			: "Old Major",
		drinkSpecials	: "$7.50 Cocktails, $7 Wine, $6 Draft Beers, $ Beer and a shot of bourbon",
		foodSpecials	: "$4 Pork Fat French Fries, $6 Seafood Fritters of the Day, $9 Pork Burger, $5 Sausage plate, $13 Charcuterie Plate, $2.75 each oysters of the day, $7 Waygu Hot Dog, $7 Rib Tips",
		image  			: "http://www.confluence-denver.com/galleries/Features/2013/Issue_46/fina_art_02.jpg",
		description		: "Rustic-chic restaurant specializing in elevated dishes from sustainable sources & top-shelf drinks.",
		website			: "http://oldmajordenver.com/menu/"
	},
		{
		day 			: [ 0, 1, 2, 3, 4, 5, 6],
		hours 			: [ [11 , 17], [11 , 17], [11 , 17], [11 , 17], [11 , 17], [11 , 17], [11 , 17] ],
		minutes 		: [ [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ] ],
		address			: "2715 17th St, Denver, CO 80211",
		phone			: "(303) 433-6363",
		name			: "Postino LoHi",
		drinkSpecials	: "$5 wine by the glass, $5 pitchers of beer",
		foodSpecials	:  null,
		image  			: "http://www.postinowinecafe.com/img/desktop-hero.jpg",
		description		: "Italian spot serving a wide selection of bruschetta & wine in rustic-chic digs with outdoor seating.",
		website			: "http://www.postinowinecafe.com/"
	},
		{
		day 			: [ 0, 1, 2, 3, 4, 5, 6],
		hours 			: [ [16 , 18], [16 , 18], [16 , 18], [16 , 18], [16 , 18], [16 , 18], [16 , 18] ],
		minutes 		: [ [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ] ],
		address			: "2532 15th St, Denver, CO 80211",
		phone			: "(303) 433-7001",
		name			: "Forest Room 5",
		drinkSpecials	: "$5 Cocktail specials, $1 off all other drinks",
		foodSpecials	:  "$5 Calamari, $5 Fish Tacos, $ Herb and Truffle Fries, $5 Ahi Tuna, $5 Cheese plate, $5 Manilla Steamed Clams",
		image  			: "https://cdn0.vox-cdn.com/uploads/chorus_image/image/46999572/firepits.0.0.jpg",
		description		: "Hip night spot with an artsy, rustic interior & an outdoor area with fire pits & a flowing creek.",
		website			: "http://www.forestroom5.com/"
	},
		{
		day 			: [  1, 2, 3, 4, 5 ],
		hours 			: [ [16 , 18], [16 , 18], [16 , 18], [16 , 18], [16 , 18] ],
		minutes 		: [ [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ] ],
		address			: "1600 W 33rd Ave, Denver, CO 80211",
		phone			: "(303) 993-4200",
		name			: "Root Down",
		drinkSpecials	: "(In Bar Only), $5 Cocktail specials, $6 Wine, $4 Draft Beers ",
		foodSpecials	:  "$5 Jerk Duck Wings, $5 Seared Arepa, $4 Sweet Potato Fries, $4 Veggie Burger Slider, $5 Beef Brisket Tacos, $5 CO Lamb Slider, $5 Roasted Baby Beets",
		image  			: "http://www.rootdowndenver.com/wp-content/gallery/restaurant3/01.jpg",
		description		: "A converted filling station is an artful, high-energy venue for creative American small plates.",
		website			: "http://www.rootdowndenver.com/"
	},
		{
		day 			: [  0, 1, 2, 3, 4, 5, 6 ],
		hours 			: [ [17 , 18], [17 , 18], [17 , 18], [17 , 18], [17 , 18] ],
		minutes 		: [ [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ] ],
		address			: "2413 W 32nd Ave, Denver, CO 80211",
		phone			: "(303) 477-4141",
		name			: "Duo",
		drinkSpecials	: "$6 Select Wine, $6 Speciality Cocktails, $2 Select Beer, $2 Well Cocktails ",
		foodSpecials	:  "$6 Apps, Soups, and Salads",
		image  			: "http://farm9.staticflickr.com/8038/8051988781_5ee7b581a9.jpg",
		description		: "Creative local farm-to-fork New American cuisine in a warm, rustic, continually packed space.",
		website			: "http://www.duodenver.com/"
	},
		{
		day 			: [  0, 2, 3, 4, 5, 6 ],
		hours 			: [ [17 , 18], [17 , 18], [17 , 18], [17 , 18], [17 , 18], [17 , 18] ],
		minutes 		: [ [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ] ],
		address			: "2639 W 32nd Ave, Denver, CO 80211",
		phone			: "(303) 433-0949",
		name			: "Spuntino",
		drinkSpecials	: "(In the Bar Only), $5 Select Wines, $5 Speciality Cocktails, $1 off all beers ",
		foodSpecials	:  "$5 Antipasti, $4 House Marinated Olives, $2.50 Pork Meatballs, $2 Arancini, $4 Porchetta Slider, $9 Spuntino Picnic Basket",
		image  			: "https://static1.squarespace.com/static/5208f480e4b03ad27ab70aa3/547ff92ce4b0f8df179de603/547ffaa6e4b0809df8564013/1457985883964/Spuntino-Denver-Fin-Art-Co-4.JPG?format=500w",
		description		: "Charming restaurant featuring classic Italian dishes with a seasonal bent in a rustic environment.",
		website			: "http://www.spuntinodenver.com/#/home"
	},
		{
		day 			: [1],
		hours 			: [ [16 , 23] ],
		minutes 		: [ [ 0 , 0 ] ],
		address			: "1575 Boulder St, Denver, CO 80211",
		phone			: "(720) 570-8686",
		name			: "Lola",
		drinkSpecials	: "$5-$7 Margaritas, $5 Speciality Cocktails, $7-$9 Shots and Backs, $2 Top Rope, $3 Dos XX, $4 Draft beer, $5 House Wine ",
		foodSpecials	:  "$4 Chips and Dip, $4 Tacos, $2-$8 Appetizers",
		image  			: "http://vp.cdn.cityvoterinc.com/g/00-00-00-07-03-61-70361_454491.jpg",
		description		: "Highbrow Mexican cuisine & imaginative drinks fuel the bustling scene at this cantina with a patio.",
		website			: "http://www.loladenver.com/"
	},
		{
		day 			: [2, 3, 4, 5],
		hours 			: [ [16 , 18], [16 , 18], [16 , 18], [16 , 18]],
		minutes 		: [ [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ]],
		address			: "1575 Boulder St, Denver, CO 80211",
		phone			: "(720) 570-8686",
		name			: "Lola",
		drinkSpecials	: "$5-$7 Margaritas, $5 Speciality Cocktails, $7-$9 Shots and Backs, $2 Top Rope, $3 Dos XX, $4 Draft beer, $5 House Wine ",
		foodSpecials	:  "$4 Chips and Dip, $4 Tacos, $2-$8 Appetizers",
		image  			: "http://vp.cdn.cityvoterinc.com/g/00-00-00-07-03-61-70361_454491.jpg",
		description		: "Highbrow Mexican cuisine & imaginative drinks fuel the bustling scene at this cantina with a patio.",
		website			: "http://www.loladenver.com/"
	},
		{
		day 			: [6, 0],
		hours 			: [ [14 , 17], [14 , 17] ],
		minutes 		: [ [ 30 , 0 ], [ 30 , 0 ] ],
		address			: "1575 Boulder St, Denver, CO 80211",
		phone			: "(720) 570-8686",
		name			: "Lola",
		drinkSpecials	: "$5-$7 Margaritas, $5 Speciality Cocktails, $7-$9 Shots and Backs, $2 Top Rope, $3 Dos XX, $4 Draft beer, $5 House Wine ",
		foodSpecials	:  "$4 Chips and Dip, $4 Tacos, $2-$8 Appetizers",
		image  			: "http://vp.cdn.cityvoterinc.com/g/00-00-00-07-03-61-70361_454491.jpg",
		description		: "Highbrow Mexican cuisine & imaginative drinks fuel the bustling scene at this cantina with a patio.",
		website			: "http://www.loladenver.com/"
	},
		{
		day 			: [0, 1, 2, 3, 4, 5, 6],
		hours 			: [ [15 , 18], [15 , 18], [15 , 18], [15 , 18], [15 , 18], [15 , 18], [15 , 18] ],
		minutes 		: [ [ 30 , 30 ], [ 30 , 30 ], [ 30 , 30 ], [ 30 , 30 ], [ 30 , 30 ], [ 30 , 30 ], [ 30 , 30 ] ],
		address			: "3200 Tejon St, Denver, CO 80211",
		phone			: "(303) 927-6334",
		name			: "LoHi SteakBar",
		drinkSpecials	: "2 for 1 Draft Beers, 2 for 1 Well Cocktails, 2 for 1 Wines by the Glass ",
		foodSpecials	:  "$1 Oysters on the Half Shell",
		image  			: "https://cdn0.vox-cdn.com/thumbor/lw0Rk1agajGUdJlGyPwdr56Gdrk=/900x600/cdn0.vox-cdn.com/uploads/chorus_asset/file/2344796/LoHiSteak_8676.0.jpg",
		description		: "Sleek, happening hangout serving prime cuts of meat & steakhouse standards with custom cocktails.",
		website			: "http://www.lohisteakbar.com/"
	},
		{
		day 			: [0, 1, 2, 3, 4, 5, 6],
		hours 			: [ [22 , 24], [22 , 24], [22 , 24], [22 , 24], [22 , 24], [22 , 24], [22 , 24] ],
		minutes 		: [ [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ]  ],
		address			: "3200 Tejon St, Denver, CO 80211",
		phone			: "(303) 927-6334",
		name			: "LoHi SteakBar",
		drinkSpecials	: "2 for 1 Draft Beers, 2 for 1 Well Cocktails, 2 for 1 Wines by the Glass ",
		foodSpecials	:  "$1 Oysters on the Half Shell",
		image  			: "https://cdn0.vox-cdn.com/thumbor/lw0Rk1agajGUdJlGyPwdr56Gdrk=/900x600/cdn0.vox-cdn.com/uploads/chorus_asset/file/2344796/LoHiSteak_8676.0.jpg",
		description		: "Sleek, happening hangout serving prime cuts of meat & steakhouse standards with custom cocktails.",
		website			: "http://www.lohisteakbar.com/"
	},
		{
		day 			: [0, 1, 2, 3, 4, 5, 6],
		hours 			: [ [15 , 17], [15 , 17], [15 , 17], [15 , 17], [15 , 17], [15 , 17], [15 , 17] ],
		minutes 		: [ [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ]  ],
		address			: "2227 W 32nd Ave, Denver, CO 80211",
		phone			: "(720) 668-8506",
		name			: "Bar Dough",
		drinkSpecials	: "$4 Bar Dough Lager, $6 House Wines, $7 Spritzes, $7 Bar Dough Punch, $14 Bottomless Bellini",
		foodSpecials	:  "$4 Olives, $5 Garlic Bread, $5 Arancini, $5 Wings, $5 Chicken Parm Skewers, $5 Bruschetta, $5 Margherita Pizza, $5 Salads, $12-$17 Pizza Specials",
		image  			: "https://cdn2.vox-cdn.com/thumbor/HKpsegV3jE2RJVJJVW7ptbC5Thc=/0x52:1000x615/1310x737/cdn0.vox-cdn.com/uploads/chorus_image/image/47804809/BARDOUGH_8899e.0.0.jpg",
		description		: "Modern-rustic Italian spot featuring gourmet wood-fired pizzas, plus pastas, wine, beer & cocktails.",
		website			: "http://bardoughdenver.com/"
	},
		{
		day 			: [0, 1, 2, 3, 4, 5, 6],
		hours 			: [ [16 , 18], [16 , 18], [16 , 18], [16 , 18], [16 , 18], [16 , 18], [16 , 18] ],
		minutes 		: [ [ 0 , 0 ], [ 0 , 0 ],[ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ]],
		address			: "2501 16th St, Denver, CO 80211",
		phone			: "(303) 433-9734",
		name			: "Ale House at Amato's",
		drinkSpecials	: "$3 Wynkoop Beers, $5 Well Drinks, $5 Beer Cocktails, $5 Carboy Wines, $5 Da Luca Prosecco, $5 Los Doc Campo De Borja Rose",
		foodSpecials	:  "$5.50 Fish Tacos, $5.50 Ale Basted Pretzels, $5.50 Shisito Peppers, $5.50 Carnitas Wontons, $5.50 Crispy Calamari and Pickles, $5.50 Carnitas Wontons, $5.50 Big Wings",
		image  			: "http://catchcarri.com/wp-content/uploads/2012/04/ale-house-amatos-3.jpg",
		description		: "Bar & grill offering 40-plus tap beers & a rooftop patio with sweeping views of the city skyline.",
		website			: "http://www.alehousedenver.com/"
	},
		{
		day 			: [0, 1, 2, 3, 4, 5, 6],
		hours 			: [ [22 , 24], [22 , 24], [22 , 24], [22 , 24], [22 , 24], [22 , 24], [22 , 24]  ],
		minutes 		: [ [ 0 , 0 ], [ 0 , 0 ],[ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ]],
		address			: "2501 16th St, Denver, CO 80211",
		phone			: "(303) 433-9734",
		name			: "Ale House at Amato's",
		drinkSpecials	: "$3 Wynkoop Beers, $5 Well Drinks, $5 Beer Cocktails, $5 Carboy Wines, $5 Da Luca Prosecco, $5 Los Doc Campo De Borja Rose",
		foodSpecials	: "$5.50 Fish Tacos, $5.50 Ale Basted Pretzels, $5.50 Shisito Peppers, $5.50 Carnitas Wontons, $5.50 Crispy Calamari and Pickles, $5.50 Carnitas Wontons, $5.50 Big Wings",
		image  			: "http://catchcarri.com/wp-content/uploads/2012/04/ale-house-amatos-3.jpg",
		description		: "Bar & grill offering 40-plus tap beers & a rooftop patio with sweeping views of the city skyline.",
		website			: "http://www.alehousedenver.com/"
	},
			{
		day 			: [0, 1, 2, 3, 4, 5, 6],
		hours 			: [ [15 , 18], [15 , 18], [15 , 18], [15 , 18], [15 , 18], [15 , 18], [15 , 18] ],
		minutes 		: [ [ 0 , 0 ], [ 0 , 0 ],[ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ]],
		address			: "2500 Larimer St #100, Denver, CO 80205",
		phone			: "(303) 292-3553",
		name			: "Cart Driver",
		drinkSpecials	: "$5 Prosecco, $5 Negroni",
		foodSpecials	: "$5 Two Market Oysters",
		image  			: "http://cart-driver.com/images/ss/cd12.jpg",
		description		: "Intimate, auto-inspired setting for Southern Italian wood-fired pizza, oysters & cocktails.",
		website			: "http://www.cart-driver.com/"
	},
		{
		day 			: [0, 1, 2, 3, 4, 5, 6],
		hours 			: [ [22 , 24], [22 , 24], [22 , 24], [22 , 24], [22 , 24], [22 , 24], [22 , 24]],
		minutes 		: [ [ 0 , 0 ], [ 0 , 0 ],[ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ]],
		address			: "2500 Larimer St #100, Denver, CO 80205",
		phone			: "(303) 292-3553",
		name			: "Cart Driver",
		drinkSpecials	: "$5 Fernet and Pils, $5 Manhattan",
		foodSpecials	: "$5 Daisy Pizza, $5 Sardines and Toast",
		image  			: "http://cart-driver.com/images/ss/cd12.jpg",
		description		: "Intimate, auto-inspired setting for Southern Italian wood-fired pizza, oysters & cocktails.",
		website			: "http://www.cart-driver.com/"
	},




];

//create things in pSQL
var barCreate = function(bar){
	return DB.Bar.create({ 
		day 			: bar.day,
		hours 			: bar.hours,
		minutes 		: bar.minutes,
		address 		: bar.address,
		phone 			: bar. phone,
		name 			: bar.name,
		drinkSpecials 	: bar.drinkSpecials,
		foodSpecials 	: bar.foodSpecials,
		image  			: bar.image,
		description 	: bar.description,
		website 		: bar.website
	});
};

barArray.forEach(function(bar){
		barCreate(bar);
	});