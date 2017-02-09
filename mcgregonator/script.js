document.body.style.backgroundImage = "url('https://res.cloudinary.com/takeout/image/upload/v1486593178/mcg-bg_rgot2v.png')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundAttachment = "fixed";

const quotes = [
["Doubt is only removed by action. If you're not working then that's where doubt comes in.", "Conor McGregor"], 
["Look out for those who look out for you. Loyalty is everything.", "Conor McGregor"], 
["You must improvise, adapt, and overcome.", "Conor McGregor"],
["Keep positive and keep pushing on and things will turn good.", "Conor McGregor"],
["Always be civil, but with a plan to neutralise everyone in the room.", "Conor McGregor"],
["I take inspiration from everyone and everything. I'm inspired by current champions, former champions, true competitors, people dedicated to their dream, hard workers, dreamers, believers, achievers.", "Conor McGregor"],
["Glutes are power.", "Conor McGregor"],
["There’s no talent here, this is hard work. This is an obsession. Talent does not exist, we are all equal as human beings. You could be anyone if you put in the time. You will reach the top, and that is that. I am not talented, I am obsessed.", "Conor McGregor"],
["I'm cocky in prediction, I'm confident in preparation, but I am always humble in victory or defeat.", "Conor McGregor"],
["Timing beats speed, precision beats power.", "Conor McGregor"],
["The more you seek the uncomfortable the more you will become comfortable.", "Conor McGregor"]
];

function randomize() {
let num = Math.floor(Math.random() * (quotes.length));
document.getElementById('quote').innerHTML = quotes[num];


const activeQuote = quotes[num];
const currentQuote = activeQuote[0];
const currentAuthor = activeQuote[1];

document.getElementById('quote').innerHTML = "&quot;" + currentQuote + "&quot;";
document.getElementById('author').innerHTML = currentAuthor;
};


randomize();