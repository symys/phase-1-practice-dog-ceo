console.log("%c HI", "color: firebrick");

window.onload = () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";

  const dogContainer = document.getElementById("dog-image-container");
  const ulForDogs = document.createElement("ul");

  const ulForBreeds = document.getElementById("dog-breeds");
  const selectedLetter = document.querySelector("#breed-dropdown");

  //console.log(dogContainer);
  //console.log(ulForBreeds);

  fetch(imgUrl)
    .then((res) => res.json())
    .then((dogImages) => {
      dogImages.message.forEach((dogImg) => {
        const liForDogs = document.createElement("li");
        const newImg = document.createElement("img");
        newImg.src = dogImg;
        newImg.width = 400;

        liForDogs.appendChild(newImg);
        ulForDogs.appendChild(liForDogs);
        dogContainer.appendChild(ulForDogs);
      });
    });

  fetch(breedUrl)
    .then((res) => res.json())
    .then((dogBreeds) => {
      Object.keys(dogBreeds.message).forEach((breed) => {
        const liForBreed = document.createElement("li");
        liForBreed.textContent = breed;
        liForBreed.id = `${breed}Dog`
        liForBreed.hidden = ""
        ulForBreeds.appendChild(liForBreed);
        liForBreed.addEventListener("click", () => {
          liForBreed.style.color = "red";
        });
      });

      selectedLetter.addEventListener("change", () => {
        const searchedLetter = selectedLetter.value;
        Object.keys(dogBreeds.message).forEach((breed) => {
          if (searchedLetter === breed.charAt(0)) {
            hiddenDog = document.getElementById(`${breed}Dog`)
            hiddenDog.hidden = ""
          }
          else{
            hiddenDog = document.getElementById(`${breed}Dog`)
            hiddenDog.hidden = "hidden"
          }
        });
      });
      //console.log(dogBreeds.message)
    });
};
