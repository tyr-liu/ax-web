'use strict';

import request from 'superagent';

const buildUrl = url =>`http://localhost:5001${url}`;

const resultHandler =
    (resolve, reject) =>
        (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res.body);
            }
        };

export default class WebApi {
    static get = url => new Promise((resolve, reject) => {
        request.get(buildUrl(url)).end(resultHandler(resolve, reject));
    });

    static post = (url, data) => new Promise((resolve, reject) => {
        request.post(buildUrl(url), data).end(resultHandler(resolve, reject));
    });

    static put = (url, data) => new Promise((resolve, reject) => {
        request.put(buildUrl(url), data).end(resultHandler(resolve, reject));
    });

    static delete = url => new Promise((resolve, reject) => {
        request.delete(buildUrl(url)).end(resultHandler(resolve, reject));
    });
};