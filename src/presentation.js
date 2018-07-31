// Import React
import React from 'react';
import { Deck } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import { colours, fontFamilies } from './theme';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { functionalProgrammingSlideList, reactSlideList } from './slideDecks'; // get the slide decks


// Require CSS
require('normalize.css');
require('./style.css');

const theme = createTheme(colours, fontFamilies);

export default class Presentation extends React.Component {

  renderSlides = (slideList) => {
    return slideList.map((WorkshopSlide, i) => (
      <WorkshopSlide key={'slide' + i} />
    ));
  }

  renderSlideDeck = (routeProps, slideList) => { 
    return (
      <Deck transition={[]} transitionDuration={0} progress="bar" theme={theme}>
        { this.renderSlides(slideList) }
      </Deck>
    );
  }

  render() {
    return (
      <Router>
        <div className="presentation-container">
          <Route path='/functional-programming/' render={(props) => this.renderSlideDeck(props,functionalProgrammingSlideList)} />
          <Route path='/react/' render={(props) => this.renderSlideDeck(props,reactSlideList)} />
          <div className="links-list">
          <h2>Choose a slide deck by topic:</h2>
            <ul>
              <li>
                <Link className="header-link" to='/functional-programming/'>Functional Programming</Link>
              </li>
              <li>
                <Link className="header-link" to='/react/'>React</Link>
              </li>
            </ul>
          </div>
        </div>
      </Router>
    );
  }
}
