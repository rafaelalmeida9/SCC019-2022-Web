import React from 'react';
import Cookies from 'universal-cookie';
import "./Cadastro.css"

function delay(){
  return new Promise(function(resolve) {
      setTimeout(resolve, 100);
  });
}



const Cadastro = () => {
    const cookies = new Cookies();
    const handleCadastro = async () => {
        //primeiro checar se as senhas coincidem
        let campoSenha = document.getElementById("campo-senha").value;
        let campoConfirmarSenha = document.getElementById("campo-confirmar-senha").value;
        if(campoConfirmarSenha !== campoSenha){
            window.alert("Senhas não coincidem")
            return;
        }
       

        let campoEmail = document.getElementById("campo-email").value;
        let campoUsername = document.getElementById("campo-username").value;
        let campoNome = document.getElementById("campo-nome").value;
        let campoEndereco = document.getElementById("campo-logradouro").value;
        let campoTelefone = document.getElementById("campo-telefone").value;
        let new_user = {
            email : campoEmail,
            nome : campoNome,
            username : campoUsername,
            senha : campoSenha,
            endereco : campoEndereco,
            telefone : campoTelefone
        };
        await delay();
        cookies.set(new_user.email, new_user);
        return;
    }



    return ( 
        <>
        <div className="cadastro-form">
                <div className="nome">
                    <p>Nome</p>
                    <input type="text" name="nome" id="campo-nome" className='campo'/>
                </div>
                <div className="username">
                    <p>Username</p>
                    <input type="text" name="username" id="campo-username" className='campo'/>
                </div>
                <div className="email">
                    <p>Email</p>
                    <input type="email" name="email" id="campo-email" className='campo'/>
                </div>
                <div className="telefone">
                    <p>Telefone</p>
                    <input type="text" name="telefone" id="campo-telefone" className='campo'/>
                </div>
                <div className="cep">
                    <p>Cep</p>
                    <input type="text" name="cep" id="campo-cep" className='campo'/>
                </div>
                <div className="logradouro">
                    <p>Logradouro</p>
                    <input type="text" name="logradouro" id="campo-logradouro" className='campo'/>
                </div>
                <div className="senha">
                    <p>Senha</p>
                    <input type="password" name="senha" id="campo-senha" className='campo'/>
                </div>
                <div className="confirmar-senha">
                    <p>Confirmar Senha</p>
                    <input type="password" name="senha" id="campo-confirmar-senha" className='campo'/>
                </div>
                <button onClick={handleCadastro} className='cadastro-button'>Cadastro</button>
        </div>

        </>
        
     );
}
 
export default Cadastro;