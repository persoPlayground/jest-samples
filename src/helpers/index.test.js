import React from 'react';
import {getMaxId} from './index.js';

describe('max helper', () => {
    it('should return the max Id', () => {
        const ids = [1,2,3];
    expect(getMaxId(ids)).toBe(3);
    });
    
    it('should return 0', () => {
        const ids = [];
    expect(getMaxId(ids)).toBe(0);
    });
});

