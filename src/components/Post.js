import { useState } from "react";
import TopoPost from "./TopoPost";

export default function Post(props){
   const [numeroCurtidas , setNumeroCurtidas] = useState(props.curtidas) 
    const [classeCurtida, setClasseCurtida] = useState("")
    const [classeSalvar, setClasseSalvar] = useState("")
    return (
        <div class="post">
        <TopoPost nome={props.nome} />
        <div class="conteudo">
            <img src={`assets/img/${props.imagem}.svg`} alt={props.imagem} />
        </div>

        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon class={classeCurtida} name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon class={classeSalvar} name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={`assets/img/${props.curtidoPor}.svg`} alt={props.curtidoPor} />
                <div class="texto">
                    Curtido por <strong>{props.curtidoPor}</strong> e <strong>outras {numeroCurtidas} pessoas</strong>
                </div>
            </div>
        </div>
    </div>
    )
}