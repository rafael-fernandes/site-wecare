import React from 'react';
import Header from '../components/Header.js';
import Banner from './../components/Banner.js';
import Problem from './../components/Problem.js';
import Solution from './../components/Solution.js';
import How from './../components/How.js';
import Campaigns from '../components/Campaigns.js';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Problem />
      <Solution />
      <How />
      <Campaigns />
    </>
  )
};

export default Home;
