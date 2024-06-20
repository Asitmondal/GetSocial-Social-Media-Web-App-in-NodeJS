const ball = document.querySelectorAll(".ball");
ball.forEach(b=>b.addEventListener('click',()=>{
    b.classList.toggle('hack')
}));

const cards = document.querySelectorAll('.card');
cards.forEach(c=>c.addEventListener('click', ()=>{
    let count = c.querySelector('.price').textContent;
    count = Number(count)+1;
    c.querySelector(".price").textContent = count;
}))

const dec = document.querySelector(".decrease");
dec.addEventListener("click",()=>{
    let co1 = Number(cards[0].querySelector(".price").textContent);
    let co2 = Number(cards[1].querySelector(".price").textContent);

    cards[0].querySelector('.price').textContent = co1>0?co1- 1:co1;
    cards[1].querySelector(".price").textContent = co2 > 0 ? co2 - 1 : co2;

})