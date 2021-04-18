import React from 'react'
import Blue from './Assets/blue.JPG'
import Boat from './Assets/boat.JPG'
import Building from './Assets/building.JPG'
import Yellow from './Assets/yellow.JPG'
import Train from './Assets/train.JPG'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const images = [
    {
      original:  Blue,
      thumbnail: Blue,
    },
    {
      original: Boat,
      thumbnail:Boat,
    },
    {
      original: Building,
      thumbnail: Building,
    },
    {
      original: Yellow,
      thumbnail: Yellow,
    },
    {
      original: Train,
      thumbnail: Train,
    },
  ];
  
function Gallary(){
   return <ImageGallery style={{width:'50%', height:'50%'}} items={images}/>
}
    
      export default Gallary;
  