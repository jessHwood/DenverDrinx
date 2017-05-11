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
	name			: /*name as a string*/ "",
	drinkSpecials	: /*drink specials as a string*/ "",
	foodSpecials	: /*food specials as a string*/ ""
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
		address			: "2461 Larimer St.",
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
		hours 			: [ [ 18 , 19 ],[ 18 , 02 ], [18 , 19], [18 , 19], [18 , 19] ],
		minutes 		: [ [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ] ],
		address			: "1330 27th Street, Denver, CO, 80205",
		name			: "Nocturne",
		drinkSpecials	: "$7 classic cocktails and Rose' of the Day.",
		foodSpecials	: "half-priced oysters.",
		image			: "https://cdn0.vox-cdn.com/uploads/chorus_image/image/46614530/Nocturne_6.0.0.0.jpg",
		description 	: "Bi-level lounge & eatery serving up eclectic mix of small plates & cocktails amid live jazz music.",
		website			: "http://www.nocturnejazz.com/"
	},
	{
		day 			: [ 4, 5, 6 ],
		hours 			: [ [ 17 , 18 ],[17 , 18], [17 , 18] ],
		minutes 		: [ [ 0 , 30 ], [ 0 , 30 ], [ 0 , 30 ] ],
		address			: "2449 Larimer St.",
		name			: "Americatus",
		drinkSpecials	: "$3 Beer, $Cocktails, $5 House Wine.",
		foodSpecials	: "$1 Bruschetta",
		image			:
		description		:
		website			: "http://americatus.com/"
	},
	{
		day 			: [ 1, 2, 3, 4, 5 ],
		hours 			: [ [15 , 22], [15 , 18], [15 , 18], [15 , 18], [15 , 18] ],
		minutes 		: [ [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ], [ 0 , 0 ] ],
		address			: "The Source, 3350 Brighton Boulevard, Unit 105",
		name			: "Comida",
		drinkSpecials	: "$5 Margaritas and Cocktails, $2-$3 Beers, and $5 House Wines.",
		foodSpecials	: "$4 Street Snacks, $15 Bacon Tacos with a shot of Maker's Mark",
		image			: 
		description		:
		website			: "eatcomida.com/en/"
	},
	{
		day 			: [ 0, 1, 2, 3, 4, 5, 6 ],
		hours 			: [ [16 , 18] ],
		minutes 		: [ [ 0 , 0 ] ],
		address			: "3126 Larimer St.",
		name			: "Bar Fuasto",
		drinkSpecials	: "$6 Housemade Tonic and Gin, $6 CioCiaro Cup, $6 Collins, $2 Dad Beers, $2 Off Wine by the Glass.",
		foodSpecials	: "$6 Two Oysters, $6 Daily Bruschetta, $1 Off Antipasta",
		image			:
		description		:
		website			: "www.barfuasto.com/"
	},
	{
		day 			: [ 0, 1, 2, 3, 4, 5, 6 ],
		hours 			: [ [15 , 02] ],
		minutes 		: [ [ 0 , 0 ] ],
		address			: "3043 Brighton Boulevard",
		name			: "Will Call",
		drinkSpecials	: "$2 Coors Banquet, $3 Domestic Drafts, $3.50 Wells",
		foodSpecials	: null,
		image 			: "value", 
		description		:
		website			: "http://willcalldenver.com/"
	},
	{
		day 			: [ 1, 2, 3, 4, 5, 6 ],
		hours 			: [ [16 , 20] ],
		minutes 		: [ [ 0 , 0 ] ],
		address			: "2721 Larimer Street",
		name			: "Larimer Lounge",
		drinkSpecials	: "$2.50 PBRs, $2.50 wells, $1 off everything else",
		foodSpecials	: null,
		image			:
		description		:
		website			: "http://www.larimerlounge.com/"
	},
	{
		day 			: [ 0, 2, 3, 4, 5, 6 ],
		hours 			: [ [16 , 18] ],
		minutes 		: [ [ 0 , 0 ] ],
		address			: "2500 Larimer Street",
		name			: "Work and Class",
		drinkSpecials	: "$9 Barrel-Aged Cocktails, $6 House Cocktails, $4 House Red/ White Wine, $7 (Pent) House Wine, $4 Draft Beers",
		foodSpecials	: "$5 Chile Cheese Fries, $6 Chipotle Chicken Pot Pie, $10 Tamarind Pork Ribs, $7 Vegetarian Chile Relleno, $8 Bacon-Wrapped Asparagus & Grits, $6 Tempura Broccoli",
		image			:
		description		:
		website			: "http://workandclassdenver.com/"
	},
	{
		day 			: [ 1, 2, 3, 4, 5 ],
		hours 			: [ [16 , 18] ],
		minutes 		: [ [ 0 , 0 ] ],
		address			: "1309 26th Street",
		name			: "First Draft",
		drinkSpecials	:  null,
		foodSpecials	: "$7 Brasserie Board, $3 Fries, $5 Deviled Eggs, $6 Fresh Baked Pretzels, $7 Tempura Chicken Wings, $5 Brisket Slider, $5 Colorado Waygu Beef Burger Slider",
		image			:
		description		:
		website			: "http://www.firstdraftdenver.com/"
	},
		{
		day 			: [ 1, 2, 3, 4, 5 ],
		hours 			: [ [16 , 18] ],
		minutes 		: [ [ 0 , 0 ] ],
		address			: "2030 W 30th Ave, Denver, CO 80211",
		name			: "Linger",
		drinkSpecials	:  null,
		foodSpecials	: "",
		image  			: 
		description		:
		website			: ""
	},

];

//create things in pSQL
var barCreate = function(bar){
	return DB.Bar.create({ 
		day 			: bar.day,
		hours 			: bar.hours,
		minutes 		: bar.minutes,
		address 		: bar.address,
		name 			: bar.name,
		drinkSpecials 	: bar.drinkSpecials,
		foodSpecials 	: bar.foodSpecials,
		website 		: bar.website
	});
};

barArray.forEach(function(bar){
		barCreate(bar);
	});