import { assert as assert$0 } from "chai";
import gplay from "../index.js";
import R from "ramda";
'use strict';
const assert = { assert: assert$0 }.assert;
describe('Categories method', () => {
    it('should fetch valid list of categories', () => {
        return gplay.categories().then(categories => {
            assert.isArray(categories);
            assert.isTrue(categories.length > 0);
        });
    });
    it('should have all categories from constant list of categories', () => {
        return gplay.categories().then(categories => {
            const categoriesConst = Object.keys(gplay.category);
            assert.deepEqual(R.difference(categories, categoriesConst), [], 'Google Play has categories that are not in "category" constant');
        });
    });
});
