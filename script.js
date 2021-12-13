var plusBtn = document.querySelector(".plus");
var crossBtn = document.querySelector(".cross-button");
var closeBtnArr = document.querySelectorAll(".icon.color-3")

/*
multi line comment
*/

function plusBtnClick(){
    document.querySelector(".dialog").style.display="flex"
}

function crossBtnClick(){
    document.querySelector(".dialog").style.display="none"
}



function addDelTktLogic(){
    var closeBtnArr =document.querySelectorAll(".icon.color-3")

    var minimizeIcons = document.querySelectorAll(" .color-1")

    function crossCard(e){
        var box =e.target.parentElement.parentElement;
        console.log(box)
        box.style.display="none"
    }

    function minimize(e){
        var box=e.target.closest(".box");
        console.log(box)
        if(box.querySelector("main").style.display !=="none"){
            box.querySelector("main").style.display = "none"
        }else{
            box.querySelector("main").style.display ="block"
        }
    }

    for(let i=0; i<closeBtnArr.length; i++){
        const closeBtn = closeBtnArr[i];
        closeBtn.addEventListener("click",crossCard);
    }

    for(let i=0; i<minimizeIcons.length; i++){
        const closeBtn = minimizeIcons[i];
        closeBtn.addEventListener("click",minimize);
    }
    
}
function addTicket(){
    crossBtnClick()
    
    var boxs=document.querySelector(".wrapper main")
    var puranaHTML = boxs.innerHTML;
    var boxContent = document.getElementById("box-content");
    var title = document.getElementById("title");
    boxs.innerHTML=puranaHTML+`
    <div class="box">
        <div class="box-header">${title.value}
                    <div class="head-line">Heading</div>
                    <div class="icon color-1">-</div>
                    <div class="icon color-2">+</div>
                    <div class="icon color-3">x</div>
                </div>
                <main>
                <textarea >${boxContent.value}</textarea>
                </main>
                
            </div>`
title.value=""
boxContent.value=""
addDelTktLogic();
}
plusBtn.addEventListener("click",plusBtnClick)
crossBtn.addEventListener("click",crossBtnClick)