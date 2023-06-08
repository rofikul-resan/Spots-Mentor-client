import HomeBanner from "./Banner/HomeBanner";
import PopularClassHome from "./PopularClass/PopularClassHome";
import PopularInstructor from "./PopularInstructor/PopularInstructor";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <PopularClassHome />
      <PopularInstructor />
    </div>
  );
};

export default Home;
