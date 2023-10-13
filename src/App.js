import './App.css';
/* TODO: 
- Make popup show up and write inferences
*/
const showInference1 = async event => {

}
const showInference2 = async event => {
  
}
const showInference3 = async event => {
  
}
const showInference4 = async event => {
  
}
function App() {
  return (
    <>
<div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="/img/vimy-monument-cropped.jpg" onClick={showInference1} className="d-block w-100 limitImageSize" alt="The monument of Vimy Ridge with the ghosts of soldiers marching up the hill"></img>
    </div>
    <div className="carousel-item">
    <img src="/img/crest-of-vimy-ridge-cropped.jpg" onClick={showInference2} className="d-block w-100 limitImageSize" alt="A lone soldier walking on Vimy Ridge"></img>
    </div>
    <div className="carousel-item">
    <img src="/img/the-taking-of-vimy-ridge-cropped.jpg" onClick={showInference3} className="d-block w-100 limitImageSize" alt="Depicts the battle of vimy ridge and a field gun firing on German positions"></img>
    </div>
    <div className="carousel-item">
      <img src="/img/cemetary-on-vimy-ridge-cropped.jpg" onClick={showInference4} className="d-block w-100 limitImageSize" alt="A cemetary on the battlefield of Vimy Ridge"></img>
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
