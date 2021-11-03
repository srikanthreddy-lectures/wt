const btn = document.querySelector("button");
const myText = document.querySelector("b");
myText.onmouseover = function(){
    myText.style.cssText="cursor:default;color:red;"

}

myText.onmouseleave = function(){
    myText.style.cssText="cursor:default;color:black;"
}

/*
btn.onclick = function(){
    //logic
    //navigate to other page or show any dialog box
    alert("This is test")
}


btn.addEventListener('click',function(){
    alert("This is test")
});

btn.addEventListener('click',function(){
    alert("This is another test")
});

*/

btn.addEventListener('click',myClick1);
function myClick1(){
    alert("This is test");
}
btn.addEventListener('click',myClick2);
function myClick2(){
    alert("This is another test");
}

btn.removeEventListener('click',myClick1)

//console.dir(btn);
