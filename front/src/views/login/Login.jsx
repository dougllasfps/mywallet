import React from 'react'
import {Form, Icon, Input, Button, Checkbox, message } from 'antd';
import AuthService from '../../api/service/authService'
import {AuthConsumer} from '../../components/auth/AuthContext'

const FormGroup = Form.Item
  
class Login extends React.Component {

    constructor(props){
      super(props)
      this.service = new AuthService();
    }

    handleSubmit =  (e) => {
      e.preventDefault();
    
      this.props.form.validateFields(async (err, values) => {
        if (!err) {
          try{
            const {email, senha} = values
            const result = await this.service.autenticarUsuario( email, senha )
            message.success(`${JSON.stringify(result.data, null, 4)}`)
            this.props.logar(result.data)
          }catch(error){
            console.log(error.response.data.error)
            message.error(`${error.response.data.error}`)
          }
        }
      });
    }
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <div className="container">
          <Form onSubmit={this.handleSubmit} className="login-form">
          <FormGroup>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Informe o seu email!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
            )}
          </FormGroup>
          <FormGroup>
            {getFieldDecorator('senha', {
              rules: [{ required: true, message: 'Informe sua senha!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Senha" />
            )}
          </FormGroup>
          <FormGroup>
            {getFieldDecorator('lembrar', {
              valuePropName: 'lembrar',
              initialValue: true,
            })(
              <Checkbox>Lembrar</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">Cadastrar</a>
          </FormGroup>
        </Form>
        </div>
      );
    }
  }

  export default  Form.create()( Login )

