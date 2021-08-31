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
                    time: `${new Date().getHours()}  :   ${new Date().getMinutes()}`,
                },
                {
                    id: 2,
                    is_from_me: true,
                    text: "lorem ipsum dolor sit amet... Hello",
                    time: `${new Date().getHours()}  :   ${new Date().getMinutes()}`,
                },
            ]  
        }
    ],
    me: {

    }
}

                          // ========================== Main Part ===================================

let messagesUser = [];
let messageElement = document.querySelector(".message");
let write = document.querySelector(".write");
console.log(write.value)



for (let i in DATA.users) {
    messagesUser = DATA.users[i].messages
  }

//   const sendMessage=()=>{

//     let text = write.value;
//     if (text){
//         let message {
//             id: messagesUser.length+1,
//             is_from_me: true,
//             text: text,
//             `${new Date().getHours()}  :   ${new Date().getMinutes()}`,
//         }
//         console.log(message)
//     }else{
//       console.log("xato")
//     }
//  }

function renderMessage(){
    messageElement.innerHTML = ""
    messagesUser.forEach(function(mes){
        console.log(mes)
         let newMessage = `<li class = "${mes.is_from_me? "from-me":"to-me"}" id = "message${mes.id}">${mes.text}<p>${mes.time}</p></li>`
        messageElement.innerHTML += newMessage;
    });
}

renderMessage();

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
let modal_3 = document.querySelector(".modal_3");
let modal_2 = document.querySelector(".modal_2");
let modal_1 = document.querySelector(".modal_1");


// ================ Open and Close user Info =================

for (let el of Icons){
   let check = false;
  
   el.addEventListener("click", function(e){

    el.style.backgroundColor = "#E7E7E7";
       setTimeout(function(){el.style.backgroundColor = "#fff"},200);
       if((el.className == "fas fa-columns") && (check===false)){
       userInfo.style.display = "inline-block";
       chat.style.width = "850px"
       check = true;
       el.style.color = "#168ACD";
    }
    else{
        userInfo.style.display = "none";
        check = false;
        el.style.color = "#A8A8A8";
        chat.style.width = "1150px"
     }
     if(check){
        for(let el of Icons){
            el.addEventListener("click", function(e){
                if((el.className == "fas fa-times")){
                    userInfo.style.display = "none";
                    chat.style.width = "1150px"
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

// ================Open and Close user Info Modal=================

person.addEventListener("click",function(e){
    userInfModal.style.display = "flex"
})

let clickCheck_1 = false;

modal_1.addEventListener("click", function(e){
    clickCheck_1 = true
  })
  
  userInfModal.addEventListener("click", function(e){
      if(!clickCheck_1){
          userInfModal.style.display = "none"
      }else{
          clickCheck_1 = false
      }
  })

for(let el of Icons){
    el.addEventListener("click", function(e){
        if((el.className == "fas fa-times")){
           setTimeout(function(){userInfModal.style.display = "none"},100)
         }
    })
}

// ================== Open and Close Humburgar Modal , up-down btn ===============

userslistNav.firstElementChild.addEventListener("click", function(e){
    humburger.style.display = "flex"
})

let clickCheck_2 = false;

modal_2.addEventListener("click", function(e){
    clickCheck_2 = true
  })
  
  humburger.addEventListener("click", function(e){
      if(!clickCheck_2){
          humburger.style.display = "none"
      }else{
          clickCheck_2 = false
      }
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

// ================== Open and Close Settings Modal ===============

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

let clickCheck_3 = false;

modal_3.addEventListener("click", function(e){
  clickCheck_3 = true
})

settings.addEventListener("click", function(e){
    if(!clickCheck_3){
        settings.style.display = "none"
    }else{
        clickCheck_3 = false
    }
})

