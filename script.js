 
 
/*let h2=document.getElementById("dis");
async function f(){


     const url = `https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=91d885a936fbb6f36bc6f772b40ca541&units=metric`;
     const response=await fetch(url);
     const data=await response.json();
       if (!response.ok){
          console.log("error");
       }
       if(h2){
     h2.textContent=`${data.name}: ${data.main.temp}°C, ${data.weather[0].main}`;
       }
       else{
          console.log("h2 not found");
       }
     }*/
    const b=document.getElementById("b");
    const p=document.getElementById("change");
    function textchange(){
     if(b.textContent===hello){
          p.textContent="hi";
          b.textContent="unclicked";
          return;
     }
     else{
 p.textContent="hello";
     b.textContent="clicked";
     }
     
    }