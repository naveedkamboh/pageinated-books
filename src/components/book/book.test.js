import React from 'react';
import { shallow, configure  } from 'enzyme';
import Book from './book';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

const book = {
 id:1,
 book_title: 'test'  ,
 book_author: [],
 book_pages:10,
 book_publication_year: 1990,
 book_publication_country: 'UK'
}

configure({adapter: new Adapter()});
describe('Book Component tests', () => {
  const component = shallow(<Book book={book}/>);

  describe('Should render without errors', () => {
    it('Should render Col element', () => {
      const elem = component.find('Col');
      expect(elem.length).toBe(1);
    });
  });

 
});
