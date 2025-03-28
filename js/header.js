const sideBar=document.getElementById('sideBar');
const currency1=document.getElementById('currency1');
const flags1=document.getElementById('flags1');
const rotate1=document.getElementById('rotate1');
const rotate2=document.getElementById('rotate2');
const currency11=document.getElementById('currency11');
const flags11=document.getElementById('flags11');
const rotate11=document.getElementById('rotate11');
const rotate22=document.getElementById('rotate22');
const imgAna1=document.getElementById('imgAna1');
const imgLi1=document.getElementById('imgLi1');
const imgLi2=document.getElementById('imgLi2');
const imgAna2=document.getElementById('imgAna2');
const imgLi11=document.getElementById('imgLi11');
const imgLi22=document.getElementById('imgLi22');
const valAna1=document.getElementById('valAna1');
const valAna2=document.getElementById('valAna2');
const val1=document.getElementById('val1');
const val2=document.getElementById('val2');
const val11=document.getElementById('val11');
const val22=document.getElementById('val22');
const bayr1=document.getElementById('bayr1');
const bayr2=document.getElementById('bayr2');
const bayr11=document.getElementById('bayr11');
const bayr22=document.getElementById('bayr22');
const ul1=document.getElementById('ul1');
const ul2=document.getElementById('ul2');
const ul3=document.getElementById('ul3');
const ul4=document.getElementById('ul4');
const ul5=document.getElementById('ul5');
const targ=document.getElementById('targ');
const ulArr1=[ul1,ul2,ul3,ul4,ul5];
const ulArr2=Array.from(document.querySelectorAll('.ulNav'))
const topp=document.getElementById('topp');


function sideBariAc(){
    sideBar.style.right='0';
}
function sideBariBagla(){
    sideBar.style.right='-1000px';
}
function daha(first,sec,rotateF,rotateS,ana,usaq1,usaq2){
    first.classList.toggle('dispBl');
    if(first.classList.contains('dispBl')) first.status=true;
    else first.status=false;

    first.status? sec.status=false: '';
    checkTheOther(sec,rotateS);
    checkYourself(first,rotateF);
    bgState(ana,usaq1,usaq2);
}
function checkTheOther(ul,angle){
    ul.status? ul.classList.add('dispBl') : ul.classList.remove('dispBl');
    angle.style.color='#e3e1e1';
    angle.style.transform="rotate(0deg)";
}
function checkYourself(ul,angle){
    if(ul.status){
        angle.style.color='#999999';
        angle.style.transform="rotate(180deg)";
    }
    else{
        angle.style.color='#e3e1e1';
        angle.style.transform="rotate(0deg)";
    }
}
function deyisSekil(ana,usaq1,usaq2){
    ana.src=usaq1.src;
    bgState(ana,usaq1,usaq2);
}
function deyisValyuta(ana,usaq1,usaq2){
    ana.innerHTML=usaq1.innerHTML;
    bgState(ana,usaq1,usaq2);
}
function bgState(ana,usaq1,usaq2){
    if(ana.src==usaq1.src||ana.innerHTML==usaq1.innerHTML){ usaq1.state=true; usaq2.state=false;}
    else {usaq1.state=false;usaq2.state=true;}
    if(usaq1.state){
        usaq1.style.backgroundColor='#f1e8ff';
        usaq2.style.backgroundColor='white';
    }
    else{ usaq1.style.backgroundColor='white';usaq2.style.backgroundColor='#f1e8ff';}
}

function etrafli(list){
    list.classList.toggle('dispBl');
    ulArr1.filter(item=>item!==list).forEach(item=>item.classList.remove('dispBl'));
    ulArr2.filter(item=>item!==list).forEach(item=>item.classList.remove('dispBl'));
}


