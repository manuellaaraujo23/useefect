import axios from "axios"
import { useState, useEffect } from "react"


export function Exemplo2(){

    const [cep,setCep]=useState("")
    const [logradouro, setLogradouro]=useState("")
    const [bairro, setBairro]=useState("")
    const [cidade, setCidade]=useState("")
    const [estado, setEstado]=useState("")

    const [uf, setUf]=useState("")

  

    useEffect(()=>{
        if(cep.length ===8){
         
            axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((Response)=> {

                setLogradouro(Response.data.logradouro)
                setBairro(Response.data.bairro)
                setCidade(Response.data.localidade)
                setEstado(Response.data.uf)
                setUf(Response.data.uf)
                
            })

        }
    }, [cep])
       
    return(
        <section>
            <h2>Exemplo 2: Busca CEP</h2>


        <input type="number" placeholder="Digite o seu CEP:" onChange={(input)=> setCep(input.target.value)}/>
      
          {cep.length === 8 && (
            <ul>
                <li> Rua: {logradouro}</li>
                <li>Bairro: {bairro}</li>
                <li>Cidade: {cidade}</li>
                <li>Estado: {estado} -{uf}</li>
            </ul>
              )}

          
        </section>
    )
}