import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import galleryItem from '../static/gallery.js';
const GalleryPage = () => {
  return (
    <>
      <div className={'about'}>
        <div className={'about-bg'} />
        <h1
          className={'container'}
          data-aos="zoom-in"
        >
          Gallery
        </h1>
      </div>
      <div className={'container gallery'}>
        {galleryItem.map((item, index) => (
          <div
            key={index}
            className={`gallery-item`}
          >
            <Carousel
              data-aos="fade-right"
              images={item.images}
              hasMediaButton={false}
              hasIndexBoard={false}
              hasThumbnailsAtMax
              shouldMaximizeOnClick
              className={'slider'}
            />
            <div
              data-aos="fade-left"
              className={'gallery-content'}
            >
              <h3>{item.title}</h3>
              <p>{item.descriptions}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default GalleryPage;
