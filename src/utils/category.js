// src/utils/data.js
import img1 from "../assets/cat1.png";
import img2 from "../assets/cat2.png";
import img3 from "../assets/cat3.png";
import img4 from "../assets/cat4.png";

const categoryData = [
  {
    id: 1,
    image: img1,
    title: "Beauty",
    description: "One powerful online software suite that combines",
    btntext: "More",
    visible: false,
  },
  {
    id: 2,
    image: img2,
    title: "Medical",
    description: "One powerful online software suite that combines",
    btntext: "More",
    visible: false,
  },
  {
    id: 3,
    image: img3,
    title: "Sports",
    description: "One powerful online software suite that combines",
    btntext: "Explore courses",
    visible: true,
  },
  {
    id: 4,
    image: img4,
    title: "Nutrition",
    description: "One powerful online software suite that combines",
    btntext: "More",
    visible: false,
  },
];

export default categoryData;
