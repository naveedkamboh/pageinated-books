import React from 'react';
import { shallow, configure  } from 'enzyme';
import NoResultsFound from './NoResultsFound';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});
describe('NoResultsFound Component tests', () => {
  const component = shallow(<NoResultsFound />);

  describe('Should render without errors', () => {
    it('Should render Col element', () => {
      const elem = component.find('Col');
      expect(elem.length).toBe(1);
    });

    it('Should render Paragraph element', () => {
      const elem = component.find('p');
      expect(elem.length).toBe(1);
    });

    it('Should render Button element', () => {
      const elem = component.find('Button');
      expect(elem.length).toBe(1);
    });
  });

  
});
