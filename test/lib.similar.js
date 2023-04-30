import { assert as assert$0 } from "chai";
import gplay from "../index.js";
import { assertValidApp as assertValidApp$0 } from "./common.js";
'use strict';
const assert = { assert: assert$0 }.assert;
const assertValidApp = { assertValidApp: assertValidApp$0 }.assertValidApp;
describe('Similar method', () => {
    it('should fetch a valid application list', () => {
        return gplay.similar({ appId: 'com.mojang.minecraftpe' })
            .then((apps) => apps.map(assertValidApp));
    });
    it('should fetch games from different developers', () => {
        return gplay.similar({ appId: 'com.mojang.minecraftpe' })
            .then((apps) => assert.isTrue(apps.some(app => app.developer !== apps[0].developer)));
    });
});
