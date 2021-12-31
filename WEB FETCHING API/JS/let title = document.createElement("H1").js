let title = document.createElement("H1");
title.setAttribute("id" , "title");
title.setAttribute("class" , "text-center");
title.innerText="WEB API";
document.body.append(title);
// heading
let cont = document.createElement("div");
cont.setAttribute("class" , "container");
document.body.append(cont);
// div section with class container
let row = document.createElement("div");
row.setAttribute("class" , "row");

cont.appendChild(row);
// div2 section inside class container
let col = document.createElement("div");
col.setAttribute("class" , "col-sm-6 col-md-4 col-lg-4 col-xl-4");
row.appendChild(col);
// div3 section inside class container1 with column
let div1 = document.createElement("div");
div1.setAttribute("class" , "card h-100");
col.appendChild(div1);
// div4 section inside class container2 with column (card)
/*let div1c5 = document.createElement("div");
div1c5.setAttribute("class" , "card h-100");
div1c2.appendChild(div1c5);
// div4 section inside class container2 with column (card)*/
let div1ch = document.createElement("div");
div1ch.setAttribute("class" , "card-header");
div1ch.innerText="Country";
div1.appendChild(div1ch);
// div4 section inside class container2 with column (card - header)
let img1 = document.createElement("img");
img1.setAttribute("class" , "card-img-top");
img1.setAttribute("id" , "imgd");
img1.setAttribute("src" , "../Images/download.png");
img1.setAttribute("alt" , " Error");
div1.appendChild(img1);
// Image
let card = document.createElement("div");
card.setAttribute("class" , "card-body");
card.innerText="Country";
div1.appendChild(card);
//body text
let divdc = document.createElement("div");
divdc.setAttribute("class" , "card-text");
divdc.innerText="Region Native Name";
divdc.innerText="Native Name Population";

// let button=document.createElement("button")
// button.innertext=("get weather")
// button.setAttribute("value","weather")
// button.setAttribute("onclick","display")



let button = document.createElement("button")
button.setAttribute("id", "fun")
button.innerText = ("display")
button.setAttribute("onclick", "display()")
// card.appendChild(button)


card.appendChild(divdc);
card.appendChild(button);

dis=document.createElement('div')
dis.setAttribute('id','dis')
card.append(dis)

function display() {
    let a=fetch("https://api.openweathermap.org/data/2.5/weather?q=kabul&appid=46b7aa41bbc315e0b4b9b9161e920dc2")
    .then((d)=>d.json())
    .then((ele)=>{
        var b=ele.weather[0].description

        document.getElementById('dis').innerHTML=b
    }
    )
}
//body text country , native