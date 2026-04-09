
async function getData() {
    const data = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags,continents")
    const data_json = await data.json()
console.log(data_json)

const list = document.querySelector(".list")
const item = document.querySelector(".item")

for(var i=0;i<=data_json.length-1;i++){
    const li = document.createElement("li")
    if(data_json[i].continets[0] == "Europe"){
        li.style.color = "blue"
    }
    if(data_json[i].continets.length>1){
        li.style.color = "red"
    }
    
    li.innerHTML = data_json[i].name.common
    list.appendChild(li)
}
}
getData()
