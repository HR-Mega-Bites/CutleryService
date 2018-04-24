
const { shallow, render } = require('enzyme');
const axios = require('axios');
const React = require('react');
import renderer from 'react-test-renderer';

const TestData = [
  {
    "id": 52,
    "name": "Fantastic Soft Table",
    "description": "Ea tempore rerum assumenda et deserunt consequatur nemo eos. Omnis temporibus voluptas. Eaque veniam laboriosam iusto maxime aut ipsam voluptatum. Ad officiis cum quia hic numquam assumenda unde et. Quo cumque consequatur dolorem distinctio in rerum in at. Voluptatem quia eius velit.",
    "manufacturer": "Kling, Towne and Waelchi",
    "price": "496.00",
    "imageurls": [
        "https://s3-us-west-1.amazonaws.com/kitchen-photos/images/image-1.jpg",
        "https://s3-us-west-1.amazonaws.com/kitchen-photos/images/image-16a.jpg",
        "https://s3-us-west-1.amazonaws.com/kitchen-photos/images/image-1b.jpg"
    ]
  },
  {
    "id": 51,
    "name": "Awesome Soft Computer",
    "description": "Ut officia et nisi maiores possimus hic nostrum. Vel et eos consequatur. Molestiae accusamus rerum eveniet dolores modi reprehenderit.",
    "manufacturer": "Konopelski - Satterfield",
    "price": "458.00",
    "imageurls": [
        "https://s3-us-west-1.amazonaws.com/kitchen-photos/images/image-18.jpg"
    ]
  }
]
// test App
const { App } = require('../client/components/App.jsx')
describe('App.jsx', () => {
  //check on call, grid was rendered
  test('Grid rendered by App', () => {
    const shallowWrapper = shallow(< App />);
    expect(shallowWrapper.find('Grid').length).toBe(1);
    });

  test('App makes get request on mount and updates state with result', () => {
    const spyGet = jest.spyOn(axios, 'get');
    const shallowWrapper = shallow(< App />);
    expect(spyGet).toHaveBeenCalled();
  });
  test('Calling change tool will set state', () => {
    const shallowWrapper = shallow(< App />);
    const spyState = jest.spyOn(shallowWrapper.instance(), 'setState');
    shallowWrapper.instance().changeTool(1);
    expect(spyState).toHaveBeenCalled();
  });
})

const { Detail } = require('../client/components/Detail.jsx');
describe('Detail.jsx', () => {
  test('Detail component and children match snapshot', () => {
  const component = renderer.create(<Detail tool={TestData[0]} />);
  let jsonComponent = component.toJSON();
  expect(jsonComponent).toMatchSnapshot();
  });
});


const { List } = require('../client/components/List.jsx');
describe('List.jsx', () => {
  const spyGet = jest.spyOn(axios, 'get');
  spyGet.mockResolvedValue(TestData);
  const wrapper = shallow(< App />);
  test('List should contain as many items as there are tools', () => {
    expect(wrapper.find(List).length).toBe(1);
    const listWrapper = wrapper.find(List).dive();
    console.dir(listWrapper.find('SingleTool'));
    expect(listWrapper.find('SingleTool').length).toBe(TestData.length);
  });

})

