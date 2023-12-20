let id;
let item;
let siteName = document.getElementById("site-name");
let siteItem = document.querySelector(".customer-interest");
let customerName = document.querySelector(".customer-name");
let customerEmail = document.querySelector(".email");
let customerTel = document.querySelector(".number");


if (location.href.includes("=")) {
  for (let i = 0; i < locationsData.length; i++) {
    const element = locationsData[i];
    if (element["id"] === location.href.split("=")[1]) {
      item = element;
      id = location.href.split("=")[1];
      siteName.value = "Interested in " + item.name;
      break;
    }
  }
} else {
  siteName.style.display = "none";
}


document.querySelector(".btn").addEventListener("click", (e)=>{
  window.location.href = `mailto:chenebametuge@gmail.com?subject=Schedule&body=${customerEmail.value.replaceAll(
    " ",
    "%20"
  )},Tel:%20${customerTel.value.replaceAll(" ", "%20")}`;
})