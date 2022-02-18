import logo from "./logo.svg";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import Review from "./components/Review/Review";
import AllReviews from "./components/AllReviews/AllReviews";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopCompanies from "./components/TopCompanies/TopCompanies";
import SingleResource from "./components/SingleResource/SingleResource";
import Categories from "./components/Categories/Categories";
import AllCategoriesJobs from "./components/AllCategoriesJobs/AllCategoriesJobs";
import JobStatus from "./components/JobStatus/JobStatus";
import AllJobStatus from "./components/AllJobStatus/AllJobStatus";
import Locations from "./components/Locations/Locations";
import AllLocationJobs from "./components/AllLocationJobs/AllLocationJobs";
import FilteredJobs from "./components/Filteredjobs/Filteredjobs";
import Header from "./components/Header/Haeder";
import Footer from "./components/Footer/Footer";
import JobDetails from "./components/JobDetails/JobDetails";
import CandidatesList from "./components/CandidatesList/CandidatesList";
import SingleCandidate from "./components/CandidatesList/SingleCandidate";
import LatestJobs from "./components/LatestJobs/LatestJobs";
import CareerGuide from "./components/CareerGuide/CareerGuide";
import ResumeTips from "./components/ResumeTips/ResumeTips";
import CoverLetterTips from "./components/CoverLetterTips/CoverLetterTips";
import InterviewTips from "./components/InterviewTips/InterviewTips";
import Contact from "./components/Contact/Contact";
import Faq from "./components/Faq/Faq";
import FaqCustom from "./components/FaqCustom/FaqCustom";
import AddJob from "./components/AddJob/AddJob";
import About from "./components/About/About";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            {/* Shaon's Route  */}
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/allreviews">
              <AllReviews></AllReviews>
            </Route>

            {/* Rifat's Route */}
            <Route path="/resource/:id">
              <SingleResource />
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/faq">
              <Faq></Faq>
            </Route>

            {/* Sadia's Route */}
            <Route path="/categories">
              <Categories></Categories>
            </Route>
            <Route path="/categoryjobs/:categoryName">
              <AllCategoriesJobs></AllCategoriesJobs>
            </Route>
            <Route path="/status">
              <JobStatus></JobStatus>
            </Route>
            <Route path="/jobstatus/:statusName">
              <AllJobStatus></AllJobStatus>
            </Route>
            <Route path="/locations">
              <Locations></Locations>
            </Route>
            <Route path="/locationjobs/:locationName">
              <AllLocationJobs></AllLocationJobs>
            </Route>
            <Route path="/filter">
              <FilteredJobs></FilteredJobs>
            </Route>
            <Route path="/jobdetails/:jobId">
              <JobDetails></JobDetails>
            </Route>
            <Route path="/careerguide">
              <CareerGuide></CareerGuide>
            </Route>
            <Route path="/resumetips">
              <ResumeTips></ResumeTips>
            </Route>
            <Route path="/coverletter">
              <CoverLetterTips></CoverLetterTips>
            </Route>
            <Route path="/interview">
              <InterviewTips></InterviewTips>
            </Route>
            {/* Razu's Route */}
            <Route path="/candidates">
              <CandidatesList></CandidatesList>
            </Route>
            <Route path="/candidates/:candidateID">
              <SingleCandidate></SingleCandidate>
            </Route>
            <Route path="/latestjobs">
              <LatestJobs></LatestJobs>
            </Route>
            {/* Nuzhat's Route  */}
            <Route path="/postJob">
              <AddJob></AddJob>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;