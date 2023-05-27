import "./App.css";
import BodyContent from "./Components/BodyContent";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";

function App() {
  const userDetails = {
    name: "Rahul Yadav",
    mobile: "+919427689989",
    email: "abcd12@gmail.com",
    website: "www.abcd.com",
    location: "India",
  };

  const userProject = {
    project1: "Crypto Currency Tracker - Facebook Inc",
    project2: "College Website - Facebook Inc",
    project3: "Air Pollution Monitoring Sysytem - Facebook Inc",
    project4: "Wireless Notice Board  - NodeMCU",
  };

  const userSkills = {
    skill1: "JavaScript",
    skill2: "HTML",
    skill3: "CSS",
    skill4: "React",
    skill_1_Rate: 70,
    skill_2_Rate: 65,
    skill_3_Rate: 85,
    skill_4_Rate: 80,
  };

  return (
    <>
      <div className="row">
        <SideBar data={userDetails}></SideBar>
        <BodyContent data={userProject} skill={userSkills}></BodyContent>
      </div>
      <Footer />
    </>
  );
}

export default App;
