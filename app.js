
async function getData() {
    const data = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags,continents")
    const data_json = await data.json()
console.log(data_json)

const flag = document.querySelector(".flag")

for(var i=0;i<=data_json.length-1;i++){
    fg.innerHTML = data_json[i].name.common
    list.appendChild(li)
    
}
}
getData()
