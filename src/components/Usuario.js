import { useState } from "react"

export default function Usuario(props){
    const [nomeUsuario , setNomeUsuario] = useState(props.nome)
    const [imagemPerfil, setImagemPerfil] = useState(props.imagem)
    
    
    return(
        <div class="usuario">
                <img src={imagemPerfil} alt="imagem de perfil" />
                <div class="texto">
                    <span>
                        <strong>{nomeUsuario}</strong>
                        <ion-icon name="pencil"></ion-icon>
                    </span>
                </div>
            </div>
    )
}