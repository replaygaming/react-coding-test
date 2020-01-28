import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  const MainRouteComponent = () => (<div>Main route</div>);
  const SecondRouteComponent = () => (<div>Second route</div>);
  const ThirdRouteComponent = () => (<div>Third route</div>);
  const routes = [
    {
      path: '/',
      exact: true,
      component: MainRouteComponent,
    },
    {
      path: '/second-route',
      component: SecondRouteComponent,
    },
    {
      path: '/third-route',
      component: ThirdRouteComponent,
    },
  ];

  describe('render', () => {
    it('should render a react router Switch component containing all the routes', () => {
      const wrapper = shallow(<App routes={routes} />);
      expect(wrapper.find('Switch').length).toEqual(1);
      const routesComponentsList = wrapper.find('Route');
      const routesLength = routesComponentsList.length;
      expect(routesLength).toEqual(routes.length);
      let routeComponentProps;
      for (let i = 0; i < routesLength.length; i += 1) {
        routeComponentProps = routesComponentsList.at(i).props();
        expect(routeComponentProps.path).toEqual(routes[0].path);
        expect(routeComponentProps.exact).toEqual(routes[0].exact);
        expect(routeComponentProps.component).toEqual(routes[0].component);
      }
    });
  });
});
