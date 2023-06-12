import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import SectionHeader from "../../Components/SectionHeader";

const PhotoGallary = () => {
  const images = [
    { original: "/banner1.jpg", thumbnail: "/banner1.jpg" },
    { original: "/banner2.jpg", thumbnail: "/banner2.jpg" },
    { original: "/banner3.jpg", thumbnail: "/banner3.jpg" },
    { original: "/banner4.jpg", thumbnail: "/banner4.jpg" },
    { original: "/banner5.jpg", thumbnail: "/banner5.jpg" },
  ];
  return (
    <div className="my-10">
      <SectionHeader title={"View Our Photo Gallery"} />
      <div className=" px-6">
        <ReactImageGallery
          items={images}
          thumbnailPosition="left"
          lazyLoad={true}
          autoPlay={true}
          showNav={false}
        />
      </div>
    </div>
  );
};

export default PhotoGallary;
