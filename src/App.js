import { Routes, Route } from "react-router-dom"
import { useState } from "react";
import Home from "./pages/Home";
import './App.css';
import { PrimeReactProvider } from "primereact/api";

const App = () => {

  //const [users, setUsers] = useState(mockUsers)
  return (
      <>
      <PrimeReactProvider>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/signup" element={<SignUp />} />
        <Route path="/activityindex" element={<ActivityIndex />} />
        <Route path="/activityshow" element={<ActivityShow />} />
        <Route path="/activitynew" element={<ActivityNew />} />
        <Route path="/activityedit" element={<ActivityEdit />} />
        <Route path="/buddyprofile" element={<BuddyProfile />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      </PrimeReactProvider>

      
      </>
  );
}

export default App;
