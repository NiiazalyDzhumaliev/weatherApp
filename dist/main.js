(()=>{const e=document.getElementById("city-name"),t=document.getElementById("weather-temp"),n=document.querySelector(".city-form");n.addEventListener("submit",(a=>{!async function(e){try{const n=`http://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=9180100ea185ef7a04ff39e412ae0e12`,a=await fetch(n,{mode:"cors"}),o=await a.json();t.textContent=o.main.temp}catch(e){t.textContent="Wrong city"}}(e.value),a.preventDefault(),n.reset()}))})();