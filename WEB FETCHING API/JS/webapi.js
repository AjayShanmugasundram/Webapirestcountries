let wrap = document.createElement("div")
wrap.setAttribute("class", "container")
document.body.appendChild(wrap)

let title = document.createElement("h1")
title.setAttribute("class", "text-center")
title.innerText = ("web api")
title.setAttribute("id", "title")
wrap.appendChild(title)


let row = document.createElement("div")
row.setAttribute("class", "row")
row.setAttribute("id", "row1")
wrap.appendChild(row)



let col1 = document.createElement("div")
// col1.setAttribute("class","col")
col1.setAttribute("class", "col-sm-6 col-md-4 col-lg-4 col-xl-4 py-2");
row.appendChild(col1)

let card = document.createElement("div")
card.setAttribute("class", "card h-100 text-center")
col1.appendChild(card)

let cardhead = document.createElement("div")
cardhead.setAttribute("class", "card-header bg-dark")
cardhead.innerHTML = ("COUNTRY: ")
card.appendChild(cardhead)

let select1 = document.createElement("select");
select1.setAttribute("id", "countries")
select1.setAttribute("class", "bg-dark border-0 text-light  fs-6 ")
cardhead.appendChild(select1)

let cardbody = document.createElement("div")
cardbody.setAttribute("class", "card-body cardbg")
card.appendChild(cardbody)

let countryimage = document.createElement("img")
countryimage.setAttribute("class", "card-img-top")
countryimage.setAttribute("id", "countryimage")
countryimage.setAttribute("src", "")
countryimage.setAttribute("alt", "Please Select the Country in the above Drop dow👆🏻")
cardbody.appendChild(countryimage)

let cardnative = document.createElement("div")
cardnative.setAttribute("class", "card-text")
cardnative.innerText = ("Native Name:")
cardbody.appendChild(cardnative)

let spann1 = document.createElement("span")
spann1.setAttribute("id", "native1")
cardnative.appendChild(spann1)

let cardregion = document.createElement("div")
cardregion.setAttribute("class", "card-text")
cardregion.innerText = ("Region:")
cardbody.appendChild(cardregion)


let spanr1 = document.createElement("span")
spanr1.setAttribute("id", "region1")
cardregion.appendChild(spanr1)


let cardpoputlation = document.createElement("div")
cardpoputlation.setAttribute("class", "card-text")
cardpoputlation.innerText = ("Population:")
cardbody.appendChild(cardpoputlation)


let spanp1 = document.createElement("span")
spanp1.setAttribute("id", "population1")
cardpoputlation.appendChild(spanp1)


let cardfooter = document.createElement("div")
cardfooter.setAttribute("class", "card-footer cardbg")
card.appendChild(cardfooter)


let button = document.createElement("button")
button.setAttribute("onclick", "show()")
button.setAttribute("class", "btn text-light btn-outline-light")
button.setAttribute("id", "button")
button.innerText = ("Today's weather report is BELOW 👇🏻👇🏻")
cardfooter.appendChild(button)

let buttondiv=document.createElement("div")
buttondiv.setAttribute("id","Bu")
button.appendChild(buttondiv)

//card2



let col2 = document.createElement("div")
// col2.setAttribute("class","col")
col2.setAttribute("class", "col-sm-6 col-md-4 col-lg-4 col-xl-4 py-2");
row.appendChild(col2)

let card2 = document.createElement("div")
card2.setAttribute("class", "card h-100 text-center")
col2.appendChild(card2)

let cardhead2 = document.createElement("div")
cardhead2.setAttribute("class", "card-header bg-dark")
cardhead2.innerText = ("COUNTRY: ")
card2.appendChild(cardhead2)

let select2 = document.createElement("select");
select2.setAttribute("id", "countries2")
select2.setAttribute("class", "bg-dark border-0 text-light  fs-6 ")
cardhead2.appendChild(select2)



let cardbody2 = document.createElement("div")
cardbody2.setAttribute("class", "card-body cardbg")
card2.appendChild(cardbody2)



let countryimage2 = document.createElement("img")
countryimage2.setAttribute("class", "card-img-top")
countryimage2.setAttribute("id", "countryimage2")
countryimage2.setAttribute("alt", "Please Select the Country in the above Drop dow👆🏻")
countryimage2.setAttribute("src", "")
cardbody2.appendChild(countryimage2)




let cardnative2 = document.createElement("div")
cardnative2.setAttribute("class", "card-text")
cardnative2.innerText = ("Native Name:")
cardbody2.appendChild(cardnative2)


let spann2 = document.createElement("span")
spann2.setAttribute("id", "native2")
cardnative2.appendChild(spann2)





let cardregion2 = document.createElement("div")
cardregion2.setAttribute("class", "card-text")
cardregion2.innerText = ("Region:")
cardbody2.appendChild(cardregion2)

let spanr2 = document.createElement("span")
spanr2.setAttribute("id", "region2")
cardregion2.appendChild(spanr2)



let cardpoputlation2 = document.createElement("div")
cardpoputlation2.setAttribute("class", "card-text")
cardpoputlation2.innerText = ("Population:")
cardbody2.appendChild(cardpoputlation2)

let spanp2 = document.createElement("span")
spanp2.setAttribute("id", "population2")
cardpoputlation2.appendChild(spanp2)


let cardfooter2 = document.createElement("div")
cardfooter2.setAttribute("class", "card-footer cardbg")
card2.appendChild(cardfooter2)


let button2 = document.createElement("button")
button2.setAttribute("ondblclick", "wait()")
button2.setAttribute("class", "btn text-light btn-outline-light")
button2.innerText = ("Today's weather report is BELOW 👇🏻👇🏻")
cardfooter2.appendChild(button2)


let buttondiv2=document.createElement("div")
buttondiv2.setAttribute("id","Bu2")
button2.appendChild(buttondiv2)



//card 3

let col3 = document.createElement("div")
// col3.setAttribute("class","col")
col3.setAttribute("class", "col-sm-6 col-md-4 col-lg-4 col-xl-4 py-2");
row.appendChild(col3)


let card3 = document.createElement("div")
card3.setAttribute("class", "card h-100 text-center")
col3.appendChild(card3)

let cardhead3 = document.createElement("div")
cardhead3.setAttribute("class", "card-header bg-dark")
cardhead3.innerText = ("COUNTRY: ")
card3.appendChild(cardhead3)

let select3 = document.createElement("select");
select3.setAttribute("id", "countries3")
select3.setAttribute("class", "bg-dark border-0 text-light  fs-6 ")
cardhead3.appendChild(select3)




let cardbody3 = document.createElement("div")
cardbody3.setAttribute("class", "card-body cardbg")
card3.appendChild(cardbody3)

let countryimage3 = document.createElement("img")
countryimage3.setAttribute("class", "card-img-top")
countryimage3.setAttribute("id", "countryimage3")
countryimage3.setAttribute("src", "")
countryimage3.setAttribute("alt", "Please Select the Country in the above Drop dow👆🏻")
cardbody3.appendChild(countryimage3)


let cardnative3 = document.createElement("div")
cardnative3.setAttribute("class", "card-text")
cardnative3.innerText = ("Native Name:")
cardbody3.appendChild(cardnative3)

let spann3 = document.createElement("span")
spann3.setAttribute("id", "native3")
cardnative3.appendChild(spann3)



let cardregion3 = document.createElement("div")
cardregion3.setAttribute("class", "card-text")
cardregion3.innerText = ("Region:")
cardbody3.appendChild(cardregion3)


let spanr3 = document.createElement("span")
spanr3.setAttribute("id", "region3")
cardregion3.appendChild(spanr3)


let cardpoputlation3 = document.createElement("div")
cardpoputlation3.setAttribute("class", "card-text")
cardpoputlation3.innerText = ("Population:")
cardbody3.appendChild(cardpoputlation3)

let spanp3 = document.createElement("span")
spanp3.setAttribute("id", "population3")
cardpoputlation3.appendChild(spanp3)

let cardfooter3 = document.createElement("div")
cardfooter3.setAttribute("class", "card-footer cardbg")
card3.appendChild(cardfooter3)

let button3 = document.createElement("button")
button3.setAttribute("onclick", "now()")
button3.setAttribute("class", "btn text-light btn-outline-light")
button3.innerText = ("Today's weather report is BELOW 👇🏻👇🏻")
cardfooter3.appendChild(button3)

let buttondiv3=document.createElement("div")
buttondiv3.setAttribute("id","Bu3")
button3.appendChild(buttondiv3)




//GLobal Variable decalration


let countries;

// fetch("https://restcountries.com/v3.1/all")
// .then(function(res){
//     console.log(res);
//     return res.json();
// })
// .then(function(data){
//     console.log(data)
// })
// .catch(function(err){
//     alert("ERROR")
// })

fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => intialize(data))
    .catch(err => console.log("ERROR", err));

function intialize(countriesdata) {
    countries = countriesdata
    let options = ""
    for (i = 0; i < countries.length; i++) {
        options += "<option value=" + countries[i].cca3 + ">" + countries[i].name.common + "</option>"
    }
    document.getElementById("countries").innerHTML = options;            //for1
    // displaycountryinfo(("MLT"))
    for (i = 0; i < countries.length; i++) {
        options += "<option value=" + countries[i].cca3 + ">" + countries[i].name.common + "</option>"
    }
    document.getElementById("countries2").innerHTML = options;                      /////////////////for2
    // displaycountryinfo1(("MLT"))       
    for(i=0;i<countries.length;i++){
        options+="<option value="+countries[i].cca3+">"+countries[i].name.common+"</option>"
    }
    document.getElementById("countries3").innerHTML=options;    
    // displaycountryinfo2(("MLT"))                                     ////////////for3

}

function displaycountryinfo(cca3) {
    let countrydata = countries.find(country => country.cca3 == cca3)
    
    document.getElementById("countryimage").src = countrydata.flags.png
    document.getElementById("native1").innerHTML = countrydata.name.official;
    document.getElementById("region1").innerHTML = countrydata.region
    document.getElementById("population1").innerHTML = countrydata.population

    

show(...countrydata.capital)

}
document.getElementById("countries").addEventListener("change", function (event) {
    // console.log(event.target.value)
    displaycountryinfo(event.target.value)
});
function show(a){
    
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+a+"&appid=8c3ab55551253c311cdea4be5af22d62")
    .then((b)=>b.json())
    .then((bdata)=>{
        document.getElementById("Bu").innerHTML=bdata.weather[0].description    
       
        
    })
}


////////////////////////////////////////////////////////////////////////////////////////////////


function displaycountryinfo1(cca3) {
    let countrydata = countries.find(country => country.cca3 == cca3)
    // console.log(countrydata)
    document.getElementById("countryimage2").src = countrydata.flags.png
    document.getElementById("native2").innerHTML = countrydata.name.official;
    document.getElementById("region2").innerHTML = countrydata.region
    document.getElementById("population2").innerHTML = countrydata.population
    wait(...countrydata.capital)
}
document.getElementById("countries2").addEventListener("change", function (event) {
    displaycountryinfo1(event.target.value)
});
function wait(a){
    
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+a+"&appid=8c3ab55551253c311cdea4be5af22d62")
    .then((b)=>b.json())
    .then((bdata)=>{
        document.getElementById("Bu2").innerHTML=bdata.weather[0].description    
       
        
    })
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 function displaycountryinfo2(cca3) {
    let countrydata = countries.find(country => country.cca3 == cca3)
    // console.log(countrydata)
    document.getElementById("countryimage3").src = countrydata.flags.png
    document.getElementById("native3").innerHTML = countrydata.name.official;
    document.getElementById("region3").innerHTML = countrydata.region
    document.getElementById("population3").innerHTML = countrydata.population
    now(...countrydata.capital)
}
document.getElementById("countries3").addEventListener("change", function (event) {
    displaycountryinfo2(event.target.value)
});
function now(a){
    
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+a+"&appid=8c3ab55551253c311cdea4be5af22d62")
    .then((b)=>b.json())
    .then((bdata)=>{
        document.getElementById("Bu3").innerHTML=bdata.weather[0].description    
       
        
    })
}
