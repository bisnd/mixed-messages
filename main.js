const arrayNames = ['Alex', 'Amber', 'Chloe', 'Chris', 'Ellie', 'Georgia', 'Jamie', 'Jess', 'Josh', 'Luke', 'Molly', 'Zack'];
const arrayCareers = ['an account manager', 'an entrepreneur', 'a gas engineer', 'an influencer', 'a model', 'a nurse', 'a personal trainer', 'a professional footballer', 'a student', 'a tradie'];
const arrayPlaces = ['Essex', 'London', 'Manchester', 'Scotland', 'Wales'];
const arrayQualities = ['is athletic', 'is attractive', 'has blonde hair', 'is caring', 'is confident', 'has dark hair', 'is family oriented', 'is fit', 'is funny', 'is genuine', 'goes to the gym', 'has good banter', 'has good teeth', 'is honest', 'is kind hearted', 'is loyal', 'has a nice smile', 'is spontaneous', 'is tall'];

const randomIndex = (array) => Math.floor(Math.random() * array.length); // Would select a random number between 0 and the lenght of the array (exclusive --> so as if it was array.lenght -1)