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


const canArdaName = ('Can');
const canArdaSurname = ('Arda');
const canArdaJob = ('Software Developer');
const canBornYear = (1995);
const todayYear = (2042);
const canArdaAge = (todayYear-canBornYear);

console.log(` ${canArdaName} ${canArdaSurname} is ${canArdaAge} years old. ${canArdaName} ${canArdaSurname}'s job is ${canArdaJob}.`) ;

const idilName = ('İdil');
const idilSurname = ('Orul');
const idilJob = ('Teacher');
const idilBornYear = (2004);
const idilAge = (todayYear-idilBornYear);

console.log(` ${idilName} ${idilSurname} is ${idilAge} years old. ${idilName} ${idilSurname}'s job is ${idilJob}.`);

const jonasName = ('Jonas');
const jonasSurname = ('Schmimetmann');
const jonasJob = ('Police');
const jonasBornYear = (1985);
const jonasAge = (todayYear-jonasBornYear);

console.log(` ${jonasName} ${jonasSurname} is ${jonasAge} years old. ${jonasName} ${jonasSurname}'s job is ${jonasJob}.`);

const cemName = ('Cem');
const cemJob = ('Designer');
const cemBornYear = (2000);
const cemAge = (todayYear-cemBornYear);

console.log(` ${cemName} ${jonasSurname} is ${cemAge} years old. ${cemName} ${jonasSurname}'s job is ${cemJob}.`);

const selinName = ('Selin');
const selinSurname = ('Kagdaric');
const selinBornYear = (2001);
const selinAge = (todayYear-selinBornYear);
const selinJob = ('Nurse');

console.log(` ${selinName} ${selinSurname} is ${selinAge} years old. ${selinName} ${selinSurname}'s job is ${selinJob}.`);

const mertName= ('Mert');
const mertBornYear = (1975);
const mertAge = (todayYear-mertBornYear);
const mertJob = ('Doctor');

console.log(` ${mertName} ${selinSurname} is ${mertAge} years old. ${mertName} ${selinSurname}'s job is ${mertJob}.`);