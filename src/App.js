//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  // TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [possession, setPossession] = useState(false);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="homeAwayBack hasBall">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="homeAwayBack">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          {/* <button className="homeButtons__touchdown">Home Touchdown</button> */}
          <button className="homeButtons__touchdown" onClick={ () => setHomeScore(homeScore + 6) }>
            Home Touchdown      
          </button>
          <button className="homeButtons__fieldGoal" onClick={ () => setHomeScore(homeScore + 3) }>
            Home Field Goal
          </button>
          <button className="homeButtons__extraPoint" onClick={ () => setHomeScore(homeScore + 1) }>
            Home Extra Point
          </button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={ () => setAwayScore(awayScore + 6) }>
            Away Touchdown
          </button>
          <button className="awayButtons__fieldGoal" onClick={ () => setAwayScore(awayScore + 3) }>
            Away Field Goal
          </button>
          <button className="awayButtons__extraPoint" onClick={ () => setAwayScore(awayScore + 1) }>
            Away Extra Point
          </button>
        </div>
      </section>
      <section className="resetButtons">
        <div className="homeReset">
          <button className="resetButtons" onClick={ () => setHomeScore(homeScore = 0) }>
            Home Reset     
          </button>
        </div>
        <div className="awayReset">
          <button className="resetButtons" onClick={ () => setAwayScore(awayScore = 0) }>
            Away Reset     
          </button>
        </div>
      </section>
      <div className="possession">
        <button className="possessionButton">
          Possession
        </button>
      </div>
    </div>
  );
}

export default App;
