import placeholderImage from '../../../assets/placeholder.png';

export default function handleHover(comic, e) {
  const currentImageUrl = e.target.src;

  if (currentImageUrl.endsWith(placeholderImage)) {
    const localImageUrl = `./img${comic.imagen}${comic.num}.jpg`;
    e.target.src = localImageUrl;
  } 
}