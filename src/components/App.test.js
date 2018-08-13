import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {

    const app = shallow(<App />);
    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });
    
    it('initilizes the `state` as an empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    });
    

    describe('When clicking the Add button', () => {
        const id = 1;
        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        });

        afterEach(() => {
            app.setState({ gifts: []});
        });
        it('adds a new gifts to `state`', () => {
            expect(app.state().gifts).toEqual([{ id}]);
        });
        
        it('adds a new gift to the rendred list', () => {
            expect(app.find('.gift-list').children().length).toEqual(1);
        });

        it('creates a gift component', () => {

            expect(app.find('Gift').exists()).toBe(true);
        });

        describe('when user wants to remove the last added gift', () => {
          beforeEach(() => {
            app.instance().removeGift(id);
          });

          it('removes the added gift', () =>{
            expect(app.state().gifts).toEqual([]);
          });

        });

    });
   
});
