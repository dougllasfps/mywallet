import React from 'react'
import { Card, Button,  Input, DatePicker, Form,Select  } from 'antd';
import { withRouter} from 'react-router-dom'
import LancamentoService from '../../api/service/lancamentoService';
import moment from 'moment';

const FormGroup = Form.Item
const Option = Select.Option

class LancamentosForm extends React.Component{
    
    state = {
        lancamento: { descricao: '', data: '', valor: null, tipo: null, status: null },
        editing: false
    }
    
    constructor(props){
        super(props)
        this.service = new LancamentoService()
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            this.service.salvar(values)
            this.props.history.push('/lancamentos')
          }
        });
    }

    async componentDidMount(){
        const { params } = this.props.match;
        const {id} = params || null

        if(id && id !== 'novo'){
            const lancamento = await this.service.carregar(id)
            this.setState({...this.state, lancamento:lancamento.data, editing: true})
        }
    }

    requiredField = (name, component) => {
        const { getFieldDecorator } = this.props.form;
        return getFieldDecorator(name, {
            rules: [{required: true, message: 'Campo obrigatório!'}],
        })(
            component
        )
    }

    render(){
        const title = this.props.title || 'Lançamento'
        const goBackLink = (<Button type="danger" icon="step-backward" htmlType="button" onClick={(e) => this.props.history.push('/lancamentos')}>Voltar</Button>)

        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };

          const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            },
          };

        const tipos = [
             {value: null, label: 'Selecione...'}
            ,{value: 'Despesa', label: 'Despesa'}
            ,{value: 'Receita', label: 'Receita'}
        ]

        const selectTiposOptions  = tipos.map( item => (<Option key={item.value} value={item.value}>{item.label}</Option>));

        const status = [
             {value: null, label: 'Selecione...'}
            ,{value: 'Pendente', label: 'Pendente'}
            ,{value: 'Pago', label: 'Pago'}
        ]

        const selectStatusOptions  = status.map( item => (<Option key={item.value} value={item.value}>{item.label}</Option>));
        const { getFieldDecorator } = this.props.form;

        const {descricao, valor, tipo} = this.state.lancamento
        const data  = moment(this.state.lancamento.data, 'YYYY-MM-DD')
        const itemStatus = this.state.lancamento.status

        const props = this.state.editing ? {
            label: 'Atualizar',
            icon: 'sync'
        } : {
            label: 'Salvar',
            icon: 'save'
        }

                
        return (

            <Card title={title} extra={goBackLink} >
                <Form onSubmit={this.onSubmit}>
                    <FormGroup label="Descrição: *" {...formItemLayout}>
                        {getFieldDecorator('descricao', { initialValue: descricao})(                         
                            <Input type="text" />
                        )}
                    </FormGroup>

                    <FormGroup  label="Data: *" {...formItemLayout}>
                        {getFieldDecorator('data',{initialValue:data})(  
                            <DatePicker format="DD/MM/YYYY" style={{width: '100%'}} />
                        )}
                    </FormGroup>
                    <FormGroup label="Valor: *" {...formItemLayout}>
                        {getFieldDecorator('valor',{initialValue: valor})(                         
                            <Input initialValue="10" type="text" />
                        )}
                    </FormGroup>
                    <FormGroup label="Tipo: *" {...formItemLayout}>
                        {getFieldDecorator('tipo', {initialValue: tipo})(                         
                            <Select initialValue={null}>
                                {selectTiposOptions}
                            </Select>     
                        )}                                           
                    </FormGroup>

                    <FormGroup label="Status: *" {...formItemLayout}>
                        {getFieldDecorator('status', {initialValue: itemStatus})(                         
                            <Select initialValue={null}>    
                                {selectStatusOptions}
                            </Select>   
                        )}                      
                    </FormGroup>

                    <FormGroup {...tailFormItemLayout}>
                        <Button type="primary" icon={props.icon} htmlType="submit">{props.label}</Button>
                    </FormGroup>
 
                </Form>
            </Card>
        )
    }
}

LancamentosForm = withRouter(LancamentosForm)

export default Form.create()(LancamentosForm)