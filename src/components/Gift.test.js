import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {

const mockRemove = jest.fn();
const id = 1;
//props interface
const props = { gift: {id}, removeGift: mockRemove };

const gift = shallow(<Gift {...props} />);
it('renders correctly', () =>{
   expect(gift).toMatchSnapshot();
});

it('Initilizes a person and gift in `state`', () => {
    expect(gift.state()).toEqual({ person:'', gift:''});
});

describe('when typing in person Input', () => {

    const person =  'Mo';
    beforeEach(() => {
        gift.find('.input-person').simulate('change', { target: { value: person } });
    })
    it('update `state` Person', () =>{
        expect(gift.state().person).toEqual(person);
    });
});


describe('when typing in Gift Input', () => {

    const newGift = 'blabla';
    beforeEach(() => {
        gift.find('.input-gift').simulate('change', { target: { value: newGift}});
    })
    it('updates `state` gift', () => {
        expect(gift.state().gift).toEqual(newGift);
    });
});

describe('when click remove button', () => {

    beforeEach(() =>{
        gift.find('.btn-remove').simulate('click');
    });
    it('calls the removGift callback', () => {
 //mock function: 
        expect(mockRemove).toHaveBeenCalledWith(id);
    });
})
});