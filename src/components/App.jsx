import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import withRouter from './withRouter.jsx';
import Header from '../shared/components/layout/Header';
import '../index.css';
import Home from './Home';
import Reading from './Reading';
import Omnibus from './Omnibus';
import Minimal from './Minimal';
import ComicInfo from './ComicInfo';
import Error404 from './Error/404';
import About from './About/index.jsx';

import Footer from '../shared/components/layout/Footer';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/readingorder" component={Reading} />
        <Route path="/minimal" component={Minimal} />
        <Route path="/omnibus" component={Omnibus} />
        <Route path="/comicinfo" component={ComicInfo} />
        <Route path="/about" component={About} />
        <Route component={Error404} />
      </Switch>
      
<Footer/>
    </div>
  );
};

const Root = () => (
  <BrowserRouter>
    <Route component={withRouter(App)} />
  </BrowserRouter>
);

export default Root;