import { useState } from "react"

export default function Usuario(props){
    const [nomeUsuario , setNomeUsuario] = useState(props.nome)
    const [imagemPerfil, setImagemPerfil] = useState(props.imagem)
    
    
    return(
        <div class="usuario">
                <img data-test="profile-image" src={imagemPerfil} alt="imagem de perfil" />
                <div class="texto">
                    <span>
                        <span data-test="name"><strong>{nomeUsuario}</strong></span>
                        <ion-icon  data-test="edit-name" name="pencil"></ion-icon>
                    </span>
                </div>
            </div>
    )
}