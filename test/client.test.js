const { shallow, mount, render } = require('enzyme');
const axios = require('axios');
const React = require('react');
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const TestData = [
  {
    id: 52,
    name: 'Fantastic Soft Table',
    description: 'Ea tempore rerum assumenda et deserunt consequatur nemo eos. Omnis temporibus voluptas. Eaque veniam laboriosam iusto maxime aut ipsam voluptatum. Ad officiis cum quia hic numquam assumenda unde et. Quo cumque consequatur dolorem distinctio in rerum in at. Voluptatem quia eius velit.',
    manufacturer: 'Kling, Towne and Waelchi',
    price: '496.00',
    imageurls: [
      'https://s3-us-west-1.amazonaws.com/kitchen-photos/images/image-1.jpg',
      'https://s3-us-west-1.amazonaws.com/kitchen-photos/images/image-16a.jpg',
      'https://s3-us-west-1.amazonaws.com/kitchen-photos/images/image-1b.jpg',
    ],
  },
  {
    id: 51,
    name: 'Awesome Soft Computer',
    description: 'Ut officia et nisi maiores possimus hic nostrum. Vel et eos consequatur. Molestiae accusamus rerum eveniet dolores modi reprehenderit.',
    manufacturer: 'Konopelski - Satterfield',
    price: '458.00',
    imageurls: [
      'https://s3-us-west-1.amazonaws.com/kitchen-photos/images/image-18.jpg',
    ],
  },
];

// test App
const { App } = require('../client/components/App.jsx')
describe('App.jsx', () => {
  //check on call, grid was rendered
  test('Grid rendered by App', () => {
    const shallowWrapper = shallow(< App />);
    expect(shallowWrapper.find('Grid').length).toBe(1);
    });

  test('App makes get request on mount', () => {
    const spy = jest.spyOn(axios, 'get');
    shallow(< App />);

    console.log(spy);
    expect(spy).toHaveBeenCalled();
  });
  //check that on mount, a get request is made to server
  //test that update to tools will trigger re-render
})