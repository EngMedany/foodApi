
$(".openIcon").click(function () {
  $(".side-nav").animate({ left: "0px" }, 500)
  $(".openIcon").addClass("d-none")
  $(".closeIcon").removeClass("d-none")

})

$(".closeIcon").click(function () {
  $(".side-nav").animate({ left: "-250px" }, 500)
  $(".openIcon").removeClass("d-none")
  $(".closeIcon").addClass("d-none")

})


////////////////////////search/////////////
let mealArr = [];
async function getMeal() {
  let response = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=`)
  let mealObject = await response.json()
  mealArr = mealObject.meals
  console.log(mealArr);
  displayMeals()
  hideLoader()

}
getMeal()

function displayMeals() {
  var cartona = ``

  for (let index = 0; index < mealArr.length; index++) {
    cartona += `
    <div class="col-md-3 py-3">
            <figure class="position-relative overflow-hidden">
              <img
                src="${mealArr[index].strMealThumb}"
                class="w-100 rounded-3"
                alt=""
              />
              <figcaption class="position-absolute d-flex align-items-center">${mealArr[index].strMeal}</figcaption>
            </figure>
          </div>
    `

  }
  document.getElementById('row-data').innerHTML = cartona;

  $(".homeScreen .col-md-3").click(function () {
    console.log($(this).find("figcaption").html());

    for (let index = 0; index < mealArr.length; index++) {
      if ($(this).find("figcaption").html() == mealArr[index].strMeal) {
        // console.log(mealArr[index]);
        clickOnMeal(mealArr[index])


      }

    }
  })
}

////////////////////////////

///////////////////category////////////////



let categoryArr = []

async function getMealCategories() {
showLoader()

  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  let data = await response.json()
  categoryArr = data.categories
  console.log(categoryArr);
  displayMealsCategories()
  hideLoader();

}


let spices;
function displayMealsCategories() {

  var cartona = ``

  for (let index = 0; index < categoryArr.length; index++) {
    cartona += `
    <div class="col-md-3 py-3">
            <figure class="position-relative overflow-hidden">
              <img
                src="${categoryArr[index].strCategoryThumb}"
                class="w-100 rounded-3"
                alt=""
              />
              <figcaption class="position-absolute ">
              <h3 class="text-center fs-2">${categoryArr[index].strCategory}</h3>
              <p class="text-center font"> ${categoryArr[index].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>

              </figcaption>
            </figure>
          </div>
    `

  }
  document.getElementById('row-data3').innerHTML = cartona;

  $(".Categories .col-md-3").click(function () {
    spices = $(this).find("figcaption h3").html()
    console.log(spices);
    filterMealCategories(spices)


  })
}




let categoryArr2 = [];
async function filterMealCategories(filter) {
    showLoader();
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${filter}`)
  let data = await response.json()
  categoryArr2 = data.meals
  console.log(categoryArr2)
  displayMealsCategoriesFilter(categoryArr2)
 hideLoader()

}


function displayMealsCategoriesFilter(arrName) {
  let newLength=arrName.length>20?20:arrName.length;


  var cartona = ``

  for (let index = 0; index <newLength; index++) {
    cartona += `
    <div class="col-md-3 py-3">
            <figure class="position-relative overflow-hidden">
              <img
                src="${arrName[index].strMealThumb}"
                class="w-100 rounded-3"
                alt=""
              />
              <figcaption class="position-absolute d-flex align-items-center">${arrName[index].strMeal}</figcaption>
            </figure>
          </div>
    `

  }
  document.getElementById('row-data3').innerHTML = cartona;


  $(".col-md-3").click(function () {
    console.log($(this).find("figcaption").html());
    mealFilterCategory($(this).find("figcaption").html())

  })
}

let fillterArr = []
async function mealFilterCategory(filterName) {
  showLoader()
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${filterName}`)
  let data = await response.json()
  fillterArr = data.meals
  clickOnMeal(fillterArr[0])
  hideLoader()

}


//////////////////////category*////////////


//////////////Area///////////////////





let AreaArr = []
async function getArea() {
  showLoader()
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
  let data = await response.json()
  AreaArr = data.meals
  displayArea()
  hideLoader()
  


}


function displayArea() {
  var cartona = ``

  for (let index = 0; index < AreaArr.length; index++) {
    cartona += `
  <div class="col-md-3">
  <div class="item rounded-2 text-center text-white ">
    <i class="fa-solid fa-house-laptop fa-4x"></i>
    <h3>${AreaArr[index].strArea}</h3>
  </div>
</div>
    `

  }
  document.getElementById('row-data4').innerHTML = cartona;

  $(".Arrea .col-md-3").click(function () {
    // console.log($(this).find(".item h3").html());
    filterArea($(this).find(".item h3").html())

    // for (let index = 0; index < mealArr.length; index++) {
    //   if ($(this).find("figcaption").html() == mealArr[index].strMeal) {
    //     // console.log(mealArr[index]);
    //     clickOnMeal(mealArr[index])


    //   }

    // }
  })
}










let AreaArrFilter = []
async function filterArea(country) {
  showLoader()
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
  let data = await response.json()
  AreaArrFilter = data.meals
  console.log(AreaArrFilter);
  displayAreaFilter()
  hideLoader()
}

function displayAreaFilter() {
  var cartona = ``

  for (let index = 0; index < AreaArrFilter.length; index++) {
    cartona += `
    <div class="col-md-3 py-3">
            <figure class="position-relative overflow-hidden">
              <img
                src="${AreaArrFilter[index].strMealThumb}"
                class="w-100 rounded-3"
                alt=""
              />
              <figcaption class="position-absolute d-flex align-items-center">${AreaArrFilter[index].strMeal}</figcaption>
            </figure>
          </div>
    `

  }
  document.getElementById('row-data4').innerHTML = cartona;

  $(".Arrea .col-md-3").click(function () {
    console.log($(this).find("figcaption").html());


    for (let index = 0; index < AreaArrFilter.length; index++) {
      if ($(this).find("figcaption").html() == AreaArrFilter[index].strMeal) {
        mealFilterCategory(AreaArrFilter[index].strMeal)
      }

    }
  })
}


///////////////////////////////////////////



/////////////////////search///////////////////



let searchMeal = []
async function searchMealByName(name) {

  showLoader()
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
  const data = await response.json()
  searchMeal = data.meals
  console.log(searchMeal);
  displayMealBySearchName(searchMeal)
  hideLoader()
}

function displayMealBySearchName(arrName) {
  hideLoader()
  var cartona = ``
  for (let index = 0; index < arrName.length; index++) {
    cartona += `

    <div class="col-md-3 py-3">
            <figure class="position-relative overflow-hidden">
              <img
                src="${arrName[index].strMealThumb}"
                class="w-100 rounded-3"
                alt=""
              />
              <figcaption class="position-absolute d-flex align-items-center">${arrName[index].strMeal}</figcaption>
            </figure>
          </div>
    `



  }
  document.getElementById('row-data2').innerHTML = cartona

  $(".col-md-3").click(function () {
    console.log($(this).find("figcaption").html());

    for (let index = 0; index < arrName.length; index++) {
      if ($(this).find("figcaption").html() == arrName[index].strMeal) {
        clickOnMeal(arrName[index])


      }

    }
  })
}


$("#inp1").keyup(function () {

  searchMealByName($(this).val());
  


})


let searchMealByLetter = []

async function searchByFirstLetter(letter) {
  showLoader()
  let response = await fetch(`www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
  const data = await response.json()
  searchMealByLetter = data.meals
  displayMealBySearchName(searchMealByLetter)
  hideLoader()
}

$("#inp2").keyup(function () {

  searchMealByName($(this).val());

})


function clickOnMeal(object) {

  let tag = []
  if (object.strTags != null) {
    tag = object.strTags.split(",")
  }
  let res = getReciepe(object)
  //  console.log(res);
  var cartona = `
  <div class="col-md-4">
  <figure>
    <img src="${object.strMealThumb}" class="w-100 rounded-3" alt="" />
    <figcaption>
      <h4 class="text-white">${object.strMeal}</h4>
    </figcaption>
  </figure>
</div>
<div class="col-md-8 text-white">
  <h3>Instructions</h3>
  <p>${object.strInstructions}</p>
  <h5> Area  <span>:</span> ${object.strArea}</h5>
  <h5>Category <span>:</span> ${object.strCategory}</h5>
  <h5>Recipes <span>:</span> </h5> 
     <div class="recipe-disc d-flex flex-wrap ">
      ${res.map(function (elm) { return `<span class="spanStyle rounded-3 m-2 p-1">${elm}</span>` }).join("")}
     </div>

     <h5 class="pb-3 ">Tags <span>:</span>
     <div class="py-3">
     ${tag.map(function (elm) {return `<span class="spanTag rounded-3 m-2 p-1 ">${elm}</span>` }).join("")}

     </div>
      </h5>
     <div class="button">
      <button class=" btn btn-success">
      <a href="${object.strSource}" target="_blank">Source</a>
      </button>
      <button class=" btn btn-danger">
      <a href="${object.strYoutube}" target="_blank">Youtube</a>

      </button>
     </div>
 
      
</div>
  `
  document.getElementById("clickMeal").innerHTML = cartona

  $(".mealDesc").css("display","block")
  $(".homeScreen").css("display","none")
  $(".searchScreen").css("display","none")
  $(".Categories").css("display","none")
  $(".Arrea").css("display","none")
  $(".contact").css("display","none")

  // getIngredient(object)
  // getMeasure(object)


}


function getIngredient(object) {

  let arrIngred = []
  for (const key in object) {
    if (key.includes("strIngredient")) {
      if (object[key] != "") {

        arrIngred.push(object[key])
      }

    }
  }

  return arrIngred;
}


function getMeasure(object) {
  let arrMeasure = []
  for (const key in object) {
    if (key.includes("strMeasure")) {
      if (object[key] != " ") {
        arrMeasure.push(object[key])
      }
    }
  }
  return arrMeasure;
}


function getReciepe(object) {
  let arr1 = getIngredient(object)
  let arr2 = getMeasure(object)
  let arr3 = []
  for (let index = 0; index < arr2.length; index++) {
    arr3.push(arr2[index] + " " + arr1[index])

  }
  return arr3
}

/////////////////////search///////////////////////

////////////////////ingredient////////////////






let ingredArr = []
async function getIngred() {
  showLoader()
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
  let data = await response.json()
  ingredArr = data.meals
  displayIngred()
hideLoader()

}


function displayIngred() {
  var cartona = ``

  for (let index = 0; index < 20; index++) {
    cartona += `
    <div class="col-md-3">
    <div class="items rounded-2 text-center text-white ">
      <i class="fa-solid fa-drumstick-bite fa-4x"></i>
      <h3>${ingredArr[index].strIngredient}</h3>
      <p>${ingredArr[index].strDescription.split(" ").slice(0,20).join(" ")}</p>

    </div>
</div>
  
    `

  }
  document.getElementById('row-data5').innerHTML = cartona;

  $(".Ingredient .col-md-3").click(function () {
    console.log($(this).find(".items h3").html());
    filterIngred($(this).find(".items h3").html());
    
  })
}


let filterIngredient = []
async function filterIngred(ingred) {
  showLoader()
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingred}`)
  let data = await response.json()
  filterIngredient = data.meals
  console.log(filterIngredient);
  displayIngrdFilter(filterIngredient)
  hideLoader()

}

function displayIngrdFilter(arr){
  console.log(arr);

  var cartona = ``

  for (let index = 0; index < arr.length; index++) {

    cartona += `
    <div class="col-md-3 py-3">
    <figure class="position-relative overflow-hidden">
      <img
        src="${arr[index].strMealThumb}"
        class="w-100 rounded-3"
        alt=""
      />
      <figcaption class="position-absolute d-flex align-items-center">${arr[index].strMeal}</figcaption>
    </figure>
  </div>
  
    `

  }
  
  document.getElementById('row-data5').innerHTML = cartona;

  $(".Ingredient .col-md-3").click(function () {
    console.log($(this).find("figcaption").html());


    for (let index = 0; index < arr.length; index++) {
      if ($(this).find("figcaption").html() == arr[index].strMeal) {
        mealFilterCategory(arr[index].strMeal)
        $(".Ingredient").css("display","none")
      }

    }
  })

}


//////////////////////////////////////////////






/////////////////////*Contact**///////////////// 
var nameInput = document.getElementById('name');
var phone = document.getElementById('phone');
var email = document.getElementById('email');
var age = document.getElementById('age');
var password = document.getElementById('password');
var repassword = document.getElementById('re-password');
var nameRegex = /^[a-zA-Z]{3,}(([',. -][a-zA-Z ])?[a-zA-Z])$/;
var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var phoneRegex = /^(010|011|012|015)[0-9]{8}$/;
var ageRegex = /^(?:[1-9]|[1-9][0-9])$/;
var passwordRegex = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/;
var submitBtn = document.getElementById('submitBtn');


function validateInput() {

  var flag = true;
  if (nameInput.value == "") {
    flag = false;
  }
  else {
    if (!nameRegex.test(nameInput.value)) {
      flag = false;
      document.getElementById('name-alert').classList.remove('d-none');
      submitBtn.disabled = true;
    }
    else {
      document.getElementById('name-alert').classList.add('d-none');

    }

  }


  if (email.value == "") {
    flag = false;
  }
  else {
    if (!emailRegex.test(email.value)) {
      flag = false;
      document.getElementById('email-alert').classList.remove('d-none');
      submitBtn.disabled = true;

    }
    else {
      document.getElementById('email-alert').classList.add('d-none');

    }

  }


  if (phone.value == "") {
    flag = false;
  }
  else {
    if (!phoneRegex.test(phone.value)) {
      flag = false;
      document.getElementById('phone-alert').classList.remove('d-none');
      submitBtn.disabled = true;
    }
    else {
      document.getElementById('phone-alert').classList.add('d-none');

    }

  }


  if (age.value == "") {
    flag = false;
  }
  else {
    if (!ageRegex.test(age.value)) {
      flag = false;
      document.getElementById('age-alert').classList.remove('d-none');
      submitBtn.disabled = true;
    }
    else {
      document.getElementById('age-alert').classList.add('d-none');

    }

  }


  if (password.value == "") {
    flag = false;
  }
  else {
    if (!passwordRegex.test(password.value)) {
      flag = false;
      document.getElementById('password-alert').classList.remove('d-none');
      submitBtn.disabled = true;
    }
    else {
      document.getElementById('password-alert').classList.add('d-none');

    }

  }


  if (repassword.value == "") {
    flag = false;
  }
  else {
    if (password.value != repassword.value) {
      flag = false;
      document.getElementById('re-password-alert').classList.remove('d-none');
      submitBtn.disabled = true;
    }
    else {
      document.getElementById('re-password-alert').classList.add('d-none');

    }

  }
  if (flag == true) {
    submitBtn.disabled = false;
  }
}



////////////////////click-links/////////////////////

$(".search").click(function () {

  $("#row-data2").html("")
  $(".homeScreen").css("display", "none")
  $(".searchScreen").css("display", "block")
  $(".Categories").css("display", "none")
  $(".contact").css("display", "none")
  $(".Arrea").css("display", "none")
  $(".Ingredient").css("display","none")
  $(".side-nav").animate({ left: "-250px" }, 500)
  $(".closeIcon").addClass("d-none")
  $(".openIcon").removeClass("d-none")
  $(".mealDesc").css("display","none")

})



$(".conntact").click(function () {
  $(".homeScreen").css("display", "none")
  $(".searchScreen").css("display", "none")
  $(".Categories").css("display", "none")
  $(".contact").css("display", "flex")
  $(".Arrea").css("display", "none")
  $(".Ingredient").css("display","none")
  $(".side-nav").animate({ left: "-250px" }, 500)
  $(".closeIcon").addClass("d-none")
  $(".openIcon").removeClass("d-none")
  $(".mealDesc").css("display","none")
})



$(".Area").click(function () {
  getArea()
  $(".homeScreen").css("display", "none")
  $(".searchScreen").css("display", "none")
  $(".Categories").css("display", "none")
  $(".contact").css("display", "none")
  $(".Arrea").css("display", "block")
  $(".Ingredient").css("display","none")
  $(".side-nav").animate({ left: "-250px" }, 500)
  $(".closeIcon").addClass("d-none")
  $(".openIcon").removeClass("d-none")
  $(".mealDesc").css("display","none")
  
})


$(".Ingred").click(function () {
  getIngred()
  $(".homeScreen").css("display", "none")
  $(".searchScreen").css("display", "none")
  $(".Categories").css("display", "none")
  $(".contact").css("display", "none")
  $(".Arrea").css("display", "none")
  $(".Ingredient").css("display","block")
  $(".side-nav").animate({ left: "-250px" }, 500)
  $(".closeIcon").addClass("d-none")
  $(".openIcon").removeClass("d-none")
  $(".mealDesc").css("display","none")
})



$(".Category").click(function () {
  getMealCategories()
  $(".homeScreen").css("display", "none")
  $(".searchScreen").css("display", "none")
  $(".Categories").css("display", "block")
  $(".contact").css("display", "none")
  $(".Arrea").css("display", "none")
  $(".Ingredient").css("display","none")
  $(".side-nav").animate({ left: "-250px" }, 500)
  $(".closeIcon").addClass("d-none")
  $(".openIcon").removeClass("d-none")
  $(".mealDesc").css("display","none")
})


function hideLoader(){
  $(".loadScreen").css("display","none");
  $(":root").css("overflow","auto")
  
}
function showLoader(){
  $(".loadScreen").css("display","flex");
  $(":root").css("overflow","hidden")
  
}
