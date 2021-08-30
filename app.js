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
let person = document.querySelector(".person");
let userInfModal = document.querySelector(".user-info-modal");
let upDownUl = document.querySelector(".up-down-ul");
let upDown = document.querySelector(".up-down");
let hidden = document.querySelector(".hidden");
let settingLi = document.querySelector(".setting_li");
let settings = document.querySelector(".settings");
let userslistNav = document.querySelector(".users-list-nav");
let humburger = document.querySelector(".humburger");


// ================Open user Info=================

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
     if(check){
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
    }
     
   }) 
}

// ================Open user Info Modal=================

person.addEventListener("click",function(e){
    userInfModal.style.display = "flex"
})
for(let el of Icons){
    el.addEventListener("click", function(e){
        if((el.className == "fas fa-times")){
           setTimeout(function(){userInfModal.style.display = "none"},100)
         }
    })
}

// ================== Open Humburgar Modal ===============

console.log(userslistNav.firstElementChild)
userslistNav.firstElementChild.addEventListener("click", function(e){
    humburger.style.display = "flex"
})

upDownUl.addEventListener("click", function(e){
    upDown.firstChild.style.backgroundColor = "none";
    if(upDown.firstChild.className === "fas fa-chevron-down"){
        upDown.firstChild.className = "fas fa-chevron-up";
        hidden.style.display = "inline-block"
    }else{
        upDown.firstChild.className = "fas fa-chevron-down";
        hidden.style.display = "none"
    }
    upDown.firstChild.addEventListener("click",function(e){
        upDown.firstChild.style.backgroundColor = "none"
        console.log(e.target.style.backgroundColor)
    })

})

// ================== Open Settings Modal ===============

settingLi.addEventListener("click", function(e){
    humburger.style.display = "none";
    settings.style.display = "flex"
})
for(let el of Icons){
    el.addEventListener("click", function(e){
        if((el.className == "fas fa-times")){
           setTimeout(function(){settings.style.display = "none"},100)
         }
    })
}