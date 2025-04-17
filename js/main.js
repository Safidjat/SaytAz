const error = document.getElementById('error');
const loading = document.getElementById('loading');
const domenDaxil = document.getElementById('domenDaxil');
const oyan = document.getElementById('oyan');
const domenler = document.getElementById('domenler');
const mainValue = document.getElementById('mainValue');
const dom1 = document.getElementById('dom1');
const dom2 = document.getElementById('dom2');
const dom3 = document.getElementById('dom3');
const dom4 = document.getElementById('dom4');
const dom5 = document.getElementById('dom5');
const dom6 = document.getElementById('dom6');
const bos = document.getElementById('bos');
const ay = document.getElementById('ay');
const il = document.getElementById('il');
const bgP = document.getElementById('bgP');


const domenData = ['.az', '.com', '.net', '.info', '.biz', '.org', '.us', '.in', '.ws', '.mobi', '.tv', '.me', '.ru', '.de', '.com.az', '.co', '.site.az', '.sayt.az', '.ureb.com', '.org.az', '.info.az', '.biz.az', '.net.az'];
const liler = document.querySelectorAll('#domenler li');


function yoxla() {
    error.innerHTML = '';
    loading.innerHTML = `<div class="w-6 h-6 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>`;
    setTimeout(function () {
        error.innerHTML = 'Sifariş kodu səhvdir';
        loading.innerHTML = 'İzlə';
    }, 3000)
}

function checkDomen() {
    oyan.innerHTML = '';
    let text = domenDaxil.value;
    if (text.length < 3) {
        oyan.innerHTML += '*Domen adının uzunluğu ən az 3 olmalıdır';
    }
    if (text.length == 0) oyan.innerHTML = '';
    if (text.includes(' ')) {
        oyan.innerHTML = '*Domen adı düzgün deyil.Domen adında yalnız hərf,rəqəm və "-" işarəsi ola bilər';
    }
    domenler.classList.remove('dispBl');
}

function domenleriDoldurUlede() {
    let kod = '';
    domenData.forEach(item => kod += `<li onclick="meniSec(this)">${item}</li>`);
    domenler.innerHTML = kod;
}
domenleriDoldurUlede();

function domenleriAcBagla() {
    domenler.classList.toggle('dispBl');
    backGr();
}
function backGr() {
    const liler = document.querySelectorAll('#domenler li');
    liler.forEach(item => {
        if (item.innerHTML == mainValue.innerHTML) {
            item.style.backgroundColor = '#9266da';
            item.style.color = '#fff';
        }
        else {
            item.style.backgroundColor = 'initial';
            item.style.color = 'initial';
        }
    })
}
function meniSec(li) {
    mainValue.innerHTML = li.innerHTML;
    backGr();
}
function axtar() {
    if (domenDaxil.value) {
        let text = domenDaxil.value;
        let domain = mainValue.innerHTML;
        bos.innerHTML = `
            <div class="h-[50vh] bg-white flex items-center justify-center">
                <div class="text-center flex flex-col gap-[15px] font-[Manrope]">
                    <h1 class="font-[400] text-[36px]"><span class="text-[#22c55e] font-[600]">${text}</span> <span class="text-[#334155]">${domain}</span></h1>
                    <h4 class="text-[#334155] font-[700] ">Qiymət: ₼40</h4>
                    <p class="text-[#64748b]">Domen Almaq üçün Asağıdaki Düyməni basın</p>
                    <button class="font-[500] cursor-pointer  bg-white border-[#22c55e] border-[3px] rounded-[8px] text-[#22c55e] hover:text-white hover:bg-[#22c55e] py-[15px] px-[20px] ">Almaq üçün klikləyin</button>
                </div>
            </div>
        `;
    }
    else oyan.innerHTML = 'Xananı doldurmamısız';
    // bos.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.scrollTo({
        top: bos.offsetTop - 88.8,
        behavior: "smooth"
    })
}

const qiymetler = [5, 10, 20];
function ayIlDeyis(esas, lazimsiz, status) {
    esas.style.backgroundColor = '#a271f2';
    lazimsiz.style.backgroundColor = '#fff';
    esas.querySelector(`p`).style.color = '#fff';
    lazimsiz.querySelector(`p`).style.color = '#94a3b8';

    if (status) {
        document.getElementById('art1').innerText = `₼${qiymetler[0] * 12} `;
        document.getElementById('yandaki1').innerText = '/il';
        document.getElementById('art2').innerText = `₼${qiymetler[1] * 12} `;
        document.getElementById('yandaki2').innerText = '/il';
        document.getElementById('art3').innerText = `₼${qiymetler[2] * 12} `;
        document.getElementById('yandaki3').innerText = '/il';
    }
    else {
        document.getElementById('art1').innerText = `₼${qiymetler[0]} `;
        document.getElementById('yandaki1').innerText = '/ay';
        document.getElementById('art2').innerText = `₼${qiymetler[0]} `;
        document.getElementById('yandaki2').innerText = '/ay';
        document.getElementById('art3').innerText = `₼${qiymetler[0]} `;
        document.getElementById('yandaki3').innerText = '/ay';

    }
}

let activeArticle = null;
function secilmisArticle(article) {
    const articles = Array.from(document.getElementById('arts').querySelectorAll('article'));
    if (activeArticle) {
        activeArticle.classList.add('shadow-[#0000001a]', 'hover:outline-[3px]', 'hover:outline-[#9128e4]');
        activeArticle.classList.remove('outline-[#9128e4]', 'outline-[3px]', 'shadow-[#9128e480]');
        activeArticle.querySelector('button').classList.add('bg-[#a271f2]', 'text-white', 'hover:bg-white', 'hover:text-[#a271f2]');
        activeArticle.querySelector('button').classList.remove('bg-white', 'text-[#a271f2]', 'hover:bg-[#a271f2]', 'hover:text-white');

    }

    article.classList.add('shadow-[#9128e480]', 'outline-[3px]', 'outline-[#9128e4]');
    article.classList.remove('shadow-[#0000001a]', 'hover:outline-[3px]', 'hover:outline-[#9128e4]');
    article.querySelector('button').classList.add('bg-white', 'text-[#a271f2]', 'hover:bg-[#a271f2]', 'hover:text-white');
    article.querySelector('button').classList.remove('bg-[#a271f2]', 'text-white', 'hover:bg-white', 'hover:text-[#a271f2]');

    activeArticle = article;
    if (article != articles[1]) {
        articles[1].classList.add('shadow-[#0000001a]', 'hover:outline-[3px]', 'hover:outline-[#9128e4]');
        articles[1].classList.remove('outline-[#9128e4]', 'outline-[3px]', 'shadow-[#9128e480]');
        articles[1].querySelector('button').classList.add('bg-[#a271f2]', 'text-white', 'hover:bg-white', 'hover:text-[#a271f2]');
        articles[1].querySelector('button').classList.remove('bg-white', 'text-[#a271f2]', 'hover:bg-[#a271f2]', 'hover:text-white');
    }
}
const textsArr=['Sayt.az 2004-cü ildən fəaliyyətə başlamışdır. 2004-2016 -ci illərərzində Azərbaycan bazarında bir çox ilklərə imza atmışdır.',
                'Futbol nəticələrinin canlı təqdim edilməsi',
                'Wisher.az xüsusi günləri xatırlamaq va qeyd etmək üçün şəxsi köməkçinizdir.',
                'Para göndər & qəbul et,NFT AI & SAT,Ağıllı müqavilələr hazırla,Birja,Ödənişlər',
                'kredit.az saytı ümumi bankların kredit faizləri haqqında məlumatları bir arayatoplayacaq',
                'Telefonların online alışı və satışı'
                ];
function clampText(){
    let fontsize = $(window).width() >= 336 ? 10 : 5;
    const arr=Array.from(document.querySelectorAll('.jsClamp'));
    arr.forEach((item,ind)=>{
        let text=textsArr[ind];
        let symbolNum=textsArr[ind].length;
        let acceptableSymbolNum=Math.round(item.offsetWidth/fontsize);
        if(symbolNum>2*acceptableSymbolNum){
            item.innerText=text.slice(0,2*acceptableSymbolNum)+'...';
        }
    })
    
}
$(window).resize(clampText);
clampText();

function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomArticles() {
    const allArts = Array.from(document.querySelectorAll('.jsArt'));
    const qarisdir = allArts.sort(() => Math.random() - 0.5);
    allArts.forEach(item => (item.style.display = 'none'));
    qarisdir.slice(0, 3).forEach(item => (item.style.display = 'flex'));
}
randomArticles()




let data = [];
let texts = ['BIOPHYSICS.AZ', 'UREB.COM', 'UG.NEWS', 'FOOTBALL.BIZ', 'WISHER.AZ', 'IMEXCOMMODITIES.COM', 'AZFENTTQ.AZ', 'NOTEHUB.AZ', 'AZEHOLiDAYS.COM', 'ViPCONSULTiNG.AZ', 'ZEMED.AZ', 'ESCO.AZ', 'CASPiLiMO.COM', 'BAYMAK.AZ', 'SELJANNOVRUZLU.COM', 'QARMON.AZ', 'NAFTALANSANATORIYA.COM', 'DOCFARHAD.AZ', 'HEDEFINSAAT.COM', 'BAHMANAHMADLi.COM', 'TOVUZAQROKOMPLEKS.COM', 'METBUAT.AZ', 'AGROKiMYA.AZ', 'AZERBAiJANJOURNALiSTS.AZ', 'PLANNiNG.AZ', 'WWW.ART-TRiO.AZ'];
let images = texts.map((item, ind) => `./img/${ind}.png`)
images.forEach((item, ind) => {
    data.push({
        image: item,
        yazi: `${texts[ind]}`
    })
})
let say = 1;
buttoniRengle(say);
function buttonSec(req) {
    say = req;
    buttoniRengle(say)
    diviDoldur(say)
    window.scrollTo({
        top: document.getElementById('bura2').offsetTop - 88.8,
        behavior: "smooth"
    })
}
function buttoniRengle(index) {
    const buts = Array.from(document.querySelectorAll('.jsNameBut'));
    buts.forEach(item => {
        item.classList.add('text-[#94a3b8]');
        item.classList.remove('bg-[#a271f2]', 'text-white')
    })
    buts[index].classList.add('bg-[#a271f2]', 'text-white');
    buts[index].classList.remove('text-[#94a3b8]');
}
function sayiDeyis(i) {
    say += i;
    if (say > 5) say = 1;
    if (say < 1) say = 5;
    buttoniRengle(say);
    diviDoldur(say)
    window.scrollTo({
        top: document.getElementById('bura2').offsetTop - 88.8,
        behavior: "smooth"
    })
}
diviDoldur(say)
function diviDoldur(say) {
    let copy;
    let count = (say - 1) * 6;
    if (data.length < count + 6) copy = data.slice(count);
    copy = data.slice(count, count + 6);
    bgP.innerHTML = '';
    copy.map(item => {
        bgP.innerHTML += `
        <article class="w-full row:w-[calc(50%-20px)] max-smallest2:p-[10px] p-[24px] bg-[#faf4ff] border-[2px] rounded-[30px] border-[#e4d7fd]">
                        <div class="w-full rounded-[15px] overflow-hidden">
                            <img class="w-full h-[200px] object-fill"  src="${item.image}" >
                        </div>
                        <h1 class="text-[#300b60] text-[20px] font-[600] pt-[24px]">${item.yazi}</h1>
        </article>
    `;
    })

}

