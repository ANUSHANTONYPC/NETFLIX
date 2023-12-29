import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div className="container-fluid">
      
      <div>
        <Nav/>
        <Banner fetchURL={requests.fetchNetflixOriginals}/>
      </div>
      <div>
        <Row isPoster={true} title='NetflixOriginals' fetchURL={requests.fetchNetflixOriginals}/>
        <Row title='Trending Movies' fetchURL={requests.fetchTrending}/>
        <Row title='Top Rated Movies' fetchURL={requests.fetchTopRated}/>
        <Row title='Action Movies' fetchURL={requests.fetchActionMovies}/>
        <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies}/>
        <Row title='Horror Movies' fetchURL={requests.fetchHorrorMovies}/>
        <Row title='Romance Movies' fetchURL={requests.fetchRomanceMovies}/>
        <Row title='Documenteries' fetchURL={requests.fetchDocumentaries}/>
      </div>
      
    </div>
  );
}

export default App;
