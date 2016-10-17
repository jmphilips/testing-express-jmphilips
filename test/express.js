'use strict'

const request = require('supertest')

const app = require('../server')

describe('express', () => {
    it('should respond with Hello World', () => {
        request(app)
            .get('/')
            .expect(200)
            .expect('Hello World')
            .end()
    })
})