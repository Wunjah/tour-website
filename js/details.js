let item;
let id;
let siteName = document.querySelector(".details-title");
let siteImage = document.querySelector(".page-img");
let descriptionContainer = document.querySelector(".exp-text");
let commentDest = document.querySelector(".comments");

if (location.href.includes("=")) {
  for (let i = 0; i < locationsData.length; i++) {
    const element = locationsData[i];
    if (element["id"] === location.href.split("=")[1]) {
      item = element;
      id = location.href.split("=")[1];
      siteName.innerText = item.name;
      console.log("hello");
      siteImage.style.backgroundImage = `url('${item.imageName}')`;
      console.log(siteImage);
      descriptionContainer.textContent = item.description;
      break;
    }
  }
}

document.addEventListener("DOMContentLoaded", ready);
function ready() {
  var arr = [];
  for (let i = 0; i < commentData.length; i++) {
    const element = commentData[i];
    if (element.id === location.href.split("=")[1] || element.id === "0") {
      arr.push(i);
    }
    console.log(arr, element.id);
  }
  output(arr, commentData, commentContainer);
}

function comment(){
  document.querySelector(".card").style.display = "flex";
  document.querySelector(".book-now").style.transform =
    "translate(400px, -250px)";
}

function addComment() {
  let comment = document.querySelector("#comment");
  if (comment.value === "" || comment.value === " ") {
    return undefined;
  }
  let newObj = {
    id: `${location.href.split("=")[1]}`,
    content: `${comment.value}`,
    code() {
      return getCommentCode(this);
    },
  };
  
  commentData.push(newObj);
  let div = document.createElement('div');
  div.classList.add('comment')
  console.log(div)
  div.textContent = comment.value;
  commentDest.innerHTML += div.outerHTML;
  comment.value = "";
  document.querySelector(".card").style.display = "none";
  document.querySelector(".book-now").style.transform =
    "translate(400px, -50px)";

  console.log(commentDest);
  console.log(comment.value);
}

function openContactPage() {
  window.location.href = `contact.html?id=${id}`;
}
