// 1. створити список з допомогою роботи з домом, пронумерувати список та вивести всі його значення. Населення відобразити в млн "40 млн". Київ та Україна підсвітити синьо-жовтим кольором.

let CountryList = [

  {
   country: "Україна",
   capital:"Київ",
   count: 40000000
  
  },
  
  {
   country: "Грузія",
   capital:"Тбілісі",
   count: 10000000
  },
  
  {
   country: "Великобританія",
   capital:"Лондон",
   count: 100000000
  },
  
  {
   country: "США",
   capital:"Вашингтон",
   count: 300000000
  }];

  let newP = document.createElement("p");
  newP.innerText = "Список країн";
  document.body.appendChild(newP);

  let table = document.createElement("table");
  
  CountryList.forEach ((country, index) => {
    let tr = document.createElement("tr");

    let td = document.createElement("td");
    td.innerText = index + 1;
    tr.appendChild(td);
    
    for (let key in country) {
      let td = document.createElement("td");
      if (country[key] === "Україна") {
        td.style.color = "yellow"
      }
      if (country[key] === "Київ") {
        td.style.color = "blue"
      }

      if (key === "count") {
        td.innerText = country[key] / 1000000 + " млн"; 
      } else {
        td.innerText = country[key]; 
      }
      
      tr.appendChild(td);
    }

    table.appendChild(tr);
  })

  document.body.appendChild(table);