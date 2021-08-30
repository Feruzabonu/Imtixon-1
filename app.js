let DATA = {
    users: [
        {
            id: 1,
            first_name: "First Name",
            last_name: "Last Name",
            avatar: "avatar1.png",
            bio: "Bio",
            user_name: "@username",
            groups_common: 4,
            shared_links: 15,
            shared_photos: 20,
            shared_voice: 15,
            activity: "online",
            messages: [
                {
                    id: 1,
                    is_from_me: false,
                    text: "lorem ipsum dolor sit amet...",
                    time: new Date(),
                },
                {
                    id: 2,
                    is_from_me: true,
                    text: "lorem ipsum dolor sit amet...",
                    time: new Date(),
                },
            ]  
        }
    ],
    me: {

    }
}


// ========================== additional elements ===========================

// ===================get Elements=================

let Icons = document.querySelectorAll("i");
let userInfo = document.querySelector(".user-info");
let chat = document.querySelector(".chat");

// ================open user Info=================

for (let el of Icons){
   let check = false;
  
   el.addEventListener("click", function(e){

    el.style.backgroundColor = "#E7E7E7";
       setTimeout(function(){el.style.backgroundColor = "#fff"},200);
       if((el.className == "fas fa-columns") && (check===false)){
       userInfo.style.display = "inline-block";
       check = true;
       el.style.color = "#168ACD";
      
    }
    else{
        userInfo.style.display = "none";
        check = false;
        el.style.color = "#A8A8A8";
     }
     
   }) 
}

for(let el of Icons){
    el.addEventListener("click", function(e){
        if((el.className == "fas fa-times")){
            userInfo.style.display = "none";
            
            for(let el of Icons){
                el.className === "fas fa-columns"?el.style.color = "#A8A8A8":""
             }
             check = false;
         }
    })
}




