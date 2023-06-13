

let btns = document.getElementsByClassName("btn");
let screen =  document.getElementsByTagName("span")[0].innerHTML
function perc() {
    if (document.getElementsByTagName("span")[0].innerHTML.includes("*")) 
    {document.getElementsByTagName("span")[0].innerHTML =( (document.getElementsByTagName("span")[0].innerHTML+ "*0.01"))}
    else if (document.getElementsByTagName("span")[0].innerHTML.includes("/"))
    {document.getElementsByTagName("span")[0].innerHTML =( (document.getElementsByTagName("span")[0].innerHTML+ "/0.01"))}
    else if (document.getElementsByTagName("span")[0].innerHTML.includes("+") )
    {document.getElementsByTagName("span")[0].innerHTML =( document.getElementsByTagName("span")[0].innerHTML+"*" + (document.getElementsByTagName("span")[0].innerHTML).slice(0,document.getElementsByTagName("span")[0].innerHTML.indexOf("+")-1)+"*0.01")}
   
}
function clearone() { document.getElementsByTagName("span")[0].innerHTML  =  (document.getElementsByTagName("span")[0].innerHTML ).slice(0,document.getElementsByTagName("span")[0].innerHTML.length-1);
if(document.getElementById("show").innerHTML==""){document.getElementsByTagName("span")[0].innerHTML=0}
}
function clearall() {document.getElementsByTagName("span")[0].innerHTML="0"}
function calculate(){
   
    document.getElementById("show").innerHTML =  eval((document.getElementById("show").innerHTML))   
}

for (var i = 0; i < btns.length; i++) {
    

    btns[i].addEventListener("click", function () { 
         //showscreen
        if(document.getElementById("show").innerHTML==0){document.getElementsByTagName("span")[0].innerHTML=this.innerHTML}
        else {document.getElementsByTagName("span")[0].innerHTML =( (document.getElementsByTagName("span")[0].innerHTML+ this.innerHTML) )} 

        //equal       
        if (document.getElementsByTagName("span")[0].innerHTML.includes("=")) {
        calculate()       
     }    
   
    }
    
    )
    // btns[i].addEventListener("mouseover", function () { 
    // this.style.backgroundColor="red"});
}


















