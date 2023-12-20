let item;
let id;
let siteName = document.querySelector("#title");
let siteImage = document.querySelector(".pic");
let descriptionContainer = document.querySelector(".exp-text")
let commentContainer = document.querySelector(".container-comment");

if (location.href.includes("=")) {
  for (let i = 0; i < locationsData.length; i++) {
    const element = locationsData[i];
    if (element["id"] === location.href.split("=")[1]) {
      item = element;
      id = location.href.split("=")[1];
      siteName.innerText = item.name;
      console.log("hello");
      siteImage.setAttribute("src", `${item.imageName}`);
      siteImage.setAttribute("alt", `${item.imageName}`);
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

function addComment() {
  let comment = document.querySelector("#comment-area");
  let newObj = {
    id: `${location.href.split("=")[1]}`,
    content: `${comment.value}`,
    code() {
      return getCommentCode(this);
    },
  };

  commentData.push(newObj);

  output([commentData.length - 1], commentData, commentContainer);

  console.log(commentData);
  console.log(comment.value);
}

function openContactPage(){
  window.location.href = `contact.html?id=${id}`
}