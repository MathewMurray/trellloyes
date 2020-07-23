import Card from './card';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

describe('smoke test and snapshot test',() =>{
it('generates card with title and content',()=>{
const div = document.createElement('div');
ReactDOM.render(<Card />,div)
ReactDOM.unmountComponentAtNode(div);
});

it('renders to the ui',() =>{
    const tree = renderer 
    .create(<Card title = "test card" content = "test content"/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
});
});