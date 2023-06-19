import React from 'react';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';

const withRouter = (Component) => {
  const WithRouterComponent = (props) => {
    const history = useHistory();
    const location = useLocation();
    const params = useParams();
    const match = useRouteMatch();

    return (
      <Component
        {...props}
        history={history}
        location={location}
        params={params}
        match={match}
      />
    );
  };

  return WithRouterComponent;
};

export default withRouter;