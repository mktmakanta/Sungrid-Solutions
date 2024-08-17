import "./App.css";
import Footer from "./Footer";

import HomePage from "./HomePage";
import OurService from "./OurServicePage";
import FaqPage from "./faqPage";
import Header from "./header";
import RecentWorksPage from "./recentWorks";
import TestimonialPage from "./testimonialPage";

function MainPage() {
  return (
    <>
      <div className=" pt-5 md:px-14 lg:px-0 bg-white text-black relative">
        {/* <div className="absolute  bg-purple-900 h-24 w-60 left-6 lg:lrft-12 rounded-full top-40 blur-3xl"></div>
        <div className="absolute  bg-teal-300 h-24 w-40 left-10 lg:left-20 rounded-full top-20 blur-3xl"></div> */}
        <Header />
        <HomePage />
        <OurService />
        <RecentWorksPage />
        <TestimonialPage />
        <FaqPage />
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
