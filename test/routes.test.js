const request = require('supertest');
const { setupMongo }  = require('./test.setup');
const { app } = require('../src/server');

setupMongo('healthCheck-testing');

test('HealthCheck should return OK', async () =>{
    const res = await request(app).get('/healthcheck');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'OK' });
});

test('Helathcheck should return not found', async () => {
    const res = await request(app).get('/helthcheck');

    expect(res.status).toBe(404);
});