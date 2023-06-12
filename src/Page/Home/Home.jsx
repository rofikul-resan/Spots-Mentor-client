import HomeBanner from "./Banner/HomeBanner";
import PhotoGallary from "./PhotoGallary";
import PopularClassHome from "./PopularClass/PopularClassHome";
import PopularInstructor from "./PopularInstructor/PopularInstructor";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <PopularClassHome />
      <PhotoGallary />
      <PopularInstructor />
    </div>
  );
};

export default Home;
