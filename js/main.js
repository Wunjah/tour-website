// send the places to it's container on the page
function output(range, data, cont) {
  if (range[0] === -1) {
    data.forEach((element) => {
      // Item html code
      let item = element.code();
      // appends item to the page
      cont.innerHTML += item;
    });
  } else {
    for (let i = 0; i < range.length; i++) {
      const element = range[i];

      // Item html code
      let item = data[element].code();
      // appends item to the page
      cont.innerHTML += item;

    }
  }
}
