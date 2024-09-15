import { useEffect, useState } from 'react';
import './PhotoGalleryComponent.scss';
import axios from 'axios';
import proposalVideo from '../../../proposal.mov'
import proposalSurprise from '../../../proposal.jpeg'

function PhotoGallery() {
     // eslint-disable-next-line
  const [imagesResponse, setImagesResponse] = useState([]);
   // eslint-disable-next-line
  var [imageArray, setImage] = useState([]);
  const [load, setLoad] = useState("unloaded");

  useEffect(() => {
    axios.all([
      axios.get('https://weddingapi.norgaardfamily.com/https://libertykifer.smugmug.com/services/api/json/1.4.0/?galleryType=album&albumId=416997567&albumKey=rx2Ptc&nodeId=b7VTN9&PageNumber=0&imageId=0&imageKey=&returnModelList=true&PageSize=24&imageSizes=L%2CXL&method=rpc.gallery.getalbum'),
      axios.get("https://weddingapi.norgaardfamily.com/https://libertykifer.smugmug.com/services/api/json/1.4.0/?galleryType=album&albumId=416997567&albumKey=rx2Ptc&nodeId=b7VTN9&PageNumber=2&imageId=0&imageKey=&returnModelList=true&PageSize=24&method=rpc.gallery.getalbum")
    ]).then((responses) => {
      responses.forEach((resp) => {
        imagesResponse.push(resp.data.Images);
      })
    })
    .then(function () {
    }).then (function () {
      // eslint-disable-next-line
      for (let i = 0; i < imagesResponse.length; i++) {
        for (let j = 0; j < imagesResponse[i].length; j++) {
          imageArray.push({
            url: imagesResponse[i][j].Sizes.X2.url
          });
        }
      }
      let temp = imageArray[18].url
      let temp2 = imageArray[22].url

      imageArray[18].url = temp2;
      imageArray[22].url = temp;
      setLoad("loaded");
    })
  }, // eslint-disable-next-line
  [load]);

  console.log(imageArray);

  return (
    <div className="PhotoGallery">
      
      <div className="MainContainer" id="PhotoGalleryMainContainer">
        <div className="Container PhotoGallery PhotoGalleryItems">
          <div className="Container PhotoGallery PhotoGalleryItem ProposalBox">
            <h1>Proposal</h1>
            <div className='Container PhotoGallery ProposalImages'>
              <div className='PhotoGallery ProposalImageBox'>
                <video controls muted autoPlay className='PhotoGallery ProposalImage'>
                  <source src={proposalVideo}/>
                </video>
              </div>
              <div className='PhotoGallery ProposalImageBox'>
                <img className='PhotoGallery ProposalImage' src={proposalSurprise} alt=""></img>
              </div>
              {imageArray.map((image, key) => (
                <div className='PhotoGallery ProposalImageBox'>
                   <img className='PhotoGallery ProposalImage' src={image.url} alt=""></img>
                 </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;