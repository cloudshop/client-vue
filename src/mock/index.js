import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import data from './data.js';
import Classify from './Classify.js'
const mock = new MockAdapter(axios);
mock.onGet('/HomePage').reply((config) => {
    return new Promise((resolve, reject) => {
        resolve([200, data]);
    });
});
mock.onGet('/Classify').reply((config) => {
    return new Promise((resolve, reject) => {
        resolve([200, Classify]);
    });
});