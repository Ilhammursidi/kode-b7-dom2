async function getChar(){
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=30")
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
        showChar(data)
    } catch (error) {
        console.log(error)
    }
}

const showChar = (data) => {
    const characterSet = document.querySelector("section.pokemon")
    const fragment = new DocumentFragment()
    data.results.forEach((character) => {
        const card = document.createElement("article")
        const name = document.createElement("h2")
        name.textContent = character.name
        const img = document.createElement("img")

        img.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${character.url.split("/")[6]}.png`)
        const tipe = document.createElement("p")
        
        const getType = async () => {
            try {
                const response = await fetch(character.url)
                const data = await response.json()
                return data.types.map(type => type.type.name).join(", ")
            } catch (error) {
                console.error("Error fetching type information:", error)
                return "Unknown"
            }
        }

        getType().then(typeText => {
            tipe.textContent = `${typeText}`
        })

        card.append(name,img,tipe)
        card.setAttribute("style", "border: 1px solid black; width: 90%; justify-content: center; display: flex; flex-direction: column; align-items: center; border-radius: 10px; padding: 10px; background-color: lightblue;")
        fragment.appendChild(card)
    });
    characterSet.appendChild(fragment)
}


getChar()
