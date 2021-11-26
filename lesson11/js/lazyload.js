// const imagesToLoad = document.querySelectorAll("img[data-src]");

// const imgOptions = {
//    threshold: 0,
//    rootMargin: "0px 0px 75px 0px"
// };

// const loadImages = (image) => {
//    var effect = document.querySelector('#gallery');
//    image.setAttribute('src', image.getAttribute('data-src'));
//    image.onload = () => { image.removeAttribute('data-src'); };
// };

// if ('IntersectionObserver' in window) {
//    const imgObserver = new IntersectionObserver(items => {
//       items.forEach((item) => {
//          if (item.isIntersecting) {
//             loadImages(item.target);
//             imgObserver.unobserve(item.target);
//          }
//       });
//    }, imgOptions);

//    imagesToLoad.forEach((img) => {
//       imgObserver.observe(img);
//    });
// } else {
// }

const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
   threshold: 0,
   rootMargin: "0px 0px 50px 50px"
};

const loadImages = (image) => {
   var effect = document.querySelector('#gallery');
   image.setAttribute('src', image.getAttribute('data-src'));
   image.onload = () => { image.removeAttribute('data-src'); };
};

if ('IntersectionObserver' in window) {
   const imgObserver = new IntersectionObserver(items => {
      items.forEach((item) => {
         if (item.isIntersecting) {
            loadImages(item.target);
            imgObserver.unobserve(item.target);
         }
      });
   }, imgOptions);

   imagesToLoad.forEach((img) => {
      imgObserver.observe(img);
   });
} else {
   imagesToLoad.forEach(img => {
      loadImages(img);
   });
}