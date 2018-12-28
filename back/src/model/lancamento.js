const mongoose = require('../config/database/index')

const LancamentoSchema = new mongoose.Schema({
    descricao: { type: String , required : true },
    data: {type: Date, required: true},
    valor: { type: Number, required: true },
    tipo: { type: String, enum: ['Receita', 'Despesa']},
    status: { type: String, enum: ['Pendente', 'Pago']},
    dataCadastro: { type: Date, default : Date.now}
})

module.exports = mongoose.model('lancamento', LancamentoSchema);