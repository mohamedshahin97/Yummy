// ? =============> Global ================
let mealsByNameArray = [];
let mealsByFirstLetterArray = [];
let SearchByName = document.getElementById('SearchByName');
let SearchByFirstLetter = document.getElementById('SearchByFirstLetter');



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
    location.href = 'search.html';
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

$('#ContactUs').click(function() {  
    location.href = './ContactUs.html'
})

SearchByName.addEventListener('input',function(){
    getMealsByName(this.value)


})

SearchByFirstLetter.addEventListener('input',function(){
    getMealsFirstLetter(this.value)
})


// ! =============> Functions ===============>


async function getMealsByName(term) {  
    $('#loading').removeClass('d-none');

    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
    const myResponse = await api.json();
    mealsByNameArray = myResponse.meals;
    console.log(mealsByNameArray);
    $('#loading').addClass('d-none');

    displayMealsByName();
}


function displayMealsByName() {  
    let cartona = ``;

    for (let i = 0; i < mealsByNameArray.length; i++) {
        
        cartona += `<div class="col mt-4">
        <div onclick="displayMeal('${mealsByNameArray[i].idMeal}')" class="mealCard rounded-2">
            <img src="${mealsByNameArray[i].strMealThumb}" class="w-100" alt="">
            <div class="mealOverlay text-black p-2">
                <div class="text">
                    <h2>${mealsByNameArray[i].strMeal}</h2>
                </div>
            </div>
        </div>
    </div>`
        
    }

    document.getElementById('rowMealsSearch').innerHTML = cartona;
}

async function getMealsFirstLetter(term) {  
    $('#loading').show();
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`);
    const myResponse = await api.json();
    mealsByFirstLetterArray = myResponse.meals;
    console.log(mealsByFirstLetterArray);
    $('#loading').hide();
    displayMealsFirstLetter();
}


function displayMealsFirstLetter() {  
    let cartona = ``;

    for (let i = 0; i < mealsByFirstLetterArray.length; i++) {
        
        cartona += `<div class="col mt-4">
        <div onclick="displayMeal('${mealsByFirstLetterArray[i].idMeal}')" class="mealCard rounded-2">
            <img src="${mealsByFirstLetterArray[i].strMealThumb}" class="w-100" alt="">
            <div class="mealOverlay text-black p-2">
                <div class="text">
                    <h2>${mealsByFirstLetterArray[i].strMeal}</h2>
                </div>
            </div>
        </div>
    </div>`
        
    }

    document.getElementById('rowMealsSearch').innerHTML = cartona;
}

async function displayMeal(mealId) {
    $('#loading').show();
    // console.log(mealId);
    document.getElementById('inpSection').classList.add('d-none');
    document.getElementById('searchedMeal').classList.add('d-none');
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const myResponse = await api.json();
    categoryMealsArray = myResponse.meals;
    // console.log(categoryMealsArray);
    $('#loading').hide();
    displayMealDetails();
}

function displayMealDetails() {
    let cartona = ``;
    document.getElementById('mealDetails').classList.remove('d-none');

    for (let i = 0; i < categoryMealsArray.length; i++) {
        cartona += `<div class="col-md-4">
            <img src="${categoryMealsArray[i].strMealThumb}" class="w-100" alt="">
            <h2 class="mt-2">${categoryMealsArray[i].strMeal}</h2>
        </div>
        <div class="col-md-8">
            <h2>Instructions</h2>
            <p>${categoryMealsArray[i].strInstructions}</p>
            <h3><span class="fw-bolder">Area :</span> ${categoryMealsArray[i].strArea}</h3>
            <h3> <span class="fw-bolder">Category :</span> ${categoryMealsArray[i].strCategory}</h3>`
        cartona += `<h3>Recipes :</h3>
                <ul id="recipesList" class="list-unstyled d-flex g-3 flex-wrap">`
        const keys = [`${categoryMealsArray[i].strIngredient1}`, `${categoryMealsArray[i].strIngredient2}`, `${categoryMealsArray[i].strIngredient3}`, `${categoryMealsArray[i].strIngredient4}`, `${categoryMealsArray[i].strIngredient5}`, `${categoryMealsArray[i].strIngredient6}`, `${categoryMealsArray[i].strIngredient7}`, `${categoryMealsArray[i].strIngredient8}`, `${categoryMealsArray[i].strIngredient9}`, `${categoryMealsArray[i].strIngredient10}`, `${categoryMealsArray[i].strIngredient11}`, `${categoryMealsArray[i].strIngredient12}`, `${categoryMealsArray[i].strIngredient13}`, `${categoryMealsArray[i].strIngredient14}`, `${categoryMealsArray[i].strIngredient15}`, `${categoryMealsArray[i].strIngredient16}`, `${categoryMealsArray[i].strIngredient17}`, `${categoryMealsArray[i].strIngredient18}`, `${categoryMealsArray[i].strIngredient19}`, `${categoryMealsArray[i].strIngredient20}`]
        const ingredValues = [];
        for (let i = 0; i < keys.length; i++) {
            if (keys[i] !== 'null' && keys[i] !== '' && keys[i] !== ' ')
            ingredValues.push([keys[i]]);
        }
        console.log(ingredValues);

        const keys2 = [`${categoryMealsArray[i].strMeasure1}`, `${categoryMealsArray[i].strMeasure2}`, `${categoryMealsArray[i].strMeasure3}`, `${categoryMealsArray[i].strMeasure4}`, `${categoryMealsArray[i].strMeasure5}`, `${categoryMealsArray[i].strMeasure6}`, `${categoryMealsArray[i].strMeasure7}`, `${categoryMealsArray[i].strMeasure8}`, `${categoryMealsArray[i].strMeasure9}`, `${categoryMealsArray[i].strMeasure10}`, `${categoryMealsArray[i].strMeasure11}`, `${categoryMealsArray[i].strMeasure12}`, `${categoryMealsArray[i].strMeasure13}`, `${categoryMealsArray[i].strMeasure14}`, `${categoryMealsArray[i].strMeasure15}`, `${categoryMealsArray[i].strMeasure16}`, `${categoryMealsArray[i].strMeasure17}`, `${categoryMealsArray[i].strMeasure18}`, `${categoryMealsArray[i].strMeasure19}`, `${categoryMealsArray[i].strMeasure20}`]
        const measuresValues = [];
        for (let i = 0; i < keys2.length; i++) {
            if (keys2[i] !== 'null' && keys2[i] !== '' && keys2[i] !== ' ')
            measuresValues.push([keys2[i]]);
        }
        console.log(measuresValues);

        let mealIngredients = [];
        for(let i = 0; i < measuresValues.length; i++){
            mealIngredients.push(`${measuresValues[i]} ${ingredValues[i]}`)
        }
        console.log(mealIngredients);

        for (let i = 0; i < mealIngredients.length; i++) {
            cartona += `<li class="alert alert-danger p-1 m-2">${mealIngredients[i]}</li>
                `
        }
        cartona += `</ul>`

        cartona += `<h3>Tags :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">`
        // let mealTags = new array;
        const mealTags = `${categoryMealsArray[i].strTags}`;
        const mealTagsArray = mealTags.split(`,`)
        if (mealTagsArray[0] !== 'null') {
            // console.log(mealTagsArray[0]);
            for (let i = 0; i < mealTagsArray.length; i++) {
                cartona += `<li class="alert alert-danger p-1 m-2">${mealTagsArray[i]}</li>
                    `
            }
            cartona += `</ul>`
        } else {
            cartona += `</ul>`
        }
        cartona +=
            `<button id="mealBtns" type="button" class="btn btn-success"><a href="${categoryMealsArray[i].strSource}" target="_blank">Source</a></button>
            <button id="mealBtns" type="button" class="btn btn-danger"><a href="${categoryMealsArray[i].strYoutube}" target="_blank">Youtube</a></button>
        </div>`
    }


    // console.log(categoryMealsArray);
    document.getElementById('rowMealDetails').innerHTML = cartona;
}

function linksAnimationShow() {  
    $('.sideBarLinks').addClass('animate__animated animate__fadeInBottomLeft animate__delay-0.9s');
}