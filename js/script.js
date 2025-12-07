const contactForm = document.getElementById('contactForm');
if(contactForm){
    contactForm.addEventListener('submit', function(e){
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const message = document.getElementById('message');
        const subject = document.getElementById('subject');

        const errorname = document.getElementById('error-name');
        const errormail = document.getElementById('error-mail');
        const errortel = document.getElementById('error-tel');
        const errormsg = document.getElementById('error-msg');
        const errorsub = document.getElementById('error-sub');

        const errors = document.querySelectorAll('.error-msg');
        errors.forEach(a => a.textContent = '');
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(a => a.classList.remove('input-error'));

        let isValid = true;

        if(name.value.trim() === ''){
            name.classList.add('input-error');
            errorname.textContent = 'Adjon meg egy nevet!';
            isValid = false;
        }
        if(email.value.trim() === ''){
            email.classList.add('input-error');
            errormail.textContent = 'Adjon meg egy email címet!';
            isValid = false;
        }
        if(phone.value.trim() === ''){
            phone.classList.add('input-error');
            errortel.textContent = 'Adjon meg egy telefonszámot!';
            isValid = false;
        }
        if(message.value.trim() === ''){
            message.classList.add('input-error');
            errormsg.textContent = 'Írjon egy üzenetet!';
            isValid = false;
        }
        if(subject.value.trim() === ''){
            subject.classList.add('input-error');
            errorsub.textContent = 'Adjon meg egy tárgyat!';
            isValid = false;
        }

        if(isValid === false){
            e.preventDefault();
            console.log("Hibás bemenet");
        }
        else{
            alert("Üzenet elküldve!");
        }
    });
}


const filterForm = document.getElementById('filterForm');
if(filterForm){
    filterForm.addEventListener('submit', function(e){
        e.preventDefault();
        const products = document.querySelectorAll('.product');

        const category = document.getElementById('category').value;
        const minPrice = Number(document.getElementById('minPrice').value);
        const maxPrice = Number(document.getElementById('maxPrice').value);
        const saleOnly = document.getElementById('saleOnly').checked;

        products.forEach(p => {
            let price = Number(p.dataset.price);
            let cat = p.dataset.category;
            let sale = p.dataset.sale === "true";

            if((category !== "mind" && cat !== category) || price < minPrice || price > maxPrice || (saleOnly && !sale)){
                p.style.display = 'none';
            } else {
                p.style.display = 'grid';
            }

        });
    });
}

