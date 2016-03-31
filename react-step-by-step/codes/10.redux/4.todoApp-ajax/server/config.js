'use strict';
const path = require('path');
const os = require('os');

const api = require('./api');

const config = {
    port: 5001,
    mws: [
        {
            entry: api.entry,
            opts: {}
        }
    ],
    dc: {
        url: "sqlite://sqlite:sqlite@localhost:5432/sqlite",
        opts: {
            storage: path.join(__dirname, 'db', 'test.db'),
            define: {
                "timestamps": false,
                "freezeTableName": true
            }
        },
        models: [api.models]
    },
    logger: {
        level: 'debug',
        json: false,
        filename: path.join(__dirname, 'log', 'runtime.txt'),
        colorize: true,
        maxsize: 1024 * 1024 * 5,
        rotationFormat: false,
        zippedArchive: true,
        maxFiles: 10,
        prettyPrint: true,
        label: '',
        timestamp: true,
        eol: os.EOL,
        tailable: true,
        depth: null,
        showLevel: true,
        maxRetries: 1
    }
};

module.exports = config;