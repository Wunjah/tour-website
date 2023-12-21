// global variables
let container = document.querySelector(".site-container");

// counter variable
let n = 0;

// Get references to the input and image elements
const inputElement = document.querySelector(".input-file");
const previewImageElement = document.createElement("img");
const imageContainer = document.querySelector(".others-section");

// Add event listener for file input change
inputElement.addEventListener("change", handleFileUpload);

// Handle file upload event
function handleFileUpload(event) {
  const file = event.target.files[0]; // Get the selected file object

  // Ensure the file is an image
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();

    // Read the file and set as the source of the image element
    reader.onload = function (e) {
      imageContainer.innerHTML =
        `
      <div class="pictureOfSite">
        <img src="${e.target.result}" />
      </div>
      ` + imageContainer.innerHTML;
      n++;
    };

    reader.readAsDataURL(file); // Convert the file to a data URL
  }
}

function detailsPage(value) {
  window.location.href = `details.html?id=${value.parentElement.getAttribute(
    "id"
  )}`;
}
