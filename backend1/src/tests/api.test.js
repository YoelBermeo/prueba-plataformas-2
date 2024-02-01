const request = require('supertest');
const app = require('../../index');

describe("POST /empleados",()=> {
    it('TEST 01, empleado creado', () => {
        const data = {
            email:'Juan@gmail.com',
            password:'4586',
            departamento: "Financiero",
            sueldo: 14000,
        }

        request(app)
            .post('/empleados')
            .send(data)
            .set("Aceptado", "application/json")
            .expect("Content-Type", "text/html")
            .expect(404)
    })
    it('TEST 02, empleado creado', () => {
        const data = {
            email:'Juan@gmail.com',
            password:'4586',
            departamento: null,
            sueldo: null,
        }

        request(app)
            .post('/empleados')
            .send(data)
            .set("Aceptado", "application/json")
            .expect("Content-Type", "text/html")
            .expect(404)
    })
    it('TEST 03, empleado creado', () => {
        const data = {
            email:'Juan@gmail.com',
            password:null,
            departamento: null,
            sueldo: null,
        }

        request(app)
            .post('/empleados')
            .send(data)
            .set("Aceptado", "application/json")
            .expect("Content-Type", "text/html")
            .expect(404)
    })
});

describe("get /users",function(){
    it('TEST 02, visualisado',         
    function(){
            request(app)
            .get('/users')
            .set("Aceptado", "application/json")
            .expect("Content-Type", "text/html")
            .expect(404)
        })
        
});
