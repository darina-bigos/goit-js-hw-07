const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Alpine Spring Meadows',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Nature Landscape',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Lighthouse Coast Sea',
  },
];

const imgContainer = document.querySelector('.gallery');
imgContainer.classList.add('imgContainer-flex');

const gallery = document.createDocumentFragment();

images.forEach(({ url, alt }) => {
  const li = document.createElement('li');
  li.classList.add('img-item');

  const img = document.createElement('img');
  img.classList.add('img-gallery');
  img.src = url;
  img.alt = alt;
  img.width = 360;
  img.height = 300;

  li.append(img);
  gallery.append(li);
});

imgContainer.append(gallery);

// function createGallery(arr) {
//   return arr
//     .map(
//       image => `
//     <li class='list-img'>
//     <img
//     src='${image.url}'
//     alt='${image.alt}'
//     class='img-cart'
//     width='360'
//     height='300'/>
//     </li>
//     `
//     )
//     .join('');
// }
// imgContainer.insertAdjacentHTML('beforeend', createGallery(images));

imgContainer.style.listStyle = 'none';
imgContainer.style.display = 'flex';
imgContainer.style.flexWrap = 'wrap';
imgContainer.style.gap = '24px';
imgContainer.style.maxWidth = '1200px';
imgContainer.style.margin = '0 auto';
const listItem = document.querySelectorAll('.list-img');
listItem.forEach(li => {
  li.style.flexBasis = 'calc((100% - 96px) / 3)';
});
