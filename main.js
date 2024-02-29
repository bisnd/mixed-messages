const arrayNames = ['Alex', 'Amber', 'Chloe', 'Chris', 'Ellie', 'Georgia', 'Jamie', 'Jess', 'Josh', 'Luke', 'Molly', 'Zack'];
const arrayCareers = ['an account manager', 'a dancer', 'an entrepreneur', 'a gas engineer', 'an influencer', 'a model', 'a nurse', 'a personal trainer', 'a professional footballer', 'a social media creator', 'a student', 'a tradie'];
const arrayPlaces = ['Essex', 'London', 'Manchester', 'Scotland', 'Wales'];
const arrayQualities = ['athletic', 'attractive', 'with blonde hair', 'caring', 'confident', 'with dark hair', 'family oriented', 'fit', 'funny', 'genuine', 'that goes to the gym', 'with good banter', 'with good teeth', 'honest', 'kind hearted', 'loyal', 'with a nice smile', 'spontaneous', 'tall'];

const randomIndex = (array) => Math.floor(Math.random() * array.length); // Would select a random number between 0 and the lenght of the array (exclusive --> so as if it was array.lenght -1)

const generateIslander = () => {
    let name = arrayNames[randomIndex(arrayNames)]; // Assigns a random name from arrayNames to the variable "name"
    // console.log(name);
    let career = arrayCareers[randomIndex(arrayCareers)];
    // console.log(career);
    let place = arrayPlaces[randomIndex(arrayPlaces)];
    console.log(place);
    let firstQuality = arrayQualities[randomIndex(arrayQualities)];
    let secondQuality = arrayQualities[randomIndex(arrayQualities)];
    let thirdQuality = arrayQualities[randomIndex(arrayQualities)];
    console.log(`BEFORE the while loop, the firstQuality is ${firstQuality}, the secondQuality is ${secondQuality} and the thirdQuality is ${thirdQuality}`);
    /* Two separate "while" loops
    while (secondQuality === firstQuality) {
        secondQuality = arrayQualities[randomIndex(arrayQualities)]
    };
    while (thirdQuality === secondQuality || thirdQuality === firstQuality) {
        thirdQuality = arrayQualities[randomIndex(arrayQualities)]
    };
    */
    // A single "while" loop, when any quality is the same as another one, both secondQuality and thirdQuality will get reassigned, even if one of them was fine as it was. Unclear which one is faster, but maybe this is better because it's shorter?
    while (secondQuality === firstQuality || secondQuality === thirdQuality || thirdQuality === firstQuality) {
        secondQuality = arrayQualities[randomIndex(arrayQualities)];
        thirdQuality = arrayQualities[randomIndex(arrayQualities)];
    }
    console.log(`AFTER the while loop, the firstQuality is ${firstQuality}, the secondQuality is ${secondQuality} and the thirdQuality is ${thirdQuality}`);
    console.log(`Meet ${name}: Hi my name is ${name}, and I'm ${career} from ${place}. I'm coming on Love Island because I'm ready to find the one! I'm looking for someone ${firstQuality}, ${secondQuality} and ${thirdQuality}!`)
}

generateIslander()