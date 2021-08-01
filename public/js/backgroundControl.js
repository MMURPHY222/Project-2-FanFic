let toggle = document.querySelector("#toggle");
let background = document.querySelector("#background");
let nav = document.querySelector("#navId");
console.log('working')
const backgrounds = [
  "https://wallpapercave.com/wp/QGuGTRV.jpg",
  "https://wallpaperaccess.com/full/1141048.jpg",
  "https://wallpapercave.com/wp/eN43jqu.jpg",
];
// let isLight = true;
document.body.style.backgroundImage = `url(${backgrounds[1]})`;
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
      return (i = 0);
    } else {
      return i++;
    }
  });
}
