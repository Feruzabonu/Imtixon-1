let DATA = {
    users: [
        {
            id: 1,
            first_name: "Feruzabonu",
            avatar: "./img/profil.png",
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
        },
        {
            id: 2,
            first_name: "Onajonim",
            avatar: "./img/profil.png",
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
                    text: "lorem ipsum dolor sit amet...fffffffffffff",
                    time: `${new Date().getHours()}  :   ${new Date().getMinutes()}`,
                },
                {
                    id: 2,
                    is_from_me: false,
                    text: "lorem ipsum dolor sit amet... fffffffffffff",
                    time: `${new Date().getHours()}  :   ${new Date().getMinutes()}`,
                },
            ]  
        },
        {
            id: 3,
            first_name: "Nilufar",
            avatar: "./img/profil.png",
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
                    is_from_me: true,
                    text: "hello",
                    time: `${new Date().getHours()}  :   ${new Date().getMinutes()}`,
                },
                {
                    id: 2,
                    is_from_me: true,
                    text: "hi",
                    time: `${new Date().getHours()}  :   ${new Date().getMinutes()}`,
                },
            ]  
        }
    ],
    
    me: {

    }
}

// ===================get Elements=================

let Icons = document.querySelectorAll("i");
let userInfo = document.querySelector(".user-info");
let chat = document.querySelector(".chat");
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
let users = document.querySelector(".users");
let messageElement = document.querySelector(".message");
let write = document.querySelector(".write");
let person = document.querySelector(".person");

                          // ========================== Main Part ==================================

// ================= The List of Peaple ==================

function userList(){

    DATA.users.forEach(function(user){

        user.messages.forEach(function(el){
            
            if(el.id==user.messages.length){
                let newuser = `<ul class="user" ><li><div class="user-list-info"> <img src=${user.avatar} alt="foto"><div><h4>${user.first_name}</h4><span style="color: #419FD9">${user.is_from_me? "You": user.first_name} : </span>
                <span>${el.text.slice(0,20)}...</span></div></div></li>
            <li><p>${el.time}</p></ul></li>`;
            users.innerHTML += newuser; 
            }     
        }) 
    })
   
}
userList();

// ================= OnClick, choose the Person ==================

let user = document.querySelectorAll("ul.user")

let a=false;
  for(let i=0;i<user.length;i++){
      user[i].addEventListener("click",function(e){
          a=true;
          console.log(a);
          renderMessage((i+1));
          
      })
      if(a){
          a=false;
          break
      }
  }
  

// ================= Chat ==================

let messagesUser = [];


for (let i in DATA.users) {
    messagesUser = DATA.users[i].messages
  }
 let messages = window.localStorage.getItem("messagesUser");
  messages = JSON.parse(messages)


function renderMessage(key){
    
    DATA.users.forEach(function(el){
        if(el.id==key){
            messageElement.innerHTML = ""
            el.messages.forEach(function(mes){
                 let newMessage = `<li class = "${mes.is_from_me? "from-me":"to-me"}" id = "message${mes.id}">${mes.text}<p>${mes.time}</p></li>`
                messageElement.innerHTML += newMessage;
                person.firstElementChild.textContent = `${el.first_name}`;
                person.lastElementChild.textContent = `${el.activity}`
            });
        }
    })
  

}

renderMessage(1);

                         // ========================== additional elements ===========================

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

