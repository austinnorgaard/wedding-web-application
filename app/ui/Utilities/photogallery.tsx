import '@/app/ui/Styles/CSS/PhotoGalleryComponent.css';
import axios from 'axios';
import proposalSurprise from '@/app/ui/Resources/Photos/proposal.jpeg'
import Image from 'next/image';

export default async function PhotoGallery() {
  const imageArray = await fetchData();

  async function fetchData () {
    const imagesResponse: any[] = [];
    var imageArray: any[] = [];
    await axios.all([
      axios.get(`https://weddingapi.norgaardfamily.com/https://libertykifer.smugmug.com/services/api/json/1.4.0/?galleryType=album&albumId=416997567&albumKey=rx2Ptc&nodeId=b7VTN9&PageNumber=0&imageId=0&imageKey=&returnModelList=true&PageSize=24&imageSizes=L%2CXL&method=rpc.gallery.getalbum`),
      axios.get(`https://weddingapi.norgaardfamily.com/https://libertykifer.smugmug.com/services/api/json/1.4.0/?galleryType=album&albumId=416997567&albumKey=rx2Ptc&nodeId=b7VTN9&PageNumber=2&imageId=0&imageKey=&returnModelList=true&PageSize=24&method=rpc.gallery.getalbum`)
    ]).then((responses) => {
      responses.forEach((resp) => {
        imagesResponse.push(resp.data.Images);
      })
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
    })
    return imageArray;
  }

  return (
    <div className='Container PhotoGallery ProposalImages flex flex-row flex-wrap justify-between'>
      <div className='PhotoGallery ProposalImageBox'>
        <Image className='PhotoGallery ProposalImage grow w-auto h-auto' src={proposalSurprise} alt="" width={500} height={500} style={{objectFit: "contain"}}></Image>
      </div>
      {imageArray.map((image, id) => (
        <div className='PhotoGallery ProposalImageBox' key={id}>
            <Image className='PhotoGallery ProposalImage grow w-auto h-auto' src={image.url} alt="" width={500} height={500} style={{objectFit: "contain"}}></Image>
          </div>
      ))}
    </div>
  );
}