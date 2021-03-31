// provide mixed messages based on a person sporting level and practice tips

const yourSport = ['Tennis', 'Football', 'Badminton', 'Basketball', 'Hockey', 'Swimming'];
const yourLevel =  ['Amateur', 'Intermediate', 'Higer', 'Professional']; 
const practiceTips = ['Put some more hours of practice in', 'Keep going... the end goal is near', 'Try to win a competition', 'Believe in yourself'];

// create a function to get random text

function sportAdvice() {
	function getRandNum (array) {
    return Math.floor(Math.random() * array.length);
    }

const sport = yourSport [getRandNum(yourSport)];
const level = yourLevel [getRandNum(yourLevel)]; 
const practice = practiceTips [getRandNum(practiceTips)]; 

// creating the random string 
  
const fullString = `${sport} and you are at ${level} level. You should ${practice}.`
console.log ("Your sport is:") 
console.log(fullString + " ");
};

sportAdvice();
