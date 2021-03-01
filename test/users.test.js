const request = require('supertest');
const { setupMongo }  = require('./test.setup');
const { app } = require('../src/server');

setupMongo('User-testing');

test('Add a user should work', async () => {
    const res = await request(app)
        .post('/api/users')
        .send(
            {
                firstName: 'Pepe',
                lastName: 'Pepez',
                email: "pepe@pepe.pepe",
                password: 'pepepepez',
                userName: 'Peponator'
            }
        );

        const getAllRes = await request(app)
            .get('/api/users');

        expect(res.status).toBe(201);
        expect(getAllRes.status).toBe(200);
        expect(getAllRes.body.length).toEqual(1);
});

test('Add a user that should not work because invalid email', async () => {
    const res = await request(app)
        .post('/api/users')
        .send(
            {
                firstName: 'Pepe',
                lastName: 'Pepez',
                email: "pepe@pepe",
                password: 'pepepepez',
                userName: 'Peponator'
            }
        );

        expect(res.status).toBe(400);
        expect(res.body.errors[0].msg).toEqual('Invalid value');
        expect(res.body.errors[0].param).toEqual('email');
});

test('Add a user that should not work because invalid password', async () => {
    const res = await request(app)
        .post('/api/users')
        .send(
            {
                firstName: 'Pepe',
                lastName: 'Pepez',
                email: "pepe@pepe.pepe",
                password: 'pepe',
                userName: 'Peponator'
            }
        );

        expect(res.status).toBe(400);
        expect(res.body.errors[0].msg).toEqual('Invalid value');
        expect(res.body.errors[0].param).toEqual('password');
});

test('Add a user that should not work because invalid password', async () => {
    const res = await request(app)
        .post('/api/users')
        .send(
            {
                firstName: 'Pepe',
                lastName: 'Pepez',
                email: "pepe@pepepepe",
                password: 'pepe',
                userName: 'Peponator'
            }
        );

        expect(res.status).toBe(400);
        expect(res.body.errors[0].msg).toEqual('Invalid value');
        expect(res.body.errors[0].param).toEqual('password');
        expect(res.body.errors[1].msg).toEqual('Invalid value');
        expect(res.body.errors[1].param).toEqual('email');
});

test('Login should work', async () => {
    const res = await request(app)
        .post('/api/users')
        .send(
            {
                firstName: 'Pepe',
                lastName: 'Pepez',
                email: "pepe@pepe.pepe",
                password: 'pepepepez',
                userName: 'Peponator'
            }
        );


        const loginRes = await request(app)
            .post('/login')
            .send({
                userName: "Peponator",
                password: "pepepepez"
            })


        expect(loginRes.status).toBe(200);
        expect(loginRes.body).not.toBeUndefined();
});

test('Login should not work', async () => {
    const res = await request(app)
        .post('/api/users')
        .send(
            {
                firstName: 'Pepe',
                lastName: 'Pepez',
                email: "pepe@pepe.pepe",
                password: 'pepepepez',
                userName: 'Peponator'
            }
        );


        const loginRes = await request(app)
            .post('/login')
            .send({
                userName: "Peponator",
                password: "pepepepe"
            })


        expect(loginRes.status).toBe(200);
        expect(loginRes.body).toEqual({});
});


