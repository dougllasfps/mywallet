import React from 'react'
import { Table, Divider,  Button, Row, Col } from 'antd';
import { withRouter } from 'react-router-dom'

import LancamentoService from '../../api/service/lancamentoService'

class Lancamentos extends React.Component{

    constructor(props){
        super(props)
        this.service = new LancamentoService()
    }

    state = {
        list: []
    }

    async componentWillMount(){
        const resp = await this.service.todos()
        this.setState({list: resp})
    }

    editar = (text,item) => {
        console.log(text)
        console.log(item)
        this.props.history.push(`/lancamentos-form/${item.id}`)
    }

    novo = () => {
        this.props.history.push(`/lancamentos-form/novo`)
    }

    dataList = () => {
        const data = this.state.list || []
        return data.map( item => ({
            key : item.id, 
            descricao: item.descricao, 
            data: item.data, 
            valor: item.valor, 
            tipo: item.tipo, 
            status: item.status
        }) );
    }

    dataTableColumns = () => {
        return [{
            title: 'Descrição',
            dataIndex: 'descricao',
            key: 'descricao'
          }, {
            title: 'Data',
            dataIndex: 'data',
            key: 'data',
          }, {
            title: 'Valor',
            dataIndex: 'valor',
            key: 'valor',
          }, {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
          }, {
            title: 'Tipo',
            dataIndex: 'tipo',
            key: 'tipo',
          }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <span>
                <Button type="primary" onClick={() => this.editar(text,record)}>editar</Button>
                <Divider type="vertical" />
                <Button type="danger" onClick={() => this.editar(record)}>deletar</Button>
              </span>
            ),
          }];
          
    }

    render(){
        return (
            <React.Fragment>
                <Row>
                    <Col md={2}>
                        <Button type="primary" onClick={this.novo}>Novo</Button>
                    </Col>
                </Row>
                <Row>
                    <Table columns={this.dataTableColumns()} dataSource={this.dataList()} />
                </Row>    
            </React.Fragment>
        )
    }
}

export default withRouter(Lancamentos)