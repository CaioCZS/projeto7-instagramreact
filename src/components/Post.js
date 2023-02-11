import { useState } from "react";
import TopoPost from "./TopoPost";

export default function Post(props){
   const [numeroCurtidas , setNumeroCurtidas] = useState(props.curtidas) 
    const [classeCurtida, setClasseCurtida] = useState("")
    const [classeSalvar, setClasseSalvar] = useState("")
    return (
        <div data-test="post" class="post">
        <TopoPost nome={props.nome} />
        <div class="conteudo">
            <img data-test="post-image" src={`assets/img/${props.imagem}.svg`} alt={props.imagem} />
        </div>

        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon data-test="like-post" class={classeCurtida} name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon data-test="save-post" class={classeSalvar} name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={`assets/img/${props.curtidoPor}.svg`} alt={props.curtidoPor} />
                <div class="texto">
                    Curtido por <strong>{props.curtidoPor}</strong> e <strong>outras <span data-test="likes-number">{numeroCurtidas}</span> pessoas</strong>
                </div>
            </div>
        </div>
    </div>
    )
}