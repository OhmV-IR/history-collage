import './App.css';
import React, { useState } from 'react';
/* TODO: 
- Make popup show up and write inferences
*/
function App() {
  const showInference1 = async event => {
    console.log("Show / hide inference 1");
    changeInference1Visibility(!displayInference1);
    document.getElementById("infoAlert").style.zIndex = "-1";
  }
  const showInference2 = async event => {
    console.log("Show / hide inference 2");
    changeInference2Visibility(!displayInference2);
    document.getElementById("infoAlert").style.zIndex = "-1";
  }
  const showInference3 = async event => {
    console.log("Show / hide inference 3");
    changeInference3Visibility(!displayInference3);
    document.getElementById("infoAlert").style.zIndex = "-1";
  }
  const showInference4 = async event => {
    console.log("Show / hide inference 4");
    changeInference4Visibility(!displayInference4);
    document.getElementById("infoAlert").style.zIndex = "-1";
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
    <div id="infoAlert" className="alert alert-info" role="alert">Click on the center of the painting to show inferences</div>
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
  <button className="carousel-control-prev" type="button" id="sideButton1" onClick={disableInferences} data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" id="sideButton2" onClick={disableInferences} data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="inferences">
        {displayInference1
          ?   <h1 id="inference1" className="inferenceText">The focus of this painting is the crew of a field gun firing on German positions during the attack on Vimy ridge. The continuing attack and the persistence of Canadian troops led us to claim a key victory not only for the allies, but for Canada as a power on the world stage. At this stage of the war, the early excitement was gone, support for the war was wavering and losses were mounting from the long, drawn-out trench warfare that wasn’t the swift end to the war that Canadians wanted. This battle helped restore morale to troops and show Canadians that an allied victory and an end to the war was possible, and it might be coming soon.</h1>
          : <></>
      }
      {displayInference2
          ?   <h1 id="inference2" className="inferenceText">A lone soldier walking up the war-torn landscape of Vimy ridge after the battle, implying that he lost many of his friends in the battle. The art of Gyrth Russell painted the war in a different light, showing the true cost of war that Canada was suffering. It might also reference how the soldier has gone through a lot of trauma during his time in the war and that will be difficult to overcome, even after the war inevitably ends. </h1>
          : <></>
      }
      {displayInference3
          ?   <h1 id="inference3" className="inferenceText">This picture was painted by a Lieutenant who realized just how many casualties Canada was suffering and that even victories like Vimy ridge cost us dearly. I think that the grave in the shell refers to shellshock, the name given to what we now know as PTSD during WW1. The soldiers who returned home, often returned without their friends who had died in the service and struggled to reintegrate into society, keep a stable income and secure housing. The trauma that these soldiers received during combat would have been very difficult, if not impossible to overcome. I think that the grave symbolizes that many soldiers were buried by their traumas, figuratively if not literally. </h1>
          : <></>
      }
      {displayInference4
          ?   <h1 id="inference4" className="inferenceText">The ghosts of the soldiers are continuing to march up the ridge even after death because they are all determined in their objective of winning the battle and trying to end the agonizing war they have been fighting for 2 and a half years. The source of their determination originated from the wartime propaganda promising them a land “fit for heroes”, jobs, pensions and everything they wanted in life upon their return from their journey of “patriotism” and adventurism in Europe. </h1>
          : <></>
      }
</div>
</>
  );
}

export default App;
