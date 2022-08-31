import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import request from "../Requests";
import "./HomeScreen.css";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/* Row(s) */}
      <Row
        title="Netflix Originals"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      {/* <Row title="Top Rated" fetchUrl={request.fet} /> */}
      {/* <Row title="Action Movies" fetchUrl={request.f} /> */}
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
