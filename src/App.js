import './App.css';
import React, { useState } from 'react';
/* TODO: 
- Make popup show up and write inferences
*/
function App() {
  const showInference1 = async event => {
    console.log("Show / hide inference 1");
    changeInference1Visibility(!displayInference1);
  }
  const showInference2 = async event => {
    console.log("Show / hide inference 2");
    changeInference2Visibility(!displayInference2);
  }
  const showInference3 = async event => {
    console.log("Show / hide inference 3");
    changeInference3Visibility(!displayInference3);
  }
  const showInference4 = async event => {
    console.log("Show / hide inference 4");
    changeInference4Visibility(!displayInference4);
  }
  const disableInferences = async event => {
    console.log("Show / hide inference 1");
    changeInference1Visibility(false);
    changeInference2Visibility(false);
    changeInference3Visibility(false);
    changeInference4Visibility(false);
  }
  const [displayInference1, changeInference1Visibility] = useState(false);
  const [displayInference2, changeInference2Visibility] = useState(false);
  const [displayInference3, changeInference3Visibility] = useState(false);
  const [displayInference4, changeInference4Visibility] = useState(false);
  return (
    
    <>
<div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" onClick={disableInferences} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" onClick={disableInferences} data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" onClick={disableInferences} data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" onClick={disableInferences} data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" onClick={showInference1}>
    <img src="/img/the-taking-of-vimy-ridge-cropped.jpg" className="d-block w-100 limitImageSize" alt="Depicts the battle of vimy ridge and a field gun firing on German positions"></img>
    </div>
    <div className="carousel-item" onClick={showInference2}>
    <img src="/img/crest-of-vimy-ridge-cropped.jpg" className="d-block w-100 limitImageSize" alt="A lone soldier walking on Vimy Ridge"></img>
    </div>
    <div className="carousel-item" onClick={showInference3}>
    <img src="/img/cemetary-on-vimy-ridge-cropped.jpg" className="d-block w-100 limitImageSize" alt="A cemetary on the battlefield of Vimy Ridge"></img>
    </div>
    <div className="carousel-item" onClick={showInference4}>
      <img src="/img/vimy-monument-cropped.jpg" className="d-block w-100 limitImageSize" alt="The monument of Vimy Ridge with the ghosts of soldiers marching up the hill"></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" onClick={disableInferences} data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" onClick={disableInferences} data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="inferences">
        {displayInference1
          ?   <h1 id="inference1" className="inferenceText">Inference 1</h1>
          : <></>
      }
      {displayInference2
          ?   <h1 id="inference2" className="inferenceText">Inference 2</h1>
          : <></>
      }
      {displayInference3
          ?   <h1 id="inference3" className="inferenceText">Inference 3</h1>
          : <></>
      }
      {displayInference4
          ?   <h1 id="inference4" className="inferenceText">Inference 4</h1>
          : <></>
      }
</div>
</>
  );
}

export default App;
