//const nock = require('nock')
const chai = require('chai');
//const chaiHttp = require('chai-http');
//const server = require('../src/index.js')


const expect = chai.expect;


//chai.use( chaiHttp )
//chai.should()

/*
describe(' Deve testar todos os recursos do controller de autorização (AuthController) ', () => {
   
    xit('deve registrar um usuario', (done) => {    

        const user = {
            nome: 'Dougllas',
            senha: '123',
            email: 'dougllasfps@gmail.com'
        }

        chai
            .request( server )
            .post('/auth/registrar')
            .send(user)
            .end((err, res) =>{
                res.should.have.status(200);
                done();
            })

    })

    xit('deve fazer algo', () =>{
        expect(10).to.equal(10)
    })
})
*/

describe('Suite de testes Calculadora', () => {

    function Calculadora(){}
    Calculadora.prototype.somar = (num, otherNum) => {
        if(isNaN(num) || isNaN(otherNum)){
            throw Error('informe digitos válidos.')
        }

        let float1 = parseFloat(num)
        let float2 = parseFloat(otherNum)

        return float1 + float2;
    }

    Calculadora.prototype.subtrair = (num, otherNum) => {
        if(isNaN(num) || isNaN(otherNum)){
            throw Error('informe digitos válidos.')
        }

        let float1 = parseFloat(num)
        let float2 = parseFloat(otherNum)

        return float1 - float2;
    }

    const calc = new Calculadora()

    it('deve somar 2 numeros', () => {
        const calc = new Calculadora()

        let result = calc.somar(1,2)
        expect(result).to.equal(3)
    })

    it('deve somar 2 numeros mesmo eles sendo string', () => {
        

        let result = calc.somar('1','2')
        expect(result).to.equal(3)
    })

    it('deve lancar erro quando não passar números', () => {
        const calc = new Calculadora()

        expect(() => calc.somar('a','2') ).to.throw()
    })

    it('deve subtrair 2 numeros', () => {
        const result = calc.subtrair(2,2)
        expect(result).to.equal(0)
    })

})
