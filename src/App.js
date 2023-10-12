import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <><center><h1 className="InPageTitle">WW1 Primary Sources - Paintings</h1></center>
    <div id="carousel-sample" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carousel-sample" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#carousel-sample" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#carousel-sample" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#carousel-sample" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#carousel-sample" data-bs-slide-to="4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" alt="" src="/img/vimy-monument.jpg" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" alt="" src="/img/the-taking-of-vimy-ridge.jpg" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" alt="" src="/img/the-crest-of-vimy-ridge.jpg" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" alt="" src="/img/cemetary-on-vimy-ridge" />
    </div>
  </div>
  <a className="carousel-control-prev" data-bs-target="#carousel-sample" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </a>
  <a className="carousel-control-next" data-bs-target="#carousel-sample" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </a>
</div>
</>
  );
}

export default App;
