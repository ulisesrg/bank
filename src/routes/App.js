import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/App2.scss';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import Login2 from '../containers/Login2';
import Home2 from '../containers/Home2';
import Transfer from '../containers/Transfer';

const App = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {/* <Route exact path='/' component={Home} /> */}
          {/* <Route exact path='/login' component={Login} /> */}
          {/* <Route exact path='/register' component={Register} /> */}
          {/* <Route exact path='/player/:id' component={Player} /> */}
          <Route exact path='/login2' component={Login2} />
          <Route exact path='/home2' component={Home2}>
            {!hasUser && <Redirect to='/login2' />}
          </Route>
          <Route exact path='/transfer' component={Transfer}>
            {!hasUser && <Redirect to='/login2' />}
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
// export default App;

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(App);
