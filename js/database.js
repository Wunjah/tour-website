// locationsStore
const locationsData = [
  {
    id: "1",
    name: "Lake Awing",
    description:
      "Lake Awing is a natural lake located near Bamenda, a city in the Northwest Region of Cameroon. It is a picturesque body of water surrounded by lush green hills and is known for its scenic beauty. The lake is situated approximately 15 kilometers southwest of Bamenda and is a popular tourist attraction in the region",
    imageName: "images/awing_cmr.jpg",
    // coordinates: { latitude: 123, longitude: 456 },
    code() {
      return getSiteCode(this);
    },
  },
  {
    id: "2",
    name: "Bafut Palace",
    description: "Description of Location 1",
    imageName: "images/Bafut palace.jpg",
    // coordinates: { latitude: 123, longitude: 456 },
    code() {
      return getSiteCode(this);
    },
  },
  {
    id: "3",
    name: "Santa Waterfall",
    description: "Description of Location 1",
    imageName: "images/santa waterfall.jpg",
    // coordinates: { latitude: 123, longitude: 456 },
    code() {
      return getSiteCode(this);
    },
  },
  {
    id: "4",
    name: "Ayaba Hotel",
    description: "Description of Location 1",
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
    id: "0",
    content:
      " had an amazing time exploring this tourist site. The historical landmarks and architectural wonders left me in awe.",
    code() {
      return getCommentCode(this);
    },
  },
  {
    id: "0",
    content:
      "The hospitality of the locals here is exceptional. They made me feel welcome and provided valuable insights into the region's history and traditions.",
    code() {
      return getCommentCode(this);
    },
  },
  {
    id: "0",
    content:
      "I highly recommend visiting this tourist site during sunset. The view is absolutely stunning and creates a magical atmosphere.",
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
        <p>
          ${obj.content}  
        </p>
      </div>
        `;
}
