const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector("body .gallery");
galleryEl.style.listStyle = "none";
galleryEl.style.display = "flex";
galleryEl.style.flexDirection = "column";
galleryEl.style.padding = "0";

const insert = images.map((image =>
  `<li ><img style="display: block; margin-bottom: 10px" src='${image.url}' alt='${image.alt}' width=270px ></li>`
)).join("");
galleryEl.insertAdjacentHTML("afterbegin", insert);

