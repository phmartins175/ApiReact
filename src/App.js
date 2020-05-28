import React, { Component } from 'react';
import Api from './Api';

class App extends Component{
  state= {fornecedor: [],
  }
  async componentDidMount(){
    const response = await Api.get('');
    console.log(response.data);
    this.setState({ fornecedor: fornecedores.data});
  }  
  render(){
    const{fornecedores} = this.state;
    return(
    <div>
    <h1> Listar os Fornecedores </h1>
    {fornecedores.map(fornecedor =>(
    <ul key={fornecedor.idfornecedor}>
      <li>
      <li>ID{fornecedor.idfornecedor}</li>
      <li>Nome{fornecedor.nome}</li>
      <li>CNPJ{fornecedor.cnpj}</li>
      <li>Telefone{fornecedor.telefonefixo}</li>
      <li>Email{fornecedor.email}</li>
      </li>
    </ul>
    ))}
    </div>
    );
    }
    }
    export default App;
      