//alert("this is first interaction!");
var kisiadi="oguz";
var dogumyili=1990;
console.log("adiniz:"+kisiadi);
console.log("dogum yiliniz:"+dogumyili);
console.log('Yasiniz:'+(2022-dogumyili));
console.log(`Merhaba ${kisiadi}, siz ${2022-dogumyili} yaşındasınız`);
//kişiye ait 2 sınav notunun ortamalamasını hesaplayıp ekrana yazan uygulamayı yapın. 

//Ctrl+k+c ctrl+k+u
// var not1=+prompt("birinci notu girin:");
// var not2=+prompt("ikinci notu girin:");
// var sayi=120;
// console.log(`ortalaması ${(parseInt(not1)+parseInt(not2))/2} dir ${sayi.toString()}`);

// var ortalama=not1*0.4+not2*0.6;

// //geçti yada kaldı.. 
// if(ortalama>=50) //< > >= <= 
// {
//     console.log("tebrikler geçtiniz");
// }
// else
// {
//     console.log("kaldınız");
// }


// var yenisayi=prompt("sayi gir:");
// if (yenisayi>0)
// {
//     console.log("sayi pozitif");
// }
// else 
// if(yenisayi<0) 
// {
//     console.log("sayi negatif");
// }
// else
// {
//     console.log("sayi sıfırdır");
// }


//kullanıcının girdiği sayı negatif mi pozitif mi sıfır mı? 

//kişinin bir "bakiye" miktarında parası vardır, tanesi 10 lira olan biletlerden kullanıcı tarafından girilen "adet" kadar almak istiyor.
//eğer kişinin bakiyesi yeterliyse biletlerin ederi bakiyeden düşük kullanıcıya işlem hakkında bilgi veriliyor.
//eğer bakiye yeterli değilse işlem yapılmıyor, kullanıcının ne kadar parasının daha olması gerektiği söyleniyor. 

//
var biletfiyat=10;
var discount=0.1;
var kullanicituru="normal";//students 0.2, yasli 0.3
// if(kullanicituru=="normal")
// {
//     discount=0;
// }
// else
// kullanicituru=prompt("indirim türü giriniz:");
// switch(kullanicituru)
// {
//     default:
//     case "standart":
//     case "indirimsiz":
//     case "normal":
//         discount=0;
//         break;
//     case "student":
//         discount=0.2;
//         break;
//     case "yasli":
//         discount=0.3;
//         break;
// }
// console.log("bilet fiyatı:"+biletfiyat*(1-discount));


// var kardesler=[4,46,6,12,16];
// kardesler[5]=20;
// console.log("ilk kardesin yaşı: "+kardesler[0]);
// console.log("son kardesin yaşı: "+kardesler[5]);

// for(var i=0;i<20;i++)
// {
//      console.log("merhaba dünya");
// }
// //1den 10 a kadar olan sayıların toplamını bulan programı yazıınız/ ortamasını bulun. 

// var toplam=0;
// var kacakadar=10
// for (var i=1;i<=kacakadar;i++)
// {
//     toplam=toplam+i;
//     console.log(i);
// }
// console.log(`sayilarin toplamı ${toplam}, ortalaması ${toplam/kacakadar} dir`);

// //kullanıcı tarafından girilen sayının faktöriyelini bulan programı yazınız, 5 -> 1*2*3*4*5= 120

// var faktoriyel=prompt("sayı girin: ");
// var sonuc=1;
// for (var i=1;i<=faktoriyel;i++)
// {
//     var icdeger=10;
//     sonuc=sonuc*i;
// }
// console.log("ic değer:"+icdeger);
// //1*1 = 1   1*2= 2    2*3= 6   6*4=24 24*5= 120 
// console.log(`${faktoriyel} sayısının faktöriyeli ${sonuc} dur`);

// //girilen sayının tam bölenlerini ekrana yazdıran programı yazınız!
// //5%2 1 
// //let-> sabit değişken türü, daha az esnek, ve alt scopta tanımlanan üstte ulaşılamıyor 
// //var-> farklı veri türlerine dönüşümü daha esnek, üst skoplardan erişilebiliyor
// //const-> içeriğindeki değer değiştirlemez
// //const faiz=1.15;


// for (let i=0;i<faktoriyel;i++)
// {
//     if(faktoriyel%i==0) console.log(`${i} ${faktoriyel}in tam bölenidir`);
// }

// //kullanıcı 0 girene kadar bütün sayıların toplamını bulalım..

// var toplam=0;
// var sayi=1;
// while (sayi!=0)
// {
//     sayi=prompt("bir sayı girin");
//     toplam=toplam+sayi;
// }
// console.log("toplamı: "+toplam);


//kardesler arrayindeki yaş ortalamasını bulalım.. 

var kardesler=[4,46,6,12,16];
kardesler[5]=20;
console.log("ilk kardesin yaşı: "+kardesler[0]);
console.log("son kardesin yaşı: "+kardesler[5]);


//for döngüsüyle
var toplam=0;
for (var i=0;i<kardesler.length;i++)
{
    toplam=toplam+kardesler[i];
}
console.log("kardeslerin yas ortalaması= "+ toplam/(kardesler.length));

//array elemanları için özel döngü: forEach
kardesler.forEach(function(kardes,no){
    console.log(kardes);
    console.log(no);
});

// bilet
// 5 kişi için bilet almak.. 
//biletkisi1="ali";
//biletyas1=25;
//bilettur1="ogrenci"

//OBJECT 
var kisi1={adi:"ali",yasi:25,turu:"ogrenci"};
var kisi2={adi:"veli",yasi:30,turu:"normal"};
var kisi3={adi:"Ayse",yasi:65,turu:"yasli"};

var kisiler=new Array();
kisiler.push(kisi1);
kisiler.push(kisi2);
kisiler.push(kisi3);

var toplam=0;
kisiler.forEach(function(kisi,sira){
    console.log(`${kisi.adi} kişisinin yaşı ${kisi.yasi} türü ise ${kisi.turu} dür `);
    toplam=toplam+kisi.yasi;
} );
console.log(`ortalama yaş ${toplam/kisiler.length} olarak bulundu.`);


