import React from 'react'
import MainPage from '../components/MainPage';
import requests from '../Request';
import Row from '../components/Row';

const Home = () => {
  return (
    <>
      <MainPage />
      <Row rowID='1' title='Upcoming' fetchURL={requests. requestUpcoming} />
      <Row rowID='2' title='Popular' fetchURL={requests. requestPopular} />
      <Row rowID='3' title='Trending' fetchURL={requests. requestTrending} />
      <Row rowID='4' title='TopRated' fetchURL={requests. requestTopRated} />
      
      
    </>
  )
}

export default Home;
