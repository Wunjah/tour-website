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
    id: "1",
    content:
      "Lake Awing is a natural lake located near Bamenda, a city in the  Northwest Region of Cameroon. It is a picturesque body of water surro",
    code() {
      return getCommentCode(this);
    },
  },
];

function getCommentCode(obj) {
  return `<div class="comment">
            <div class="x"><svg width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
    
    <title>cross-circle</title>
    <desc>Created with Sketch Beta.</desc>
    <defs>

</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-568.000000, -1087.000000)" fill="#000000">
            <path d="M584,1117 C576.268,1117 570,1110.73 570,1103 C570,1095.27 576.268,1089 584,1089 C591.732,1089 598,1095.27 598,1103 C598,1110.73 591.732,1117 584,1117 L584,1117 Z M584,1087 C575.163,1087 568,1094.16 568,1103 C568,1111.84 575.163,1119 584,1119 C592.837,1119 600,1111.84 600,1103 C600,1094.16 592.837,1087 584,1087 L584,1087 Z M589.717,1097.28 C589.323,1096.89 588.686,1096.89 588.292,1097.28 L583.994,1101.58 L579.758,1097.34 C579.367,1096.95 578.733,1096.95 578.344,1097.34 C577.953,1097.73 577.953,1098.37 578.344,1098.76 L582.58,1102.99 L578.314,1107.26 C577.921,1107.65 577.921,1108.29 578.314,1108.69 C578.708,1109.08 579.346,1109.08 579.74,1108.69 L584.006,1104.42 L588.242,1108.66 C588.633,1109.05 589.267,1109.05 589.657,1108.66 C590.048,1108.27 590.048,1107.63 589.657,1107.24 L585.42,1103.01 L589.717,1098.71 C590.11,1098.31 590.11,1097.68 589.717,1097.28 L589.717,1097.28 Z" id="cross-circle" sketch:type="MSShapeGroup">

</path>
        </g>
    </g>
</svg></div>
            <span>
              ${obj.content}
            </span>
        `;
}
