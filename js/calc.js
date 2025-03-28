const sehifeSayi=document.getElementById('sehifeSayi');
const sehUmXerci=document.querySelectorAll('.sehUmXerci');
const range1=document.getElementById('range1');
const range2=document.getElementById('range2');
const range3=document.getElementById('range3');
const logoDizUmX=document.querySelectorAll('.logoDizUmX');
const elavelerX=document.querySelectorAll('.elavelerX');
const motorXerc=document.querySelectorAll('.motorXerc');
const ticaretXerc=document.querySelectorAll('.ticaretXerc');
const hamisi=document.querySelector('.hamisi');

let seyfeX=(+range1.value)*100;
let seyKeyfX=+range2.value;
//umumiler:
let statikSehifeler=(+range1.value)*100 + (+range2.value);
let logoDizXerci=(+range3.value)*100;
let elavelerUm=0;
let motorOptUm=0;
let elTicUm=0;
let umumi=0;
function sehifeSayiDeyis(inp){
    sehifeSayi.innerHTML=inp.value+' səhifə';
    seyfeX=(+inp.value)*100;
    sehUmXerciGoster();
}
function sehifeKeyfDeyis(inp){
    seyKeyfX=(+inp.value)*100;
    sehUmXerciGoster();
}
function sonucuCixart(teg,umQiy){
    teg.forEach(item=>item.innerHTML='₼ '+umQiy);
}
function hamisiniCixart(){
    umumi=elTicUm+motorOptUm+elavelerUm+logoDizXerci+statikSehifeler;
    if(umumi>=450) hamisi.innerHTML='₼ '+umumi;
    else hamisi.innerHTML='₼ '+450;
}
function sehUmXerciGoster(){
    statikSehifeler=seyfeX+seyKeyfX;
    sonucuCixart(sehUmXerci,statikSehifeler)
    hamisiniCixart()
}
function logoDizayniDeyis(inp){
    logoDizXerci=(+inp.value)*100;
    sonucuCixart(logoDizUmX,logoDizXerci)
    hamisiniCixart()
}
let data={rangeData : [
    {
        "id": 1,
        "name": "Bloq",
        "price": 200,
        "type": "website_addons"
    },
    {
        "id": 2,
        "name": "Üzv girişi /‍‍‍ Profillər",
        "price": 400,
        "type": "website_addons"
    },
    {
        "id": 3,
        "name": "Responsive",
        "price": 100,
        "type": "website_addons"
    },
    {
        "id": 4,
        "name": "Forum",
        "price": 400,
        "type": "website_addons"
    },
    {
        "id": 5,
        "name": "Mesajlaşma",
        "price": 50,
        "type": "website_addons"
    },
    {
        "id": 6,
        "name": "Canlı Söhbət",
        "price": 50,
        "type": "website_addons"
    },
    {
        "id": 7,
        "name": "Qalereya",
        "price": 100,
        "type": "website_addons"
    },
    {
        "id": 8,
        "name": "Əlaqə Forması",
        "price": 100,
        "type": "website_addons"
    },
    {
        "id": 9,
        "name": "Saytda Axtarış",
        "price": 100,
        "type": "website_addons"
    },
    {
        "id": 10,
        "name": "Xəritə Məlumatı / Geolocation",
        "price": 100,
        "type": "website_addons"
    },
    {
        "id": 11,
        "name": "Rezervasyon",
        "price": 400,
        "type": "website_addons"
    },
    {
        "id": 12,
        "name": "Sosial Media inteqrasiyası",
        "price": 50,
        "type": "website_addons"
    },
    {
        "id": 13,
        "name": "Analitika / İzləmə",
        "price": 50,
        "type": "website_addons"
    },
    {
        "id": 14,
        "name": "Admin Panel",
        "price": 300,
        "type": "website_addons"
    }
],
checkData : [
    {
        "id": 1,
        "name": "Başlıqlar & Meta",
        "price": 200,
        "type": "seo_addons"
    },
    {
        "id": 2,
        "name": "Açar söz",
        "price": 300,
        "type": "seo_addons"
    },
    {
        "id": 3,
        "name": "+20 Qabaqcıl Texnika",
        "price": 300,
        "type": "seo_addons"
    },
    {
        "id": 4,
        "name": "Başlıq Teqləri",
        "price": 100,
        "type": "seo_addons"
    },
    {
        "id": 5,
        "name": "Sitemap",
        "price": 100,
        "type": "seo_addons"
    }
],

eccomerceData : [
    {
        "id": 1,
        "name": "Ödəniş",
        "price": 200,
        "type": "ecommerce"
    },
    {
        "id": 2,
        "name": "Səbət",
        "price": 500,
        "type": "ecommerce"
    },
    {
        "id": 3,
        "name": "Məhsullar",
        "price": 300,
        "type": "ecommerce"
    },
    {
        "id": 4,
        "name": "Bəyəndiklərim",
        "price": 300,
        "type": "ecommerce"
    },
    {
        "id": 5,
        "name": "Filtr",
        "price": 300,
        "type": "ecommerce"
    },
    {
        "id": 6,
        "name": "Məhsul Haqqında",
        "price": 200,
        "type": "ecommerce"
    }
]}
function Toggle(div,ind){
    let deyisenMeb=data['rangeData'].find(item=>item.id==ind).price;
    let daire=div.querySelector('.absolute');
    if(daire.classList.contains('right-0')){
        elavelerUm-=deyisenMeb;
        daire.classList.add('left-0');
        daire.classList.add('border');
        daire.classList.remove('right-0');
        div.classList.add('bg-[#e5e7eb]');
        div.classList.remove('bg-[#a271f2]');
    }
    else{
        elavelerUm+=deyisenMeb;
        daire.classList.add('right-0');
        daire.classList.remove('left-0');
        daire.classList.remove('border');
        div.classList.add('bg-[#a271f2]');
        div.classList.remove('bg-[#e5e7eb]');
    }
    sonucuCixart(elavelerX,elavelerUm)
    hamisiniCixart()
}
function Toggle2(div,ind){
    let deyisenMeb=data['checkData'].find(item=>item.id==ind).price;
    let checkbox=div.querySelector('i');
    if(checkbox.classList.contains('hidden')){
        motorOptUm+=deyisenMeb;
        checkbox.classList.remove('hidden'); 
        checkbox.classList.add('inline'); 
        div.classList.remove('border')
        div.classList.add('bg-[#a271f2]')
    }
    else{
        motorOptUm-=deyisenMeb;
        checkbox.classList.remove('inline'); 
        checkbox.classList.add('hidden'); 
        div.classList.add('border')
        div.classList.remove('bg-[#a271f2]')

    }
    sonucuCixart(motorXerc,motorOptUm)
    hamisiniCixart()
}
//Label'la:
function Toggle3(inp,ind){
    inp.value=data['eccomerceData'].find(item=>item.id==ind).price;
    if(inp.checked==true){
        elTicUm+=+inp.value;
    }
    else{
        elTicUm-=+inp.value;
    }
    sonucuCixart(ticaretXerc,elTicUm);
    hamisiniCixart()
}

