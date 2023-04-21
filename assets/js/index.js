let url = "https://digimon-api.vercel.app/api/digimon";
fetch(url)
  .then((response) => response.json())
  .then((data) => mostrarData(data))
  .catch((error) => console.log(error));

const mostrarData = (data) => {
  console.log(data);
  let body = "";
  for (var i = 0; i < data.length; i++) {
    // copie una tarjeta de bootstrap y la remplace por la tabla! y sustituyo los valores
    body += `
        <div class="card" style="width: 18rem;">
        <img src="${data[i].img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data[i].name}</h5>
          <p class="card-text">${data[i].level}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        
        `;
  }
  document.getElementById("div_card").innerHTML = body;
  console.log(body);
};



$(function () {
 
  // Cambio de color de letras con doble click en el texto Digimon
  $("a").dblclick(function () {
      $(this).css({ color: "red" });
  });

})
