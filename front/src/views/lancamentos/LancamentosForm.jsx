import React from 'react'
import { Card, Button,  Input, DatePicker, Form,Select  } from 'antd';
import {Link} from 'react-router-dom'
import LancamentoService from '../../api/service/lancamentoService';

const FormGroup = Form.Item
const Option = Select.Option

class LancamentosForm extends React.Component{
    
    constructor(props){
        super(props)
        this.service = new LancamentoService()
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            const resp = this.service.salvar(values)
            console.log(resp.data)
          }
        });
    }

    async componentDidMount(){
        const { params } = this.props.match;
        const {id} = params || null

        if(id && id !== 'novo'){
            console.log(` carregando entidade para o id: ${id}`)
            const lancamento = await this.service.carregar(id)
            console.log(lancamento.data)
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
        const goBackLink = (<Link to="/lancamentos">Voltar</Link>)

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

        return (
            <Card title={title} extra={goBackLink} >
                <Form onSubmit={this.onSubmit}>
                    <FormGroup label="Descrição: *" {...formItemLayout}>
                        {getFieldDecorator('descricao')(                         
                            <Input name="" type="text" />
                        )}
                    </FormGroup>

                    <FormGroup  label="Data: *" {...formItemLayout}>
                        {getFieldDecorator('data')(  
                            <DatePicker format="DD/MM/YYYY" style={{width: '100%'}} />
                        )}
                    </FormGroup>
                    <FormGroup label="Valor: *" {...formItemLayout}>
                        {getFieldDecorator('valor')(                         
                            <Input type="text" />
                        )}
                    </FormGroup>
                    <FormGroup label="Tipo: *" {...formItemLayout}>
                        {getFieldDecorator('tipo')(                         
                            <Select defaultValue={null}>
                                {selectTiposOptions}
                            </Select>     
                        )}                                           
                    </FormGroup>

                    <FormGroup label="Status: *" {...formItemLayout}>
                        {getFieldDecorator('status')(                         
                            <Select defaultValue={null}>    
                                {selectStatusOptions}
                            </Select>   
                        )}                      
                    </FormGroup>

                    <FormGroup {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">Salvar</Button>
                    </FormGroup>
 
                </Form>
            </Card>
        )
    }
}

export default Form.create()(LancamentosForm)