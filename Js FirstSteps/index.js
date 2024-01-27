'use strict'

//const can = ('Can ARda');

//console.log(can)

// Degisken isimleri olamazlar
//const SyntaxError 
//const new 
//const function name(params) {
    
//}
//const name 
//const null 

//const number = (!false);
//console.log(number);

// Can Arda Born Year 1995 Software Developer
// İdil Arda Born Year 2004 Teacher
// Jonas Schmimetmann Born Year 1985 Police
// Cem Schmimetmann Born Year 2000 Designer
// Selin Kagdaric Born Year 2001 Nurse
// Mert Kagdaric Born Year 1975 Doctor 

// **CHALLENGE 01 
// Kisilerin isimleri, soyisimleri, meslekleri, doğum yıllarına ait değişkenler şeklinde tanıtalım. 
// Bulunduğumuz yıl 2042 olarak esas alınacaktır. 
// Her kişi için ayrı ayrı cümleler oluşturalım


//const canArdaName = ('Can');
//const canArdaSurname = ('Arda');
//const canArdaJob = ('Software Developer');
//const canBornYear = (1995);
//const todayYear = (2042);
//const canArdaAge = (todayYear-canBornYear);

//console.log(` ${canArdaName} ${canArdaSurname} is ${canArdaAge} years old. ${canArdaName} ${canArdaSurname}'s job is ${canArdaJob}.`) ;

//const idilName = ('İdil');
//const idilSurname = ('Orul');
//const idilJob = ('Teacher');
//const idilBornYear = (2004);
//const idilAge = (todayYear-idilBornYear);

//console.log(` ${idilName} ${idilSurname} is ${idilAge} years old. ${idilName} ${idilSurname}'s job is ${idilJob}.`);

//const jonasName = ('Jonas');
//const jonasSurname = ('Schmimetmann');
//const jonasJob = ('Police');
//const jonasBornYear = (1985);
//const jonasAge = (todayYear-jonasBornYear);

//console.log(` ${jonasName} ${jonasSurname} is ${jonasAge} years old. ${jonasName} ${jonasSurname}'s job is ${jonasJob}.`);

//const cemName = ('Cem');
//const cemJob = ('Designer');
/*
const cemBornYear = (2000);
const cemAge = (todayYear-cemBornYear);

console.log(` ${cemName} ${jonasSurname} is ${cemAge} years old. ${cemName} ${jonasSurname}'s job is ${cemJob}.`);

const selinName = ('Selin');
const selinSurname = ('Kagdaric');
//const selinBornYear = (2001);
//const selinAge = (todayYear-selinBornYear);
//const selinJob = ('Nurse');

console.log(` ${selinName} ${selinSurname} is ${selinAge} years old. ${selinName} ${selinSurname}'s job is ${selinJob}.`);

const mertName = ('Mert');
const mertBornYear = (1975);
const mertAge = (todayYear-mertBornYear);
const mertJob = ('Doctor');

console.log(` ${mertName} ${selinSurname} is ${mertAge} years old. ${mertName} ${selinSurname}'s job is ${mertJob}.`);

*/

// Chalenge 02 
// Sınıf 1 50,65,45,30
// Sınıf 2 50,78,90,5
// Sınıf 3 50,50,40, 0

// * Her sınıfın aritmetik ortalamlarını hesaplayalım 
// * Çan eğrisini tespit ettikten sonra kaç ogrencinin sınavı geçip geçmediğini yazalım

/*

const numberOne = (50);
const numberTwo = (65);
const numberThree = (45);
const numberFour = (30);
const numberFive = (78);
const numberSix = (90);
const numberSeven = (5);
const numberEight = (40);

const allStudents = (4);

const classOne = (numberOne+numberTwo+numberThree+numberFour);
const classTwo = (numberOne+numberFive+numberSix+numberSeven);
const classThree = (numberOne+numberOne+numberEight);

const classOneArMe = (classOne/allStudents);
const classTwoArMe = (classTwo/allStudents);
const classThreeArMe = (classThree/allStudents);

console.log(classOneArMe);
console.log(classTwoArMe);
console.log(classThreeArMe);

const classOneFNumber = (2);
const classThreeFNumber = (1);


console.log(`The arithmetic average of the first class is ${classOneArMe}.`);
console.log(`The arithmetic average of the second class is ${classTwoArMe}.`);
console.log(`The arithmetic average of the third class is ${classThreeArMe}.`);
console.log(`${classOneFNumber} students in first class couldn't pass the bell curve.`);
console.log(`${classOneFNumber} students in second class couldn't pass the bell curve.`);
console.log(`${classThreeFNumber} students in third class couldn't pass the bell curve.`);

*/

//const js = 'can';

//if (js === 'can') alert ('Js is fun');

/*

const age = 12;

if (age >= 18) {
    console.log('He can take drive licance');
} else {
    const yearsLeft = 18 - age; 
    console.log(`He is too young he have ${yearsLeft} years`);
}



const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const massCan = 80;
const heightCan = 1.80;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2 ;
const BMICan = massCan / heightCan ** 2;

console.log(BMIMark, BMIJohn, BMICan);

if (BMIMark > BMIJohn > BMICan) {
    console.log('BMI Mark higher to group');
} if(BMIJohn > BMICan > BMIMark) {
    console.log('BMI John higher to BMI Mark');
} 

John Age = 18
Jonas = 14
Can = 20 
Idil = 19




const johnAge = (18);
const yearsLeftJohn = (18 - johnAge);

if ( johnAge >= 18) {
    console.log(`He can take drive licance`);
} else {
    console.log(`He cannot take drive licance. He have ${yearsLeftJohn} years.`);
}

const jonasAge = (14);

if (jonasAge >= 18) {
    console.log(`He can take drive licance`);
} else {
    const yearsLeftJonas = (18- jonasAge);
    console.log(`He cannot take drive licance. He have ${yearsLeftJonas} years.`);
}

const canAge = (28);

if ( canAge >= 18) {
    console.log(`He can take drive licance`);
} else {
    const yearsLeftCan = (18 - canAge);
    console.log(`He cannot take drive licance. He have ${yearsLeftCan} years.`);
}

const idilAge = (19);

if (idilAge >= 18) {
    console.log(`She can take drive licance`);
} else {
    const yearsLeftİdil = (18 - idilAge);
    console.log(`She cannot take drive licance. She have ${yearsLeftİdil} years.`);
}



// falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Can'));
console.log(Boolean(null));
console.log(Boolean(NaN));



const hasDriverLicense = true;
const hasGoodVision = false;
const canArda = false;

console.log(hasDriverLicense)
console.log(hasGoodVision)

console.log(hasGoodVision && hasDriverLicense && canArda);
console.log(hasGoodVision || hasDriverLicense || canArda);

if (hasDriverLicense || hasGoodVision || canArda) {
    console.log('Random')
} else if (hasGoodVision && hasDriverLicense && canArda) {
    console.log('Random 2')
} else if (hasDriverLicense || hasGoodVision) {
    console.log('Random 3')
}

Challenge 2 (VERY HARD)

Maç 1 
Mavi Takım [4,2,5,3,6,8]
Kırmızı Takım [5,4,1,6,4,5]

Maç 2 
Mavi Takım [6,9,3,6,7,3]
Kırmızı Takım [7,5,7,8,3,6]

Maç 3 
Mavi Takım [6,5,3,5,2,6]
Kırmızı Takım [5,3,8,7,9,4]

İki takımın mücadele ettiği bir müsabakada toplamda 3 maç oynanmıştır. 
Maçlarda alınan puanlar yukarıda verilmiştir.
Her maçın kazananı o maçın alınan puanlarının ortalamalarına göre hesaplanacaktır. 
Toplamda her maç 6 şar adet atış yapılmıştır. 

Sizden beklenenler
*Her maç için takımların ayrı ayrı ortalamlarını bulunuz. 
*Her maçın kazananlarını ${``} şeklinde gösteriniz. 
*Tek bir if else yazarak mücadeleyi (3 maçın ortalaması) kimin kazandığını belirtiniz. 
-Koşul 1: Mavi takım kazanır 
-Koşul 2: Kırmızı takım kazanır
-Koşul 3: Beraberlik durumunda maç tekrarlanır 

İpucu: === ve == dikkat ediniz

Good Luck :) 



const teamPoint = (6);
const blueTeamName = ('Blue Team');
const redTeamName = ('Red Team');

const oneBlueTeamTotal = ( 4 + 2 + 5 + 3 + 6 + 8);
const oneBlueTeamArMe = ( oneBlueTeamTotal / teamPoint);

const oneRedTeamTotal = ( 5 + 4 + 1 + 6 + 4 + 5);
const oneRedTeamArMe = ( oneRedTeamTotal / teamPoint);

console.log(oneBlueTeamArMe > oneRedTeamArMe );


console.log(`In the first match, the average of te blue teams is ${oneBlueTeamArMe} points.`);
console.log(`In the first match, the average of te red teams is ${oneRedTeamArMe} points.`);
console.log(`The winner in the first match is the ${blueTeamName}. `);




const twoBlueTeamTotal = ( 6 + 9 + 3 + 6 + 7 + 3);
const twoBlueTeamArMe = ( twoBlueTeamTotal / teamPoint);

const twoRedTeamTotal = ( 7 + 5 + 7 + 8 + 3 + 6);
const twoRedTeamArMe = ( twoRedTeamTotal / teamPoint);

console.log(twoRedTeamArMe > twoBlueTeamArMe );

console.log(`In the second match, the average of te blue teams is ${twoBlueTeamArMe} points.`);
console.log(`In the second match, the average of te red teams is ${twoRedTeamArMe} points.`);
console.log(`The winner in the second match is the ${redTeamName}. `);



const threeBlueTeamTotal = ( 6 + 5 + 3 + 5 + 2 + 6);
const threeBlueTeamArMe = ( threeBlueTeamTotal / teamPoint);

const threeRedTeamTotal = ( 5 + 3 + 8 + 7 + 9 + 4);
const threeRedTeamArMe = ( threeRedTeamTotal / teamPoint);

console.log(threeRedTeamArMe > threeBlueTeamArMe );

console.log(`In the third match, the average of te blue teams is ${threeBlueTeamArMe} points.`);
console.log(`In the third match, the average of te red teams is ${threeRedTeamArMe} points.`);
console.log(`The winner in the third match is the ${redTeamName}. `);

const allMatchessBlueTotal = (oneBlueTeamArMe + twoBlueTeamArMe + threeBlueTeamArMe);
const allMatchessBlueArMe = (allMatchessBlueTotal / 3);
const allMatchessRedTotal = (oneRedTeamArMe + twoRedTeamArMe + threeRedTeamArMe);
const allMatchessRedArMe = (allMatchessRedTotal / 3);

console.log(allMatchessRedArMe > allMatchessBlueArMe);

if (allMatchessRedArMe > allMatchessBlueArMe ) {
    console.log(`At the end of three matches, the ${redTeamName} is the winner.`)
} else if (allMatchessBlueArMe > allMatchessRedArMe ) {
    console.log(`At the end of three matches, the ${blueTeamName} is the winner.`)
} else if ( allMatchessBlueArMe === allMatchessRedArMe ) {
    console.log(`The match ended in a draw.`)
}

*/

/*
Matematik sınav sonuçları: 
Sınıf 1 [56,45,78,41,52,12,54,12,52,36,12,12,45,78,45,89,65,100,25,48]
Sınıf 2 [45,10,25,78,75,10,45,23,56,78,41,56,78,52,14,0,12,45,78]
Sınıf 3 [40,45,40,12,30,70,50,65,60,78,90,45,85,76,45,70,40,40,50,65]




const studentpoint = [56,45,78,41,52,12,54,12,52,36,12,12,45,78,45,89,65,100,25,48];

console.log(studentpoint > 50);

if (studentpoint >= 50) {
    console.log(`The student passed the exam.`)
} else {
    console.log(`The student didn't pass the exam.`)
}

console.log('Can')


*/ 

let day = 'sadf';

/*

switch (day) {
    case 'monday': // day === monday
    console.log('Toplantiya gidilecek');
    console.log('Kresten cocuk alinacak');
    break;

    case 'tuesday':
    console.log('Arkadas bulusmasi');
    break;

    case 'wednesday':
    case 'thursday':
    console.log('Spora gidis');
    break;

    case 'friday':
    console.log('Dizi izleme');
    break;

    case 'saturday':
    case 'sunday':
    console.log('Hafta sonu');
    break;
    default:
        console.log('Gecerli gün girilmedi');
}


if (day === 'monday') {
    console.log('Toplantiya gidilecek');
    console.log('Kresten cocuk alinacak');
} else if (day === 'tuesday') {
    console.log('Arkadas bulusmasi');
} else if (day === 'wednesday' || day==='thursday') {
    console.log('Spora gidis');
} else if ( day === 'friday') {
    console.log('Dizi izleme');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Hafta sonu');
} else {
    console.log('Gecerli gün girilmedi');
}




const age = 20;

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink)


// ? = if       : = else

function logger () {
    console.log('My name is Can')
    console.log('My name is Can')
    console.log('My name is Can')
    console.log('My name is Can')
    console.log('My name is Can')
    console.log('My name is Can')
    console.log('My name is Can')
    console.log('My name is Can')

}

logger();

function meyveSuyu(elma, portakal) {
    const juice = `Meyve suyu ${elma} elma ve ${portakal} portakal ile yapilir.`
    return juice;
}

const elmaSuyu = meyveSuyu (4,2);
console.log(elmaSuyu)

*/

// Function declaration

//const age1 = calcAge1(1991);

//function calcAge1(birthYear) {
//    return  2037 - birthYear;

//}

// Function experession

//const calcAge2 = function (birthYear) {
//    return 2037 - birthYear;
//}

//const age2 = calcAge2(2000);


//console.log(age1, age2);










/* let month = 'august';

if (month === 'januar') {
    console.log(`Ali's birthday party is this month.`);
} else if (month === 'februar') {
    console.log(`Ece's birthday party is this month.`);
} else if (month === 'märz' || month === 'april' ) {
    console.log(`Veli's birthday party and Veli's wedding is this month.`);
} else if (month === 'mai') {
    console.log(`Pelin's birthday party is this month.`);
} else if (month === 'juni') {
    console.log(`Burak's birthday party is this month.`);
} else if (month === 'juli') {
    console.log(`Arzu's birthday party is this month.`);
} else if (month === 'august') {
    console.log(`Mert's birthday party is this month.`);
} else if (month === 'september') {
    console.log(`Sarp's birthday party is this month.`);
} else if (month === 'oktober') {
    console.log(`Dilan's birthday party is this month.`);
} else if (month === 'november') {
    console.log(`Kerim's birthday party is this month.`);
} else if (month === 'dezember') {
    console.log(`Ozan's birthday party is this month.`);
} else {
    console.log(`The current month was not entered.`)
}

*/


function pilavOlcusu(pirinç, su) {
    const pilav = (`Pilav ${pirinç} bardak pirinç ve ${su} bardak su ile hazirlanir.`)
    return pilav
}

const pilavTarifi = pilavOlcusu(2,3)
console.log(pilavTarifi)





function canMeans(meanOne, meanTwo) {
    const can = (`Can is my whole ${meanOne} and my whole ${meanTwo}.`)
    return can
}

const canMeansToMe = canMeans('love', 'luck')
console.log(canMeansToMe)




function whatToBe(job, person) {
    const life = (`I want to be a successful ${job} and a ${person}.`)
    return life
}

const whatWantToBe = whatToBe('software developer', 'happy person')
console.log(whatWantToBe)






function sätzeWörter(wörterEin, wörterZwei) {
    const sätze = (`Du bist mein Sonnenschein an regnerischen Tagen.`)
    return sätze
}

const WörterMeans = sätzeWörter('Sonnenschein', 'regnerischen Tagen')
console.log(WörterMeans)


const age = 10;

const licence = age >= 18 ? 'can get a drivers license.' : 'cannot get a drivers license.';
console.log(licence)



