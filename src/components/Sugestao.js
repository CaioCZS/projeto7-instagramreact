import { useState } from "react"

export default function Sugestao(props){
    
    const [corSeguir, setCorSeguir] = useState("")
    const [textoSeguir, setTextoSeguir] = useState("Seguir")

    const mudarSeguir = () =>{
        if(textoSeguir === "Seguir"){
            setTextoSeguir("Seguindo")
            setCorSeguir("cinza")
        }else{
            setTextoSeguir("Seguir")
            setCorSeguir("")
        }
    }

    return(
        <div class="sugestao">
        <div class="usuario">
            <img src={`assets/img/${props.nome}.svg`} alt={props.nome} />
            <div class="texto">
                <div class="nome">{props.nome}</div>
                <div class="razao">{props.razao}</div>
            </div>
        </div>

        <div onClick={() => mudarSeguir()} class="seguir"><span className={corSeguir}>{textoSeguir}</span></div>
    </div>
    )
}