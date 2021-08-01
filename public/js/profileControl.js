let profile = document.querySelector("#profileImg");
let profileBtn = document.querySelector("#toggleProfile");

const profileImgs = [
  "https://i.pinimg.com/564x/3d/fd/d3/3dfdd3cce72f6d62c17d4fa2c595d6c9.jpg",
  "https://wallpapercave.com/uwp/uwp438081.jpeg",
  "https://images.immediate.co.uk/production/volatile/sites/3/2016/05/108890.jpg?quality=90&resize=620,413",
  "https://www.naruto-guides.com/wp-content/uploads/2019/05/naruto-uzumaki.jpg",
  "https://cbsnews1.cbsistatic.com/hub/i/r/2015/06/09/56a5c461-f85d-4622-b021-f6f20a3618bc/thumbnail/1200x630/cbd370c5256b07b5f42fef1db1f841b7/ppgkeyartpr2016.jpg"
]


let c = 1;
if (
  window.location.pathname === "/profile"
) {
  profileBtn.addEventListener("click", (event) => {
    profile.src =  `${profileImgs[c]}`;
    if (c === profileImgs.length - 1) {
      return (c = 0);
    } else {
      return c++;
    }
  });
}