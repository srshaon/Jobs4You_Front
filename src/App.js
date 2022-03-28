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
import AddGovJob from "./components/AddGovJob/AddGovJob";
import PdfCreator from "./components/PdfCreator/PdfCreator";
import Apply from "./components/Apply/Apply";
import ManageJob from "./components/ManageJob/ManageJob";
import ManageJobs from "./components/ManageJobs/ManageJobs";
import AccountForm from "./components/ProfileForm/AccountForm";
import Chat from "./components/Chat/Chat";
import Chart from "./components/Chart/Chart";
import Skills from "./components/Skills/Skills";
import ProfileEdit from "./components/ProfileForm/ProfileEdit";
import AllGovJobs from "./components/AddGovJob/AllGovJobs";
import EditGovJob from "./components/AddGovJob/EditGovJob";
import UploadViewResume from "./components/UploadViewResume/UploadViewResume";
import MyJobs from "./components/Myjobs/MyJobs";
import ApplySuccess from "./components/ApplySuccess/ApplySuccess";
import Dashboard from "./components/Dashboard/Dashboard";
import CompanyDetails from "./components/CompanyProfile/CompanyDetails";
import CompanyProfile from "./components/CompanyProfile/CompanyProfile";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SearchResult from "./components/SearchResult/SearchResult";
import Freelancing from "./components/Freelancing/Freelancing";
import Banking from "./components/Banking/Banking";
import HR from "./components/HR/HR";
import RMG from "./components/RMG/RMG";
import AllJobs from "./components/AllJobs/AllJobs";
import NotFound from "./components/NotFound/NotFound";
import ApplyCandidateList from "./components/ApplyCandidateList/ApplyCandidateList";
import PendingJobs from "./components/PendingJobs/PendingJobs";
// import AllCompanies from "./components/AllCompanies/AllCompanies";
import LineChart from "./components/LineChart/LineChart";
import MakeAdmin from "./components/MakeAdmin/MakeAdmin";

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
            <PrivateRoute path="/review">
              <Review></Review>
            </PrivateRoute>
            <Route path="/allreviews">
              <AllReviews></AllReviews>
            </Route>
            <Route path="/alljobs">
              <AllJobs></AllJobs>
            </Route>
            <PrivateRoute path="/pendingjobs">
              <PendingJobs></PendingJobs>
            </PrivateRoute>
            {/* <Route path="/allcompanies">
              <AllCompanies></AllCompanies>
            </Route> */}
            <PrivateRoute path="/applycandidateslist/:jobId">
              <ApplyCandidateList></ApplyCandidateList>
            </PrivateRoute>
            {/* <Route path="/profileform">
              <AccountForm></AccountForm>
            </Route> */}
            <PrivateRoute path="/profileform">
              <AccountForm></AccountForm>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/register">
              <Register></Register>
            </PrivateRoute>
            {/* <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route> */}

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
            <Route path="/chat">
              <Chat></Chat>
            </Route>
            <PrivateRoute path="/chart/:_id">
              <Chart></Chart>
            </PrivateRoute>
            <PrivateRoute path="/skills">
              <Skills></Skills>
            </PrivateRoute>
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
            <PrivateRoute path="/apply">
              <Apply></Apply>
            </PrivateRoute>
            <PrivateRoute path="/uploadviewresume">
              <UploadViewResume></UploadViewResume>
            </PrivateRoute>
            <PrivateRoute path="/myjobs">
              <MyJobs></MyJobs>
            </PrivateRoute>
            <PrivateRoute path="/success">
              <ApplySuccess></ApplySuccess>
            </PrivateRoute>
            <Route path="/freelancing">
              <Freelancing></Freelancing>
            </Route>
            <Route path="/banking">
              <Banking></Banking>
            </Route>
            <Route path="/hr">
              <HR></HR>
            </Route>
            <Route path="/rmg">
              <RMG></RMG>
            </Route>
            <PrivateRoute path="/linechart">
              <LineChart></LineChart>
            </PrivateRoute>

            {/* Razu's Route */}
            <PrivateRoute path="/candidates/:candidateID">
              <SingleCandidate></SingleCandidate>
            </PrivateRoute>
            <PrivateRoute path="/candidates">
              <CandidatesList></CandidatesList>
            </PrivateRoute>
            <Route path="/latestjobs">
              <LatestJobs></LatestJobs>
            </Route>
            <PrivateRoute path="/add-govjob">
              <AddGovJob></AddGovJob>
            </PrivateRoute>
            <PrivateRoute path="/create-resume">
              <PdfCreator></PdfCreator>
            </PrivateRoute>
            <PrivateRoute path="/profileedit">
              <ProfileEdit />
            </PrivateRoute>

            <Route path="/allgovjobs">
              <AllGovJobs />
            </Route>
            <PrivateRoute path="/edit/:jobId">
              <EditGovJob />
            </PrivateRoute>
            <Route path="/allcompanies">
              <CompanyProfile></CompanyProfile>
            </Route>
            <Route path="/company/:id">
              <CompanyDetails />
            </Route>

            {/* Nuzhat's Route  */}
            <PrivateRoute path="/postJob">
              <AddJob></AddJob>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/managejobs">
              <ManageJobs></ManageJobs>
            </PrivateRoute>
            <Route path="/searchresult">
              <SearchResult></SearchResult>
            </Route>
            <Route path="/pendingJobs">
              <PendingJobs></PendingJobs>
            </Route>

            {/* -------has to be last Route--------- */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
