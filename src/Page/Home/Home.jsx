import AboutSection from "./AboutSection/AboutSection";
import HomeBanner from "./Banner/HomeBanner";
import ContactForm from "./ContactForm/ContactForm";
import PhotoGallary from "./PhotoGallary";
import PopularClassHome from "./PopularClass/PopularClassHome";
import PopularInstructor from "./PopularInstructor/PopularInstructor";
import ReviewSection from "./ReviewSection";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <AboutSection />
      <PopularClassHome />
      <PhotoGallary />
      <PopularInstructor />
      <ContactForm />
      <ReviewSection />
    </div>
  );
};

export default Home;
