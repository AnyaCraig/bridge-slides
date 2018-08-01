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

const contentModules = [
  {
    path: "functional-programming",
    deck: functionalProgrammingSlideList,
    title: "Functional Programming",
  },
  {
    path: "react",
    deck: reactSlideList,
    title: "React",
  },
];

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

  createRoute = (module, key) => {
    return (
      <Route path={`/${module.path}/`} key={key} render={(props) => this.renderSlideDeck(props, module.deck)} />
    );
  }

  createRouteList = (modules) => {
    return modules.map((module, i) => this.createRoute(module, i));
  }

  createLinkList = (modules) => {
    return (
      <ul>
        {
          modules.map((module, i) => {
            return (
              <li>
                <p>
                  <Link className="slide-deck-link" to={`/${module.path}/#/0`}>Start {module.title} from the beginning</Link>
                </p>
                <p>
                  <Link className="slide-deck-link" to={`/${module.path}/`}>Start where you left off in {module.title}</Link>
                </p>
              </li>
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <Router>
        <div className="presentation-container">
          <div className="routes-list">
            {this.createRouteList(contentModules)}
          </div>
          <div className="links-list">
            <h2>Choose a slide deck by topic:</h2>
            {this.createLinkList(contentModules)}
          </div>
        </div>
      </Router>
    );
  }
}
