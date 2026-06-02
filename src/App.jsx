import Hero from "./components/Hero";
import CourseDetails from "./components/CourseDetails";
import AboutUs from "./components/AboutUs";
// import WhyUs from "./components/WhyUs";
import WhyChooseEngineering from "./components/WhyChooseEngineering";
import ApplyProcess from "./components/ApplyProcess";
import TopRecruiters from "./components/TopRecruiters";
import CampusHighlights from "./components/CampusHighlights";
import FAQ from "./components/FAQ";
import ProgramOverview from "./components/ProgramOverview";
import RecruitersStats from "./components/RecruitersStats";
import OurCourse from "./components/OurCourse";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <CourseDetails />
      <TopRecruiters />
      <RecruitersStats />
      <AboutUs />
      <ProgramOverview />
      <WhyChooseEngineering />
      <OurCourse />
      <CampusHighlights />
      <ApplyProcess />
      <FAQ />
      {/* <WhyUs /> */}
      <Footer />
    </>
  );
}

export default App;
