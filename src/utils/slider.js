// Görselleri import et
import pythonImg from "../assets/slidermain.png";

// Öğrenci avatarları
import student2 from "../assets/user2.png";
import student4 from "../assets/user4.png";
import student5 from "../assets/user5.png";
import student6 from "../assets/user6.png";
import student7 from "../assets/user7.png";

const bundlesData = [
  {
    id: 1,
    image: pythonImg,
    date: "1 - 28 July 2022",
    title: "Product Management Basic - Course",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform, Gojek Indonesia.",
    oldPrice: 500,
    newPrice: 380,
    students: 40,
    studentAvatars: [student2, student4, student5, student6, student7],
  },
  {
    id: 2,
    image: pythonImg,
    date: "5 - 30 August 2022",
    title: "JavaScript for Beginners",
    description:
      "Learn modern JavaScript from scratch with real-world projects.",
    oldPrice: 400,
    newPrice: 300,
    students: 60,
    studentAvatars: [student2, student4, student5, student6, student7],
  },
  {
    id: 3,
    image: pythonImg,
    date: "1 - 20 September 2022",
    title: "UI/UX Design Fundamentals",
    description:
      "Master the basics of UI/UX design and build user-friendly apps.",
    oldPrice: 350,
    newPrice: 250,
    students: 45,
    studentAvatars: [student2, student4, student5, student6, student7],
  },
];

export default bundlesData;
