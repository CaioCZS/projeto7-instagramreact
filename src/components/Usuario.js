import { useState } from "react"

export default function Usuario(props){
    const [nomeUsuario , setNomeUsuario] = useState(props.nome)
    const [imagemPerfil, setImagemPerfil] = useState(props.imagem)
    
    const trocarNome= () =>{
        let novoNome= prompt("Digite seu nome!")
        if(novoNome !== "")setNomeUsuario(novoNome)
    }

    const trocarFotoPerfil =() =>{
        let novaFoto = prompt("Coloque a url da sua foto!")
        if(novaFoto !== "")setImagemPerfil(novaFoto)
    }
    
    return(
        <div class="usuario">
                <img onClick={() => trocarFotoPerfil()} data-test="profile-image" src={imagemPerfil} alt="imagem de perfil" />
                <div class="texto">
                    <span>
                        <span data-test="name"><strong>{nomeUsuario}</strong></span>
                        <ion-icon onClick={() => trocarNome()} data-test="edit-name" name="pencil"></ion-icon>
                    </span>
                </div>
            </div>
    )
}