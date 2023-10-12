import './App.css';
/* TODO: 
- Resize all images into 1 standard size
- Make carousel fit inside viewport
*/
function App() {
  return (
    <><center><h1 className="InPageTitle">WW1 Primary Sources - Paintings</h1></center>
<div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/img/vimy-monument-cropped.jpg" className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src="/img/crest-of-vimy-ridge-cropped.jpg" className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src="/img/the-taking-of-vimy-ridge-cropped.jpg" className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src="/img/cemetary-on-vimy-ridge-cropped.jpg" className="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>
  );
}

export default App;
