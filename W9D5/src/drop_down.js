const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

// dogs.keys = ["Corgi", "" , , ]

function dogLinkCreator(args) {
  let dogLinks = []
  // create an a tag
  
  // let Object.entries(args)
  // [[name, href], [name, href], ...]
  
  // add a tag's inner HTML to dog name
  // add a tag's href to dog link
  // debugger;
  
  let i = 0
  Object.keys(args).forEach(arg => {
    // for (let i = 0; i < Object.keys(args).length; i++) {
      let li = document.createElement("LI");
      let a = document.createElement("a");
      a.innerHTML = arg;
      a.href = Object.values(args)[i];
      // }})
      // <a href="xxxx">DogName</a>
      //create an li tag
      // let li = document.createElement("LI");
      // li.className = "dog-link";
      li.classList.add("dog-link")
      li.appendChild(a);
      
      // document.getElementById("myDIV").classList.add("mystyle");
      // append a tag to li
      // let res = li
      
      dogLinks.push(li);
      
      i++
  });
  
  return dogLinks;
}

function attachDogLinks() {
  // debugger
  let dogLinks = dogLinkCreator(dogs);
  dogLinks.forEach( dog => {
    let ul = document.querySelector('.drop-down-dog-list');
    ul.appendChild(dog);
  })
}

attachDogLinks();