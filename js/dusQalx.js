let y=3;
function dusQalx(){
    if(y<71) y++;
    if(y==71) y=3;
    topp.style.top=`${y}%`;
}
setInterval(dusQalx,15);

function asagiyaCek(){
    // targ.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const bura=document.getElementById('bura');
    window.scrollTo({
        top: bura.offsetTop-88.8,
        behavior: "smooth"
    })
}