'use strict';

import { Filter } from '../../../../src/SoundModule/Effectors/Filter';

describe('Filter TEST', () => {
    describe('Filter#params', () => {
        const filter = new Filter(audiocontext, 1024);

        it('should return associative array', () => {
            expect(filter.params()).toEqual({
                'state'     : false,
                'type'      : 'lowpass',
                'frequency' : 350,
                'Q'         : 1,
                'gain'      : 0,
                'range'     : 0.1,
                'attack'    : 0.01,
                'decay'     : 0.3,
                'sustain'   : 1,
                'release'   : 1
            });
        });
    });
});
