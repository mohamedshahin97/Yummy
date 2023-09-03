// ? =============> Global ===============>
const inputs = document.querySelectorAll('input')
const submitBtn = document.getElementById('submitBtn');
const formInputs = document.querySelector('form');
let isValid =false;
let nameIsValid = false;
let emailIsValid = false;
let phoneIsValid = false;
let ageIsValid = false;
let passIsValid = false;
let rePassIsValid = false;





// * =============> Events ===============>


$('.openIcon').click(function () {
    if ($('.sideBar').css('left') == '0px') {
        let wBox = $('.box').innerWidth();
        // console.log(wBox);
        $('.sideBar').animate({ left: `-${wBox}px` }, 800);
        $('.openIcon i').removeClass('fa-x');
        // fa-solid open-close-icon fa-2x fa-x
    } else {
        $('.sideBar').animate({ left: `0px` }, 800);
        $('.openIcon i').addClass('fa-x');
        linksAnimationShow();
    }
})


$('#Home').click(function() {  
    location.href = './index.html'
})

$('#Search').click(function() {  
    location.href = './search.html'
})

$('#Categories').click(function() {  
    location.href = './categories.html'
})

$('#Area').click(function() {  
    location.href = './area.html'
})

$('#Ingredients').click(function() {  
    location.href = './ingredients.html'
})

formInputs.addEventListener('submit', function (e) {

    e.preventDefault();

    if (isValid) {
        location.href = './index.html'
    }

})

formInputs.addEventListener('input',function() {
    if (nameIsValid && emailIsValid && phoneIsValid && ageIsValid && passIsValid && rePassIsValid) {
        submitBtn.removeAttribute('disabled');
        console.log('All Ok');
        isValid =true;
    } else {
        submitBtn.setAttribute('disabled','disabled');
        isValid =false;
    }
})

inputs[0].addEventListener('input',function() { 
    validationName(inputs[0]); 
})

inputs[1].addEventListener('input',function() { 
    validationEmail(); 
})

inputs[2].addEventListener('input',function() { 
    validationPhone(); 
})

inputs[3].addEventListener('input',function() { 
    validationAge(); 
})

inputs[4].addEventListener('input',function() { 
    validationPassword(); 
})

inputs[5].addEventListener('input',function() { 
    validationRePassword(); 
})

// ! =============> Functions ===============>






//  =============> Validation ===============>

function validationName (input) {

    const regexStyle = /^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){3,14}$/

    if(regexStyle.test(input.value)){
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        document.getElementById('nameAlert').classList.add('d-none');
        nameIsValid = true;
        return true;
    } else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        document.getElementById('nameAlert').classList.remove('d-none');
        nameIsValid = false;
        return false;
    }
}

function validationEmail () {

    const regexStyle = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

    if(regexStyle.test(inputs[1].value)){
        inputs[1].classList.remove('is-invalid');
        inputs[1].classList.add('is-valid');
        document.getElementById('emailAlert').classList.add('d-none');
        emailIsValid = true;
        return true;
    } else {
        inputs[1].classList.remove('is-valid');
        inputs[1].classList.add('is-invalid');
        document.getElementById('emailAlert').classList.remove('d-none');
        emailIsValid = false;
        return false;
    }
}

function validationPhone () {

    const regexStyle = /^01[0125][0-9]{8}$/

    if(regexStyle.test(inputs[2].value)){
        inputs[2].classList.remove('is-invalid');
        inputs[2].classList.add('is-valid');
        document.getElementById('phoneAlert').classList.add('d-none');
        phoneIsValid = true;
        return true;
    } else {
        inputs[2].classList.remove('is-valid');
        inputs[2].classList.add('is-invalid');
        document.getElementById('phoneAlert').classList.remove('d-none');
        phoneIsValid = false;
        return false;
    }
}

function validationAge() {

    const regexStyle = /^[1-7][0-9]|80$/

    if(regexStyle.test(inputs[3].value)){
        inputs[3].classList.remove('is-invalid');
        inputs[3].classList.add('is-valid');
        document.getElementById('ageAlert').classList.add('d-none');
        ageIsValid = true;
        return true;
    } else {
        inputs[3].classList.remove('is-valid');
        inputs[3].classList.add('is-invalid');
        document.getElementById('ageAlert').classList.remove('d-none');
        ageIsValid = false;
        return false;
    }
}

function validationPassword () {

    const regexStyle = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    if(regexStyle.test(inputs[4].value)){
        inputs[4].classList.remove('is-invalid');
        inputs[4].classList.add('is-valid');
        document.getElementById('passAlert').classList.add('d-none');
        passIsValid = true;
        return true;
    } else {
        inputs[4].classList.remove('is-valid');
        inputs[4].classList.add('is-invalid');
        document.getElementById('passAlert').classList.remove('d-none');
        passIsValid = false;
        return false;
    }
}

function validationRePassword() {

    const regexStyle = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    if(regexStyle.test(inputs[4].value) && inputs[5].value === inputs[4].value){
        inputs[5].classList.remove('is-invalid');
        inputs[5].classList.add('is-valid');
        document.getElementById('rePassAlert').classList.add('d-none');
        rePassIsValid = true;
        return true;
    } else {
        inputs[5].classList.remove('is-valid');
        inputs[5].classList.add('is-invalid');
        document.getElementById('rePassAlert').classList.remove('d-none');
        rePassIsValid = false;
        return false;
    }
}

function linksAnimationShow() {  
    $('.sideBarLinks').addClass('animate__animated animate__fadeInBottomLeft animate__delay-0.9s');
}