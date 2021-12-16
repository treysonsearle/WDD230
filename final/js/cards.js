requestURL = 'https://treysonsearle.github.io/final/js/business.json'

fetch(requestURL)
   .then(function (response) {
      return response.json();
   })
   .then(function (jsonObject) {
      console.table(jsonObject);  // temporary checking for valid response and data parsing
      const businesses = jsonObject

      for (let i = 0; i < businesses.length; i++) {
         let card = document.createElement("section");
         let h2 = document.createElement("p");
         let address = document.createElement("p")
         let number = document.createElement("p")
         let website = document.createElement("a")
         let pic = document.createElement("a")
         let logo = document.createElement("img")
         card.setAttribute("class", `order${businesses[i].order}`)
         h2.textContent = `${businesses[i].name}}`;
         address.textContent = `Address: ${businesses[i].address}`;
         number.textContent = `Phone Number: ${businesses[i].number}`;
         website.textContent = `Website: ${businesses[i].website}`;
         website.setAttribute("href", businesses[i].website)
         website.classList.add('link')
         logo.setAttribute("src", businesses[i].logo)
         logo.setAttribute("alt", `${businesses[i].name}`)
         pic.setAttribute("href", businesses[i].website)
         pic.appendChild(logo)
         card.appendChild(h2);
         card.appendChild(address);
         card.appendChild(number);
         card.appendChild(website)
         card.appendChild(pic)
         document.querySelector('div.cards').appendChild(card)
      }

   });