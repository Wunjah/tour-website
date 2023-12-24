// locationsStore
const locationsData = [
  {
    id: "1",
    name: "Lake Awing",
    description:
      "Lake Awing is a picturesque freshwater lake located in the Northwest Region of Cameroon. It is nestled amidst lush greenery and surrounded by rolling hills. The lake is known for its tranquil ambiance and stunning natural beauty.",
    imageName: "images/awing_cmr.jpg",
    // coordinates: { latitude: 123, longitude: 456 },
    code() {
      return getSiteCode(this);
    },
  },
  {
    id: "2",
    name: "Bafut Palace",
    description:
      "Bafut Palace, also known as Bafut Fondom Palace, is a cultural and historical landmark situated in Bafut, a town in the Northwest Region of Cameroon. It holds great significance as the traditional residence of the Fon, who is the traditional ruler of the Bafut people.",
    imageName: "images/Bafut palace.jpg",
    // coordinates: { latitude: 123, longitude: 456 },
    code() {
      return getSiteCode(this);
    },
  },
  {
    id: "3",
    name: "Santa Waterfall",
    description:
      "Santa Waterfall, also known as Chutes de Santa, is a captivating natural wonder located in the Northwest Region of Cameroon. Nestled amidst lush greenery and rugged terrain, the waterfall offers a breathtaking sight and a serene escape into nature.",
    imageName: "images/santa waterfall.jpg",
    // coordinates: { latitude: 123, longitude: 456 },
    code() {
      return getSiteCode(this);
    },
  },
  {
    id: "4",
    name: "Ayaba Hotel",
    description:
      "Ayaba Hotel is a renowned establishment located in Bamenda, a city in the Northwest Region of Cameroon. It is a popular choice for visitors seeking comfortable accommodation and a pleasant stay in the area.Ayaba Hotel offers a range of amenities and services to cater to the needs of its guests. The hotel boasts well-appointed rooms and suites that are designed to provide comfort and relaxation. Each room is equipped with modern facilities such as comfortable beds, private bathrooms, air conditioning, and complimentary Wi-Fi, ensuring a convenient and enjoyable stay for guests.",
    imageName: "images/ayaba.jpeg",
    // coordinates: { latitude: 123, longitude: 456 },
    code() {
      return getSiteCode(this);
    },
  },
];

// commentStore
const commentData = [
  {
    id: "0",
    content:
      "What a breathtaking destination! The scenic beauty and cultural heritage of this place are truly remarkable.",
    code() {
      return getCommentCode(this);
    },
  },
  {
    id: "1",
    content:"Lake Awing is a natural lake located near Bamenda, a city in the  Northwest Region of Cameroon. It is a picturesque body of water surro",
    code() {
      return getCommentCode(this);
    },
  },
];

function getCommentCode(obj) {
  return `
      <div class="comment">
          ${obj.content}
      </div>
        `;
}
