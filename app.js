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
            activity: "last seen recently",
            selected:true,
            messages: [
                {
                    id: 1,
                    is_from_me: false,
                    text: "lorem ipsum dolor sit amet...",
                    time: `12 : 12`,
                },
                {
                    id: 2,
                    is_from_me: true,
                    text: "lorem ipsum dolor sit amet... Hello",
                    time: `17 : 08`,
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
            selected:false,
            messages: [
                {
                    id: 1,
                    is_from_me: false,
                    text: "lorem ipsum dolor sit amet...fffffffffffff",
                    time: `10 : 45`,
                },
                {
                    id: 2,
                    is_from_me: false,
                    text: "lorem ipsum dolor sit amet... fffffffffffff",
                    time: `19 : 00`,
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
            selected:false,
            messages: [
                {
                    id: 1,
                    is_from_me: true,
                    text: "hello",
                    time: `7 : 09`,
                },
                {
                    id: 2,
                    is_from_me: true,
                    text: "hi",
                    time: `22 : 10`,
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
let sendI = document.querySelector(".send_i");


                          // ========================== Main Part ==================================


if(!window.localStorage.getItem("DATA")){
    window.localStorage.setItem('DATA', JSON.stringify(DATA));
    DATA = window.localStorage.getItem("DATA");
    DATA = JSON.parse(DATA) 
}


else{
    DATA = window.localStorage.getItem("DATA");
    DATA = JSON.parse(DATA)
}



function userList(){

    DATA.users.forEach(function(user){

        user.messages.forEach(function(el){
            
            if(el.id==user.messages.length){
                let newuser = `<ul class="user" active="${user.id}" ><li><div class="user-list-info"> <img src=${user.avatar} alt="foto"><div><h4>${user.first_name}</h4><span style="color: #419FD9">${el.is_from_me? "You": user.first_name} : </span>
                <span>${el.text.slice(0,20)}...</span></div></div></li>
            <li><p>${el.time}</p></ul></li>`;
            users.innerHTML += newuser; 
            }     
        }) 
    })
   
}
userList();

let user = document.querySelectorAll("ul.user");
let messageElement = document.querySelector(".message");
let person = document.querySelector(".person");
let form = document.querySelector("form");
let write = document.querySelector(".write");
let send = document.querySelector(".send");


function renderMessage(){
    DATA.users.forEach(function(item,key){
        if(item.selected){
            messageElement.innerHTML = ""
            item.messages.forEach(function(mes,id){
                let newMessage = `<li class = "${mes.is_from_me? "from-me":"to-me"}" id = "message${mes.id}">${mes.text}<p>${mes.time}</p></li>`
                messageElement.innerHTML += newMessage;
                
            })
            
        }
        
    })
   
}

    renderMessage() 


user.forEach(function(people,id){
    people.addEventListener("click",function(e){
       let active = people.getAttribute("active");
       active-=0;
       DATA.users.forEach(function(item,key){
           if((key+1)==active){
               item.selected = true
           }else{
               item.selected = false
           }
       })

       window.localStorage.setItem("DATA", JSON.stringify(DATA))

       renderMessage()

      
    })
    
})


form.addEventListener("submit",function(e){

    let text = write.value;
    if(text){
       
        DATA.users.forEach(function(item){
            if(item.selected){
                item.messages.push({
                    id: item.messages.length+1,
                    is_from_me: true,
                    text: text,
                    time: `${new Date().getHours()}  :   ${new Date().getMinutes()}`,
                })
                window.localStorage.setItem("DATA", JSON.stringify(DATA));
                renderMessage();
             write.value = "";
            }
        }
        
        )
       
        
    
  
}})


sendI.addEventListener("click",function(e){
    let text = write.value;
    if(text){
        DATA.users.forEach(function(item){
            if(item.selected){
                item.messages.push({
                    id: item.messages.length+1,
                    is_from_me: true,
                    text: text,
                    time: `${new Date().getHours()}  :   ${new Date().getMinutes()}`,
                })
                window.localStorage.setItem("DATA", JSON.stringify(DATA));
                renderMessage();
             write.value = "";
            }
        } 
        )
}
})






                         // ========================== additional elements ===========================

// =================== Show send icon ==============

write.addEventListener("input", function(e){
        form.lastElementChild.style.display = "flex";
})


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

