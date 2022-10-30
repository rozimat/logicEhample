//kilometrni metrga o`girish
/*
 let k= prompt("Kilometr kiriting!:");
function kmToMetr(k){
 
  let result = k*1000;
  return result;
}; 
console.log(kmToMetr(k)+ " metr");
*/




//  Kilogramdan tonnaga o`tkazish
/*
let kilo= prompt("Kilogram kiriting!:");
function kiloToTonna(a){
 
  let result = kilo/1000;
  return result;
}; 
console.log(kiloToTonna(kilo)+ " TONNA");
*/


//kesmajoyllashrtish
/*
let a=prompt("A sonni kiriting!:");
let b=prompt("B sonni kiriting!:");
function kesmaJoylashgani(a,b){
  if (a >= b && a%b==0){
    let result= a/b;
     return result;
  }
  else if (a>=b && a%b!==0) {
    let result= a/b;
    return result;
  }
 
};
 console.log( kesmaJoylashgani(a,b)+ "ta joylashadi!");
 */

 //ikki xonali sonni raqamlarini aniqlash
 /*
 let a = prompt("Ikki xonali son kiriting!:");
 function ikkiXonaliSonniRaqamlarniAniqlash(a){
    let birxona = a/10;
    let ikkixona =a%10;
 
    return [Math.floor(birxona), ikkixona];
 };
 console.log(ikkiXonaliSonniRaqamlarniAniqlash(a));
*/


 //ikki xonali sonni raqamlar yigindisini topuchi founksiya
 /*
 let a = prompt("Ikki xonali son kiriting!:");
 function ikkiXonaliSonniRaqamlarniAniqlash(a){
    let birxona = a/10;
    let ikkixona =a%10;
  let result =(ikkixona+Math.floor(birxona));
    return result;
 };
 console.log(ikkiXonaliSonniRaqamlarniAniqlash(a));
*/
//ikki xonali sonni raqamlar kopaytmasi
/*
let a = prompt("Ikki xonali son kiriting!:");
 function ikkiXonaliSonniRaqamlarniAniqlash(a){
    let birxona = a/10;
    let ikkixona =a%10;
  let result =(ikkixona * Math.floor(birxona));
    return result;
 };
 console.log(ikkiXonaliSonniRaqamlarniAniqlash(a));
*/

// 999dan kotta sonlarni 100lik butun sonini chiqarish
/*
 let n= prompt("number!");
 var yuzlikSon = function(n){
  if (n> 999){
    let sum = Math.floor(n/100)+"0"+"0";
    return (sum/100);
  }
 };
console.log( yuzlikSon(n));
*/

//sekundni soat minut ga ogirish
/*
let s= prompt("sekndlarni kiriting!:")
var sekundToMinutSoat = function (s){
  let minut = s/60;
  let soat = (minut/60);
  let result ={minut ,soat };
  return result;

};
console.log(sekundToMinutSoat(s));
*/

// a somimi musbat rostlikka tekshiring
/*
let a =prompt("son miiriting!")
 var MusbatTrue = (a)=>{
  if (a>0){
    return true;
  }
  else{
    return false;
  }
 };
console.log( MusbatTrue(a));
  */


// a somimi toq son bolasa rostlikka tekshiring
/*
let a =prompt("son miiriting!")
 var MusbatTrue = (a)=>{
  if (!a%2==0){
    return true;
  }
  else{
    return false;
  }
 };
console.log( MusbatTrue(a));
*/
// a somimi juft son bolasa rostlikka tekshiring
/*
let a =prompt("son miiriting!")
 var MusbatTrue = (a)=>{
  if (a%2==0){
    return true;
  }
  else{
    return false;
  }
 };
console.log( MusbatTrue(a));
*/
// ikkt son  musbat son bolasa rostlikka tekshiring
/*
let a =prompt("A son kiiriting!");
let b =prompt("B son kiiriting!");
 var TwoMusbatTrue = (a,b)=>{
  if (a>0 &&b>0){
    return true;
  }
  else if (a>0 && b<0 || b>0 &&a<0){
    return false;
  }
 };
console.log(TwoMusbatTrue(a,b));
*/

// 3ta sonni a b dan kkatta b c dan katta
/*
let a =prompt("A son kiiriting!");
let b =prompt("B son kiiriting!");
let c =prompt("c son kiiriting!");

var AvsBvsC =function(a,b,c){
  if ((a>b && a>c) && (b>c && b<a)){
 
    return "A kotta B va C dan, B kotta C dan!"
  }
  else {
    return "Katta emas!"
  }
};
console.log( AvsBvsC(a,b,c));
*/


//B soni A va C sonar orasida yotadi
/*
let a =prompt("A son kiiriting!");
let b =prompt("B son kiiriting!");
let c =prompt("c son kiiriting!");
var AvsBvsC =function(a,b,c){
  if ((b < a && b > c)||(b> a && b<c)){
 
    return "yotadi!"
  }
  else {
    return "Yotmaydi!"
  }
};
console.log( AvsBvsC(a,b,c));
*/


// toq songa tekshirish
/*
let a=prompt("a son:");
let b=prompt("b son:");

function toqson(a,b){
   if (a%2!==0 && b%2!==0 || (a%2==0 && a%2!==0 || a%2!==0 && b%2==0)){
    return "Toq"
  }
};
console.log(toqson(a,b));
*/

//Musbatga tekshirish a,b,c,d
/*
let a=prompt("a son:");
let b=prompt("b son:");
let c=prompt("c son:");
let d=prompt("d son:");
function toqson(a,b){
  if (a>0 && b>0 && c>0 && d>0){
   return "Musbat";
 }
 else{
  return "Manfiy";
 }
};
console.log(toqson(a,b));
*/
// a, b, c, sonlari berilgan, ichidan ikktasini busbat bosin
/*
let a=prompt("a son:");
let b=prompt("b son:");
let c=prompt("c son:");
var musbatTwoInTree = function(a,b,c){
  if (a>0 &&b>0 || b>0 && c>0 || c>0 && a>0){
    return "ikktasi busbat!"
  }
  else{
    return "musbat emas, yoki ikktasi musbat!"
  }
};
console.log(musbatTwoInTree(a,b,c));
*/
// hafta kunlari
/*
let a = prompt("hafta kuni!:");
function haftakuni(raqam){
  switch(raqam){
    case "1": 
    day= "Dushanba";
    break;
    case "2": 
    day = "Seshanba";
    break;
    case "3": 
    day = "Chorshanba";
    break;
    case "4": 1
    day = "Payshanba";
    break;
    case "5": 
    day = "Juma";
    break;
    case "6": 
    day = "Shanba";
    break;
    case "7": 
    day = "Yakshanba";
    break;
    default : 
    console.log("sorry!");
  }
}
(haftakuni(a));
*/

// tel raqami orqali qaysi kampaniya ekanligini tekshirishle 
/*
let number = prompt("tel raqamini kiriting!");
function numberChecked(number){
   const numStar =number.slice(0, 6);
    if (numStar ==+99899 && numStar == +99895 ){
      return "Uzmobeile!";
    }
    else if (numStar ==+99893 && numStar == +99893 ){
      return "Ucell!";
    }
    else if (numStar ==+99890 && numStar == +99891){
      return "Belline";
    }
    else if (numStar ==+99897 && numStar == +99888){
      return "UMS!";
    }
    else if (numStar ==+99833){
      return "HUMANS!";
    }
    else if (numStar==+99871){
      return "Uy telefoni!";
    }
    else{
      return "xatolik yuz berdi!";
    }
  
}; console.log(numberChecked(number));
*/

// agar musbat son bols sonni bittaga oshir
/*
let a =prompt("son kiriting");
function musbatSon(a){
  if (a >0){
    a++;
    return a;
 }
 else {
  return "mubatmas!"
 }
}; console.log( musbatSon(a));
*/

//agr son musbat bolsa son 3ta ga manfiy bolas ikktaga kamaysin
/*
let a =prompt("son kiriting");
function musbatSon(a){
  if (a > 0){
    a++;
    a++;
    a++;
    return a;
 }
 else {
  a--;
  a--;
  return a;
 }
}; console.log( musbatSon(a));
 */
// ikkta sonni eng katt sonni aniqash 
/*
let a =prompt("a son kiriting");
let b =prompt("b son kiriting");
function maxNumber ( a,b ){
  if (a>b){
    return "A soni katta !";
  }
  else {
    return "B soni katta!"
  }
}; maxNumber(a,b)*/


//uchta sonni eng kichigini aniqash
/*
let a =prompt("a son kiriting");
let b =prompt("b son kiriting");
let c =prompt("c son kiriting");
function maxNumber ( a,b,c ){
  let maxNumber=(Math.max(a, Math.max(b,c)));
  return maxNumber;
  
}; console.log(maxNumber(a,b,c));
*/

//uchta sonni engkattasini aniqlash 
/*
let a =prompt("a son kiriting");
let b =prompt("b son kiriting");
let c =prompt("c son kiriting");
function minNumber ( a,b,c ){
  let minNumber=(Math.min(a, Math.min(b,c)));
  return minNumber;
  
}; console.log(minNumber(a,b,c));
*/