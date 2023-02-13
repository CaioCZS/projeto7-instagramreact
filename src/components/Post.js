import { useState } from "react";
import TopoPost from "./TopoPost";

export default function Post(props) {
    const [numeroCurtidas, setNumeroCurtidas] = useState(props.curtidas)
    const [classeCurtida, setClasseCurtida] = useState("")
    const [tipoIconCutida, setTipoIconCurtida] = useState("-outline")
    const [classeSalvar, setClasseSalvar] = useState("")
    const [tipoIconSalvar, setTipoIconSalvar] = useState("-outline")
    const [animacao , setAnimacao]= useState("")
    
    const mudarCurtida = () =>{
        let nvCurtidas= numeroCurtidas*1000
        if(classeCurtida === ""){
            setClasseCurtida("vermelho")
            setTipoIconCurtida("")
            setNumeroCurtidas(((nvCurtidas+1)/1000).toFixed(3))
        }else{
            setClasseCurtida("")
            setTipoIconCurtida("-outline")
            setNumeroCurtidas(((nvCurtidas-1)/1000).toFixed(3))
            setAnimacao("")
        }
    }
    
    const mudarSalvar = () =>{
        if(classeSalvar === ""){
            setClasseSalvar("amarelo")
            setTipoIconSalvar("")
        }else{
            setClasseSalvar("")
            setTipoIconSalvar("-outline")
        }
    }
    
    const curtirPostImg = () =>{
        let nvCurtidas= numeroCurtidas*1000
        if(classeCurtida !== "vermelho"){
        setClasseCurtida("vermelho")
        setTipoIconCurtida("")
        setNumeroCurtidas(((nvCurtidas+1)/1000).toFixed(3))
        setAnimacao("aparecer")
        }
    }

    return (
        <div data-test="post" className="post">
            <TopoPost nome={props.nome} />
            <div className="conteudo">
                <img data-test="post-image" onDoubleClick={() => curtirPostImg()} src={props.imagem} alt={props.imagem} />
                <span className={`iconCurtida ${animacao}`}><ion-icon data-test="like-post" name="heart"></ion-icon></span>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <span className={classeCurtida} ><ion-icon data-test="like-post" onClick={mudarCurtida} name={`heart${tipoIconCutida}`}></ion-icon></span>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <span className={classeSalvar}><ion-icon onClick={mudarSalvar} data-test="save-post" name={`bookmark${tipoIconSalvar}`}></ion-icon></span>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={`assets/img/${props.curtidoPor}.svg`} alt={props.curtidoPor} />
                    <div className="texto">
                        Curtido por <strong>{props.curtidoPor}</strong> e <strong>outras <span data-test="likes-number">{numeroCurtidas}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}