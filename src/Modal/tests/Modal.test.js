import React from 'react';
import renderer from "react-test-renderer";
import Modal from '../Modal';

const mockDetails={
modalDetails:{
    show:true,
    onHide:jest.fn(),
    values:{}
}
}

it("should render and match the snapshot",()=>{
    const tree = renderer.create( <Modal/> ).toJSON();
    expect(tree).toMatchSnapshot();
})
it("check props correctly rendered",()=>{
    const tree = renderer.create( <Modal modal={mockDetails}/> ).toJSON();
    expect(tree).toMatchSnapshot();
})
