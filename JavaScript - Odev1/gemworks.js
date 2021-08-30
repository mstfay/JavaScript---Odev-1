function askName() {
    let userName = prompt("Please Enter Your User Name");
    document.getElementById("userName").innerHTML = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
 }
 
 function showTime() {
   let date = new Date();
   let today = date.getDay();
   let tHours = date.getHours();
   let tMinutes = date.getMinutes();
   let tSeconds = date.getSeconds();
   

   switch(true){
       case today == 1:
       today = "Pazartesi"
       break;
       case today == 2:
       today = "Salı"
       break;
       case today == 3:
       today = "Çarşamba"
       break;
       case today == 4:
       today = "Perşembe"
       break;
       case today == 5:
       today = "Cuma"
       break;
       case today == 6:
       today = "Cumartesi"
       break;
       case today == 7:
       today = "Pazar"
       break;
   }

   if(tHours <= 9){
       tHours = "0" + tHours
   }
   else{
       tHours = tHours
   }

   if(tMinutes <= 9){
    tMinutes = "0" + tMinutes
    }
    else{
    tMinutes = tMinutes
    }

    if(tSeconds <= 9){
    tSeconds = "0" + tSeconds
    }
    else{
    tSeconds = tSeconds
    }
 
   let time = tHours + ":" + tMinutes + ":" + tSeconds + " " + today;
   document.getElementById("myClock").innerHTML = time;
   document.getElementById("myClock").textContent = time;
 
   setTimeout(showTime, 1000);
 }
 
 askName();
 showTime();

 let endDate = new Date("Jan 01, 2022 00:00:00").getTime();
    let timer = setInterval(function() {
 
        let now = new Date().getTime(); 
        let t = endDate - now;
        
        if (t >= 0) {
 
            let gunler = Math.floor(t / (1000 * 60 * 60 * 24));
            let saatler = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let dakikalar = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            let saniyeler = Math.floor((t % (1000 * 60)) / 1000);
 
            document.getElementById("timer-gunler").innerHTML = gunler + 
            "<span class='label'> Gün</span>";
 
            document.getElementById("timer-saatler").innerHTML= ("0" + saatler).slice(-2) +
            "<span class='label'> sa</span>";
 
            document.getElementById("timer-dakikalar").innerHTML= ("0" + dakikalar).slice(-2) +
            "<span class='label'> dk</span>";
 
            document.getElementById("timer-saniyeler").innerHTML= ("0" + saniyeler).slice(-2) +
            "<span class='label'> sn</span>";
        }
        else { 
            document.getElementById("timer").innerHTML = "Zaman bitti!"; 
        }
        
        
    }, 1000);