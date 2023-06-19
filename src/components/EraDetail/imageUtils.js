
async function createImage(imageUrl) {
    try {
      const image = new Image();
      await new Promise(resolve => {
        image.onload = () => resolve();
        image.onerror = () => resolve();
        image.src = imageUrl;
      });
      return image;
    } catch (error) {
      console.error("load image error:",error);
      return new Image();
    }
  }
  
  async function testImageExtensions(comic, imageUrl) {
    try {
      const originalImage = await createImage(imageUrl);
      const isOriginalImageLoaded = originalImage.width !== 0 && originalImage.height !== 0;
      if (isOriginalImageLoaded) {
        return imageUrl;
      }
    } catch (error) {
   }
  
    try {
      // si no es jpg intenta jpeg
      const imageUrlWithJpegExtension = imageUrl.replace('.jpg', '.jpeg');
      const imageWithJpegExtension = await createImage(imageUrlWithJpegExtension);
      const isJpegImageLoaded = imageWithJpegExtension.width !== 0 && imageWithJpegExtension.height !== 0;
  
      if (isJpegImageLoaded) {
        return imageUrlWithJpegExtension;
      }
    } catch (error) {
    try {
      const imageUrlWithJpgExtension = imageUrl.replace('.jpeg', '.jpg');
      const imageWithJpgExtension = await createImage(imageUrlWithJpgExtension);
      const isJpgImageLoaded = imageWithJpgExtension.width !== 0 && imageWithJpgExtension.height !== 0;
  
      if (isJpgImageLoaded) {
        return imageUrlWithJpgExtension;
      }
    } catch (error) {
   return `./img${comic.imagen}${comic.num}.jpg`;
    }
    }
  


  }
  
  
    export const getImageUrl = async (comic) => {
    const baseUrl = "https://uncannyxmen.net/sites/default/files/images/covers";
    let imageUrl;
    
    switch (comic.leyenda) {
       case "Uncanny X-Men Annual":
         imageUrl = `${baseUrl}/uncanny/uncannyannual${comic.num}.jpg`;
         break;
       case "New Mutants Annual":
         imageUrl = `${baseUrl}/newmutants/newmutantsv01-annual0${comic.num}.jpeg`;
         break;
       case "X-Factor Annual":
         imageUrl = `${baseUrl}/x-factor/x-factorann${comic.num}.jpg`;
         break;
      case "Uncanny X-Men":
        if (comic.num===275) imageUrl= `./img${comic.imagen}${comic.num}.jpg`;
        else imageUrl = `${baseUrl}/uncanny/uncanny${comic.num}.jpg`;
        break;
       case "New Mutants":
         if (comic.num===100) imageUrl = `${baseUrl}/newmutants/newmutantsv01-100.jpeg`;
         else if (comic.num>9) imageUrl = `${baseUrl}/newmutants/newmutantsv01-0${comic.num}.jpeg`; 
         else imageUrl = `${baseUrl}/newmutants/newmutantsv01-00${comic.num}.jpeg`; 
         break;
      case "Excalibur":
        if (comic.num>9) imageUrl = `${baseUrl}/excalibur/excaliburv01-0${comic.num}.jpeg`;
        else imageUrl = `${baseUrl}/excalibur/excaliburv01-00${comic.num}.jpeg`;
        break;
      case "X-Factor":
        imageUrl = `${baseUrl}/x-factor/x-factor${comic.num}.jpg`;
        break;
      case "Wolverine":
        imageUrl = `${baseUrl}/wolverine/wolverine${comic.num}.jpg`;
        break;
      default:
      imageUrl = `./img${comic.imagen}${comic.num}.jpg`;
        break;
    }
  
    try {
      const testedImageUrl = await testImageExtensions(comic, imageUrl);
      return testedImageUrl;
    } catch (error) {
      return `./img/placeholder.png`;
    }
  }
  
  