import gplay from "../index.js";
import { assert as assert$0 } from "chai";
'use strict';
const assert = { assert: assert$0 }.assert;
describe('Suggest method', () => {
    it('should return five suggestion for a common term', () => gplay.suggest({ term: 'p' })
        .then((results) => {
        assert.equal(results.length, 5, `expected ${results} to have 5 elements`);
        results.map((r) => assert.include(r.toLowerCase(), 'p'));
    }));
    it('should return different results for different languages', () => Promise.all([
        gplay.suggest({ term: 'p' }),
        gplay.suggest({ term: 'p', country: 'fr', lang: 'fr' })
    ])
        .then(([resultsEn, resultsFr]) => {
        assert.notSameOrderedMembers(resultsEn, resultsFr, `expected ${resultsEn} and ${resultsFr} not to be the same`);
    }));
});
