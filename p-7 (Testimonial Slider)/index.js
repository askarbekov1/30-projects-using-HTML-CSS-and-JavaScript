const testimonials = [
  {
    name: "Emma Thompson",
    photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I am beyond impressed with Apple's innovative products and exceptional customer service. Their attention to detail and commitment to quality shine through in all their offerings. I highly recommend Apple to anyone seeking cutting-edge technology solutions."
  },
  {
    name: "Emily Johnson",
    photoUrl: "https://media.istockphoto.com/id/1153855075/photo/close-up-portrait-of-happy-young-man-having-fun-and-joy-smiling-and-laughing-at-the-camera-in.jpg?s=1024x1024&w=is&k=20&c=6LG-DN4SlJP71SuJntVnz3U7VAJ0UoTRaoK1KNDso9c=",
    text: "I am extremely impressed with apple's all products. The quality and design are top-notch. I highly recommend apple to anyone looking for innovative and reliable technology solutions."
  },
  {
    name: "Samantha Reynolds",
    photoUrl: "https://media.istockphoto.com/id/1355110844/photo/studio-shot-of-a-handsome-and-happy-young-man-posing-against-a-grey-background.jpg?s=1024x1024&w=is&k=20&c=G1Y-zalr8fMQIDbR4uw-YA1vDi5cnk5MeSE_aq7lAps=",
    text: "I am blown away by the top-quality products offered by apple. From their sleek design to their cutting-edge technology, apple truly has it all. I couldn't be happier with my purchase and will definitely be recommending apple to all my friends and family."
  }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userNameEl = document.querySelector(".username");

let idx = 0;

updateTestemonial();

function updateTestemonial() {
  const {name, photoUrl, text} = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  userNameEl.innerText = name;
  idx++;

  if (idx === testimonials.length) {
    idx = 0;
  }

  setTimeout(() => {
    updateTestemonial();
  }, 10000)
}