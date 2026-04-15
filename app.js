async function getData() {
  const data = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,continents"
  );
  const data_json = await data.json();

  console.log(data_json);
  const list = document.querySelector(".list");
  const item = document.querySelector(".item");

  for (var i = 0; i < data_json.length; i++) {
    const country = data_json[i];
    const li = document.createElement("li");
    li.innerHTML = `
                <img class="flag" src="${country.flags.svg}" alt=".">
                <div class="info">
                    <h2>${country.name.common}</h2>
                    <p>${country.continents[0]}</p>
                </div>
            `;

    list.appendChild(li);
  }
}

getData();
