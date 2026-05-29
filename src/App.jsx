import Hero from "./components/Hero";
import CourseDetails from "./components/CourseDetails";
import AboutUs from "./components/AboutUs";
// import WhyUs from "./components/WhyUs";
import WhyChooseEngineering from "./components/WhyChooseEngineering";
import ApplyProcess from "./components/ApplyProcess";
import TopRecruiters from "./components/TopRecruiters";
import NewSection from "./components/NewSection";
import CampusHighlightsSection from "./components/CampusHighlightsSection";
import StudentClubsSection from "./components/StudentClubsSection";
import FAQ from "./components/FAQ";




import ProgramOverview from "./components/ProgramOverview";
// import RecruitersStats from "./components/RecruitersStats";
// import OurCourse from "./components/OurCourse";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
          <AboutUs />
 
      {/* <CourseDetails /> */}
  
    

      {/* <RecruitersStats /> */}
        <TopRecruiters />
             <ProgramOverview />
      {/* <OurCourse /> */}
      <WhyChooseEngineering />
      <ApplyProcess />
    
      <NewSection />
      <CampusHighlightsSection />
      <StudentClubsSection />
      <FAQ />
        {/* <WhyUs /> */}
      {/* <CampusHighlight /> */}
      <Footer />
    </>
  );
}

export default App;
