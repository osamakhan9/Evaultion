// write js code here corresponding to matches.html

var objArr = JSON.parse(localStorage.getItem("schedule"))
var bookArr= JSON.parse(localStorage.getItem("favourites"))

displayData(objArr)

function displayData(data){
    data.forEach(function(elem){
        var tr = document.createElement("tr");
         
        var td1 = document.createElement("td");
        td1.innerText=elem.personNumber
          
        var td2 = document.createElement("td");
        td2.innerText=elem.personTeamA

        var td3 = document.createElement("td");
        td3.innerText=elem.personTeamB

        var td4 = document.createElement("td");
        td4.innerText=elem.personDate

        var td5 = document.createElement("td");
        td5.innerText=elem.personVenue

        var td6 = document.createElement("td")
        td6.innerText = "favourites"
        td6.style.cursor = "pointer";
        td6.style.color = "blue";

        td6.addEventListener("favourite", function(){
            favourt(elem)
        });
           
        tr.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(tr);
   window.localStorage.href = favourites.html
    });
}

function favourite(elem){
bookArr.push(elem);
    localStorage.setItem("favourites",JSON.stringify(elem))
}
