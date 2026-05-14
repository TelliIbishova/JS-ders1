let numb = "10";
let numb1 = "20";

let sum = Number(numb) + Number(numb1);
console.log(sum);



let mehsulAdi = "Telefon";
let mehsulQiymeti = "1000";
let endirimFaizi = "20";
let stokdaVarmi = true;
let endirimliQiymet = mehsulQiymeti - (mehsulQiymeti * endirimFaizi / 100);
console.log("Məhsul: " + mehsulAdi + " , " + "Endirimli Qiymət: " + endirimliQiymet + " AZN ");
console.log(mehsulQiymeti > 50 && stokdaVarmi);