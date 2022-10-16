const $ = (s) => document.querySelector(s);

const GALLERY = [
  {
    title: "Kitten",
    img: {
      src: "https://assets.codepen.io/652/the-lucky-neko-CM7a-XBD4AU-unsplash.jpg",
      alt: "a white kitten with brown and black spots sitting with its paws slightly outstretched.",
      title: "Photo by The Lucky Neko for Unsplash",
    },
  },
  {
    title: "Puppy",
    img: {
      src: "https://assets.codepen.io/652/karsten-winegeart-NE0XGVKTmcA-unsplash.jpg",
      alt: "a brown French bulldog puppy laying down and looking up with a hopeful look in its eyes.",
      title: "Photo by Karsten Winegeart for Unsplash",
    },
  },
  {
    title: "Cat",
    img: {
      src: "https://assets.codepen.io/652/kabo-NjWZ07sPEJE-unsplash.jpg",
      alt: "A large long-haired orange cat with a white belly.",
      title: "Photo by Kabo for Unsplash",
    },
  },
  {
    title: "Dog",
    img: {
      src: "https://assets.codepen.io/652/giacomo-lucarini-7M0SG3ZKdlE-unsplash.jpg",
      alt: "A light brown, long-haired chihuahua sitting next to three rubber duckies.",
      title: "Photo by Giacomo Lucarini for Unsplash",
    },
  },
  {
    title: "Kitten-2",
    img: {
      src: "https://assets.codepen.io/652/sergey-semin-Y0WXj3xqJz0-unsplash.jpg",
      alt: "A tabby kitten with green eyes.",
      title: "Photo by Sergey Semin for Unsplash",
    },
  },
];

const initGallery = (function () {
  const createContent = function (content) {
    const $creaBlock = document.createElement("figure");
    $creaBlock.classList.add("creaBlock");
    $creaBlock.classList.add("creaBlockPrez");
    const $lineSeparator = document.createElement("div");
    $lineSeparator.classList.add("lineSeparator");
    $creaBlock.appendChild($lineSeparator);
    const $blocImg = document.createElement("div");
    $blocImg.classList.add("blocImg");
    const $img = document.createElement("img");
    $img.setAttribute("src", content.img.src);
    $img.setAttribute("alt", content.img.alt);
    $img.setAttribute("title", content.img.title);
    $blocImg.appendChild($img);
    $creaBlock.appendChild($blocImg);
    const $title = document.createElement("figcaption");
    $title.innerText = content.title;
    $creaBlock.appendChild($title);
    return $creaBlock;
  };
  const $galleryBloc = document.createElement("div");
  const $galleryContent = document.createElement("div");
  $galleryContent.classList.add("creationsBlocUl");
  GALLERY.forEach((e, index) => $galleryContent.appendChild(createContent(e)));
  $galleryBloc.appendChild($galleryContent);
  $("main").appendChild($galleryBloc);
})();
