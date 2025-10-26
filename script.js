 

 let search=document.getElementById("name") 
 let result=document.querySelector(".card1")
 let failed=document.querySelector('.failed')

 
function icons(id){
    switch(true){
        case (id>=200 && id<300):
            return "https://cdn.weatherbit.io/static/img/icons/t03d.png"
            
        case (id>=300 &&  id<500):
            return "https://cdn.weatherbit.io/static/img/icons/d02d.png"
        case (id>=500 && id>600):
            return "https://cdn.weatherbit.io/static/img/icons/r05d.png"

        case (id>=600 && id<700):
            return "https://cdn.weatherbit.io/static/img/icons/s06d.png"

        case (id>=700 && id<800):
            return "https://cdn.weatherbit.io/static/img/icons/a04d.png"
        case (id>=800 && id<900):
            return "https://cdn.weatherbit.io/static/img/icons/c01d.png"
        default:
            return "https://cdn.weatherbit.io/static/img/icons/u00d.png"

    }

}
function valid(response1){
    const {name,main:{temp,humidity},weather:[{id,description}]}=response1;
 failed.style.display="none";
    result.style.display="block";
    let h1=document.createElement("h1");
    let p1=document.createElement("h4");
    let p2=document.createElement("h4");
    let p3=document.createElement("h4");
    let image=document.createElement('img')
    let a=icons(id)
    image.src=a;

    h1.textContent=`${name}`;
    p1.innerHTML=`temp:${parseInt(temp - 273) } &#8451;`;
    p2.textContent=`humidity:${humidity}%`;
    p3.textContent=`description${description}`
     
    result.appendChild(h1);
    result.appendChild(p1);
    result.appendChild(p2);
    result.appendChild(image)

    search.value="";

}

const fetch1=async ()=> {
    result.textContent=""
    failed.style.display="none";
    if (search.value===""){
        result.style.display="none";
         failed.style.display="block";

        return;
    }
     
  
let apikey="91d885a936fbb6f36bc6f772b40ca541"

let city=search.value.toLocaleLowerCase()

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`) 
 
    const response1=await response.json()
    if (!response1 || !response1.main || response1 == "") {
    
     result.style.display="none";
     failed.style.display="block";
    return;
}
    valid(response1)
 
}
