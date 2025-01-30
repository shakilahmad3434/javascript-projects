const allBirds = [
  {
    id: 1,
    category: "Parrot",
    birdName: "Parrot",
    altText: `Parrot1`,
    birdSrc: "images/Parrot.png",
  },
  {
    id: 2,
    category: "Parrot",
    birdName: "Parrot 2",
    altText: `Parrot2`,
    birdSrc: "images/Parrot 2.png",
  },
  {
    id: 3,
    category: "Parrot",
    birdName: "Parrot 3",
    altText: `Parrot3`,
    birdSrc: "images/Parrot 3.png",
  },
  {
    id: 4,
    category: "Parrot",
    birdName: "Parrot 4",
    altText: `Parrot4`,
    birdSrc: "images/Parrot 4.png",
  },
  {
    id: 5,
    category: "Parrot",
    birdName: "Parrot 5",
    altText: `Parrot5`,
    birdSrc: "images/Parrot 5.png",
  },
  {
    id: 6,
    category: "Pigeon",
    birdName: "Pigeon",
    altText: `Pigeon`,
    birdSrc: "images/Pigeon.png",
  },
  {
    id: 7,
    category: "Pigeon",
    birdName: "Pigeon 2",
    altText: `Pigeon2`,
    birdSrc: "images/Pigeon 2.png",
  },
  {
    id: 8,
    category: "Pigeon",
    birdName: "Pigeon 3",
    altText: `Pigeon3`,
    birdSrc: "images/Pigeon 3.png",
  },
  {
    id: 9,
    category: "Pigeon",
    birdName: "Pigeon 4",
    altText: `Pigeon4`,
    birdSrc: "images/Pigeon 4.png",
  },
  {
    id: 10,
    category: "Pigeon",
    birdName: "Pigeon 5",
    altText: `Pigeon5`,
    birdSrc: "images/Pigeon 5.png",
  },
  {
    id: 11,
    category: "Hummingbird",
    birdName: "Hummingbirds",
    altText: `Hummingbirds`,
    birdSrc: "images/Hummingbirds.png",
  },
  {
    id: 12,
    category: "Hummingbird",
    birdName: "Hummingbirds 2",
    altText: `Hummingbirds2`,
    birdSrc: "images/Hummingbirds 2.png",
  },
  {
    id: 13,
    category: "Hummingbird",
    birdName: "Hummingbirds 3",
    altText: `Hummingbirds3`,
    birdSrc: "images/Hummingbirds 3.png",
  },
  {
    id: 14,
    category: "Hummingbird",
    birdName: "Hummingbirds 4",
    altText: `Hummingbirds4`,
    birdSrc: "images/Hummingbirds 4.png",
  },
  {
    id: 15,
    category: "Hummingbird",
    birdName: "Hummingbirds 5",
    altText: `Hummingbirds5`,
    birdSrc: "images/Hummingbirds 5.png",
  },
  {
    id: 16,
    category: "Bluebird",
    birdName: "Bluebirds",
    altText: `Bluebirds`,
    birdSrc: "images/Bluebirds.png",
  },
  {
    id: 17,
    category: "Bluebird",
    birdName: "Bluebirds 2",
    altText: `Bluebirds 2`,
    birdSrc: "images/Bluebirds 2.png",
  },
  {
    id: 18,
    category: "Bluebird",
    birdName: "Bluebirds 3",
    altText: `Bluebirds 3`,
    birdSrc: "images/Bluebirds 3.png",
  },
  {
    id: 19,
    category: "Bluebird",
    birdName: "Bluebirds 4",
    altText: `Bluebirds 4`,
    birdSrc: "images/Bluebirds 4.png",
  },
  {
    id: 20,
    category: "Bluebird",
    birdName: "Bluebirds 5",
    altText: `Bluebirds 5`,
    birdSrc: "images/Bluebirds 5.png",
  },
  {
    id: 21,
    category: "Falcon",
    birdName: "Falcon",
    altText: `Falcon`,
    birdSrc: "images/Falcon.png",
  },
  {
    id: 22,
    category: "Falcon",
    birdName: "Falcon 2",
    altText: `Falcon 2`,
    birdSrc: "images/Falcon 2.png",
  },
  {
    id: 23,
    category: "Falcon",
    birdName: "Falcon 3",
    altText: `Falcon 3`,
    birdSrc: "images/Falcon 3.png",
  },
  {
    id: 24,
    category: "Falcon",
    birdName: "Falcon 4",
    altText: `Falcon 4`,
    birdSrc: "images/Falcon 4.png",
  },
  {
    id: 25,
    category: "Falcon",
    birdName: "Falcon 5",
    altText: `Falcon 5`,
    birdSrc: "images/Falcon 5.png",
  },
];
const birdsContainer = document.querySelector(".birds_container");

const displayBirdsItem = (obj) => {
  const divElem = document.createElement("div");
  divElem.classList.add("birds_item");
  divElem.innerHTML = `<div><img src="${obj.birdSrc}" alt="${obj.altText}" /></div><div><p>${obj.birdName}</p></div>`;
  birdsContainer.append(divElem);
};

// Function to display all birds
const displayAllBirds = () => {
  allBirds.forEach(obj => {
      displayBirdsItem(obj);
  });
};

const handleAllBirds = (e) => {
  if(e.target.tagName === "BUTTON"){
    birdsContainer.innerHTML = "";
    allBirds.forEach((obj) => {
      if (obj.category === e.target.textContent) {
        displayBirdsItem(obj);
      }else if(e.target.textContent === "All"){
        displayBirdsItem(obj);
      }
    });
}
}

document.querySelector(".filter_buttons").addEventListener("click", handleAllBirds);

displayAllBirds()