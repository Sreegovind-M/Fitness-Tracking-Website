import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import NavBar from './Components/NavigationBar/NavBar';
import Footer from './Components/Footer/Footer';
import Challenge from './Components/Challenge/Challenge';
import ChallengeHome from './Components/Challenge/ChallengeHome/ChallengeHome';
import MainChallenge from './Components/Challenge/MainChallenge/MainChallenge';
import Workout from './Components/Challenge/Workout/Workout';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/challengeHome" element={<ChallengeHome />} />
          <Route path="/mainChallenge" element={<MainChallenge />} />
          <Route path='/workout' element={<Workout/>}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
