

let toggle = document.querySelector("#toggle");
let background = document.querySelector("#background");
let nav = document.querySelector("#navId");
// stored backgrounds
const backgrounds = [
  "https://wallpapercave.com/wp/QGuGTRV.jpg",
  "https://wallpapercave.com/wp/eN43jqu.jpg",
  "https://wallpapercave.com/uwp/uwp781092.jpeg",
  "https://wallpapercave.com/wp/wp1814938.jpg",
  "https://wallpapercave.com/uwp/uwp433012.jpeg",
  "https://wallpaperaccess.com/full/1141048.jpg",
  "https://wallpaperaccess.com/full/1399270.jpg"
];
// pulling current i value from local storage from local storage
let storedI = JSON.parse(localStorage.getItem('savedI'))
// checking if i exists
if (storedI) {
  // applying background
document.body.style.backgroundImage = `url(${backgrounds[storedI]})`;
}else if (!storedI) {
  // creating i if none exists
  let i = 1;
  document.body.style.backgroundImage = `url(${backgrounds[i]})`
}
// setting background styles
document.body.style.backgroundSize = "cover";
document.body.style.backgroundAttachment = "fixed";
let i = 1;
// makes sure this script only runs on certain pages
if (
  window.location.pathname === "/profile" ||
  window.location.pathname === "/story" ||
  window.location.pathname === "/stories" ||
  window.location.pathname === "/writestory" ||
  window.location.pathname.includes("/story")
) {
  // toggling background and saving i value when event activated
  toggle.addEventListener("click", (event) => {
    document.body.style.backgroundImage = `url(${backgrounds[i]})`;
    if (i === backgrounds.length - 1) {
      localStorage.setItem("savedI", JSON.stringify(i))
      return (i = 0);
    } else {
      localStorage.setItem("savedI", JSON.stringify(i))
      return i++;
    }
  });
}
