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

const prodlist = document.getElementById('prodlist');

products.forEach(p => {
    const div = document.createElement('div');
    div.classList.add('product');
    div.dataset.category = p.category
    div.dataset.price = p.price
    div.dataset.sale = p.sale
    
    div.innerHTML = `
        ${p.sale ? `<div class="sale-badge">${p.SaleAmount}</div>`:''}
        <img src="${p.img}" alt="${p.name}">
        <p>${p.name}<br>${p.price} Ft</p>
    `;
    prodlist.appendChild(div);
});