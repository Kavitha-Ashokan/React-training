import React from 'react';
import App from './index';
 
describe("Index Testing" ,()=>{
    test("render the title of index", ()=>{
        const {getByText} = renderer(<App />);
        const linkElement = getByText("Shipping Address");
        expect(linkElement).toBeInTheDocument();
    });
});