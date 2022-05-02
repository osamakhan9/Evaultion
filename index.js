// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",myfunction)
var objArr = JSON.parse(localStorage.getItem("schedule")) || [];
function myfunction(){
    event.preventDefault();

    var obj = {
        
        personNumber: document.querySelector("#matchNum").value,

        personTeamA : document.querySelector("#teamA").value,

        personTeamB : document.querySelector("#teamB").value,

        personDate : document.querySelector("#date").value,

        personVenue : document.querySelector("#venue").value,

        
    }
    
    objArr.push(obj);
    console.log(objArr)

    localStorage.setItem("schedule", JSON.stringify(objArr));

    window.location.href = "matches.html"
}







  
   
  
