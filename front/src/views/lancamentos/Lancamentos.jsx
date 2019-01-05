import React from 'react'
import { List, Tag ,  Button, Row, Col, Icon } from 'antd';
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import currencyFormatter from 'currency-formatter'

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

    editar = (id) => {
        this.props.history.push(`/lancamentos-form/${id}`)
    }

    novo = () => {
        this.props.history.push(`/lancamentos-form/novo`)
    }

    render(){
        const data = this.state.list || []

        const dataList =  data.map( item => ({ 
            ...item, 
            id: item._id,
            data: item.data ? moment(item.data).format('DD/MM/YYYY') : null, 
            valor: currencyFormatter.format(item.valor, { code: 'BRL' } )
        }))

        const listActions = (item) => [
            <a onClick={e => this.editar(item.id)}><Icon type="edit" /></a>,
            <a onClick={e => this.editar(item.id)}><Icon type="delete" /></a>,
        ]

        const statusColor = (item) => {
            if(item.status == 'Pendente'){
                return 'gold'
            }
            return 'green' 
        }

        const tipoColor = (item) => {
            if(item.tipo == 'Receita'){
                return 'blue'
            }
            return 'red' 
        }

        const renderItem = item => (
            <List.Item key={item.id} actions={listActions(item)}>
                <List.Item.Meta 
                        title={item.data}
                        description={item.valor + ' - ' + item.descricao} />
                        <Tag color={statusColor(item)} >{item.status}</Tag>
                        <Tag color={tipoColor(item)} >{item.tipo}</Tag>
            </List.Item>
        )

        return (
            <React.Fragment>
                <Row>
                    <Col md={22} />
                    <Col md={2}>
                        <Button type="primary" onClick={this.novo}>Novo</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={24}>
                    <hr />
                    </Col>
                </Row>
                <Row>
                    <List dataSource={dataList} renderItem={renderItem} />
                </Row>    
            </React.Fragment>
        )
    }
}

export default withRouter(Lancamentos)