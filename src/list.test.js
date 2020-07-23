import List from './List';
import STORE from './STORE';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

describe('smoke and snapshot tests',() =>{
it('generates list of cards',()=>{
const div = document.createElement('div');
ReactDOM.render(<List header='test' cards={[{id:"0", title:"test title", content:"test content"}]}/>,div)
ReactDOM.unmountComponentAtNode(div);
});
it('renders to the ui',() =>{
   const tree = renderer 
.create(<List header='test' cards={[{id:"0", title:"random words go here", content:"test content"}]} />)
   .toJSON();
   expect(tree).toMatchSnapshot();
});
});