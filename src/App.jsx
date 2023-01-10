// import logo from "./logo.svg";
import './App.css';
import News from './/Components/News';
import Date from './/Components/Date';
import Navbar from './Components/Navbar';
import NewsItem from './Components/NewsItem';
// import NewsItem from './Components/NewsItem';
// import NewsList from "./Components/NewsList";
// import n1 from './images/n1.png';
// import n2 from './images/n2.png';
// import n3 from './images/n3.png';
// import n4 from './images/n4.png';
// import n5 from './images/n5.png';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<News />} />
          <Route path='/latest-news' element={<NewsItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
