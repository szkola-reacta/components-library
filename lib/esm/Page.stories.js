var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { Page } from './Page';
import * as HeaderStories from './Header.stories';
export default {
    title: 'Example/Page',
    component: Page,
};
var Template = function (args) { return React.createElement(Page, __assign({}, args)); };
export var LoggedIn = Template.bind({});
LoggedIn.args = __assign({}, HeaderStories.LoggedIn.args);
export var LoggedOut = Template.bind({});
LoggedOut.args = __assign({}, HeaderStories.LoggedOut.args);
