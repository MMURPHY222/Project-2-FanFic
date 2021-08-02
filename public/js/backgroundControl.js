

let toggle = document.querySelector("#toggle");
let background = document.querySelector("#background");
let nav = document.querySelector("#navId");

const backgrounds = [
  "https://wallpapercave.com/wp/QGuGTRV.jpg",
  "https://wallpapercave.com/wp/eN43jqu.jpg",
  "https://wallpapercave.com/uwp/uwp781092.jpeg",
  "https://wallpapercave.com/wp/wp1814938.jpg",
  "https://wallpapercave.com/uwp/uwp433012.jpeg",
  "https://wallpaperaccess.com/full/1141048.jpg",
  "https://wallpaperaccess.com/full/1399270.jpg"
];
// let isLight = true;
let storedI = JSON.parse(localStorage.getItem('savedI'))

if (storedI) {
document.body.style.backgroundImage = `url(${backgrounds[storedI]})`;
}else if (!storedI) {
  let i = 1;
  document.body.style.backgroundImage = `url(${backgrounds[i]})`
}
document.body.style.backgroundSize = "cover";
document.body.style.backgroundAttachment = "fixed";
let i = 1;
if (
  window.location.pathname === "/profile" ||
  window.location.pathname === "/story" ||
  window.location.pathname === "/stories" ||
  window.location.pathname === "/writestory" ||
  window.location.pathname.includes("/story")
) {
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
