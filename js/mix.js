const mixSetDiv = document.getElementById('mixSet');
const totalPrice = document.getElementById('totalPrice');
const generateBtn = document.getElementById('generateSet');

const products = [
    {name:'Cipő 1', category:'cipo', price:25000, sale: true, SaleAmount:'-50%', img: 'images/cipo1.png'},
    {name:'Cipő 2', category:'cipo', price:30000, sale: false, img:'images/cipo2.jpg'},
    {name:'Cipő 3', category:'cipo', price:35000, sale: true, SaleAmount:'-10%', img:'images/cipo3.webp'},
    {name:'Cipő 4', category:'cipo', price:40000, sale: false, img:'images/cipo4.webp'},
    {name:'Nadrág 1', category:'nadrag', price:25000, sale: true, SaleAmount:'-25%', img:'images/nadrag1.webp'},
    {name:'Nadrág 2', category:'nadrag', price:30000, sale: false, img:'images/nadrag2.webp'},
    {name:'Nadrág 3', category:'nadrag', price:35000, sale: false, img:'images/nadrag3.webp'},
    {name:'Nadrág 4', category:'nadrag', price:40000, sale: false, img:'images/nadrag4.webp'},
    {name:'Póló 1', category:'polo', price:25000, sale: true, SaleAmount:'-50%', img:'images/polo1.webp'},
    {name:'Póló 2', category:'polo', price:30000, sale: false, img:'images/polo2.webp'},
    {name:'Póló 3', category:'polo', price:35000, sale: true, SaleAmount:'-20%', img:'images/polo3.webp'},
    {name:'Póló 4', category:'polo', price:40000, sale: false, img:'images/polo4.webp'},
];


function generateSet(){
    mixSetDiv.innerHTML = '';
    
    const cipok = [];
    const nadragok = [];
    const polok = [];

    for(let i = 0; i<products.length; i++){
        if(products[i].category === 'cipo' ){
            cipok.push(products[i]);
        }
        if(products[i].category === 'nadrag' ){
            nadragok.push(products[i]);
        }
        if(products[i].category === 'polo' ){
            polok.push(products[i]);
        }
    }
    
    const cipochoice = cipok[Math.floor(Math.random()*cipok.length)];
    const nadragchoice = nadragok[Math.floor(Math.random()*nadragok.length)];
    const polochoice = polok[Math.floor(Math.random()*polok.length)];

    const total = cipochoice.price + nadragchoice.price + polochoice.price;
    totalPrice.innerText = 'Végösszeg: '+total+' Ft';

    const cipodiv = document.createElement('div');
    cipodiv.classList.add('product');
    cipodiv.innerHTML = `
        ${cipochoice.sale ? `<div class="sale-badge">${cipochoice.SaleAmount}</div>`:''}
        <img src="${cipochoice.img}" alt="${cipochoice.name}">
        <p>${cipochoice.name}<br>${cipochoice.price} Ft</p>
    `;
    mixSetDiv.appendChild(cipodiv);
    
    const nadragdiv = document.createElement('div');
    nadragdiv.classList.add('product');
    nadragdiv.innerHTML = `
        ${nadragchoice.sale ? `<div class="sale-badge">${nadragchoice.SaleAmount}</div>`:''}
        <img src="${nadragchoice.img}" alt="${nadragchoice.name}">
        <p>${nadragchoice.name}<br>${nadragchoice.price} Ft</p>
    `;
    mixSetDiv.appendChild(nadragdiv);

    const polodiv = document.createElement('div');
    polodiv.classList.add('product');
    polodiv.innerHTML = `
        ${polochoice.sale ? `<div class="sale-badge">${polochoice.SaleAmount}</div>`:''}
        <img src="${polochoice.img}" alt="${polochoice.name}">
        <p>${polochoice.name}<br>${polochoice.price} Ft</p>
    `;
    mixSetDiv.appendChild(polodiv);
}

generateBtn.addEventListener('click', generateSet);
generateSet();