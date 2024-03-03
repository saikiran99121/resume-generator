//alert("sai")
function addNewWEField() {
   // console.log("Adding new Field");
let newNode=document.createElement("textarea");
newNode.classList.add('form-control');   
newNode.classList.add('weField');
newNode.classList.add('mt-2');
newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter here");

let weOb= document.getElementById("we");
let weAddButtonOb=document.getElementById("weAddButton");

weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewAQField() {
    let newNode=document.createElement("textarea");
    newNode.classList.add('form-control');   
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");
    
    let aqOb= document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");
    
    aqOb.insertBefore(newNode,aqAddButtonOb);

}
function addNewSKField() {
    let newNode=document.createElement("textarea");
    newNode.classList.add('form-control');   
    newNode.classList.add('skField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");
    
    let skOb= document.getElementById("sk");
    let skAddButtonOb=document.getElementById("skAddButton");
    
    skOb.insertBefore(newNode,skAddButtonOb);

}

function addNewAchieveField() {
    let newNode=document.createElement("textarea");
    newNode.classList.add('form-control');   
    newNode.classList.add('achieveField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");
    
    let achieveOb= document.getElementById("achieve");
    let achieveAddButtonOb=document.getElementById("achieveAddButton");
    
    achieveOb.insertBefore(newNode,achieveAddButtonOb);

}

//generating cv
function generateCV(){
    let nameField = document.getElementById("nameField").value;

    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = nameField;

    document.getElementById("nameT2").innerHTML = nameField;

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    //address

    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;

    document.getElementById("InstaT").innerHTML = document.getElementById("instaField").value;

    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;

    //objective
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    //we
    let wes = document.getElementsByClassName("weField");
    let str = " ";
    for (let e of wes){
        str = str + `<li> ${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML=str;

    //aq

    let aqs = document.getElementsByClassName("aqField");
    let str1 = "";
    for (let e of aqs){
        str1 = str1 +`<li> ${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    let sqs = document.getElementsByClassName("skField");
    let str2 = "";
    for (let e of sqs){
        str2 = str2 +`<li> ${e.value}</li>`;
    }
    document.getElementById("skillsT").innerHTML=str2;

    let gqs = document.getElementsByClassName("achieveField");
    let str3 = "";
    for (let e of gqs){
        str3 = str3 +`<li> ${e.value}</li>`;
    }
    document.getElementById("achieveT").innerHTML=str3;




    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display ="block";


       
}
//print cv

function printCV(){
    window.print();
}