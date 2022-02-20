
const baseURL = "http://hp-api.herokuapp.com/api/characters"

function getCharactersList() {

  fetch(`${baseURL}`)
    .then(response => {
      // console.log(response)
      return response.json()
    })
    .then(charactersList => {
      let first24 = charactersList.slice(0,24)
      console.log(first24)
      let characters = []
      let characters2 = []
      for(let i = 0; i < 8; i ++) {
        characters.push(first24[i])
        characters.push(first24[i])
        randomizeArray(first24)
      }
      // console.log(characters)
      displayImage(characters)
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  getCharactersList()
  
  function displayImage(response) {
    const cardContainer = document.getElementById("cardContainer")
    // console.log(character)
    randomizeArray(response)

    response.forEach(character => {

      let toggleCard = document.createElement("div")
      let cardFront = document.createElement("div")
      let cardBack = document.createElement("div")
		toggleCard.classList = ("toggleCard")
    cardBack.classList = ("cardBack")
    cardFront.classList = ("cardFront")

      cardFront.innerHTML = `
      <div class="cardBody">
        <img class="charImg" src="${character.image}"/>
        <h4 class="cardTitle">${character.name}</h4>
        <p class="cardText1">${character.house}</p>
        <p class="cardText2">${character.ancestry}</p>
        <p class="cardText3">${character.patronus}</p>
      </div>`

      cardBack.innerHTML = `
      <div class="cardBack">
        <img class="cardImg" src= "./images/marader.jpg"/>
      </div>`

      cardContainer.appendChild(toggleCard)
		toggleCard.appendChild(cardFront)
      toggleCard.appendChild(cardBack)
      
      toggleCard.addEventListener('click', (e) => {
      toggleCard.classList.toggle("toggleCard")
		checkCards(e)
      })
      
    })

  }

  	const checkCards = (e) => {
	const clickedCard = e.target
	console.log(clickedCard)
}

	function randomizeArray(arrayToRandomize) {
  	arrayToRandomize.sort(() => Math.random() - 0.5)
  	console.log(arrayToRandomize)
}
