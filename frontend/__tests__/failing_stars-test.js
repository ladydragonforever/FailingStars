/* globals jest */

import React from 'react';
import { mount } from 'enzyme';
import FailingStars from '../components/failing_stars/failing_stars';

describe('add star', () => {
    let stars,
        failinStarsWrapper,
        closeModal,
        fetchStar;

    beforeEach(() => {
        stars = [];
        
        closeModal = jest.fn();
        fetchStar = jest.fn();

        const testProps = {
            closeModal,
            fetchStar,
            stars
        };

        failinStarsWrapper = mount(
                <FailingStars {...testProps} />
        )

    });


    it('has a button that add a star when clicked', () => {
        const addButton = failinStarsWrapper.find('.button-add')
        expect(addButton).toBeDefined();

        expect(fetchStar).not.toHaveBeenCalled();
        addButton.simulate('click');
        expect(fetchStar).toBeCalled();
    });

    it('has a button that close the modal when clicked', () => {
        const closeButton = failinStarsWrapper.find('.button-close')
        expect(closeButton).toBeDefined();

        expect(closeModal).not.toHaveBeenCalled();
        closeButton.simulate('click');
        expect(closeModal).toBeCalled();
        
    });
});
