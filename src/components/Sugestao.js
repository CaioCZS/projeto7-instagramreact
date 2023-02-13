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
        <div className="sugestao">
        <div className="usuario">
            <img src={`assets/img/${props.nome}.svg`} alt={props.nome} />
            <div className="texto">
                <div className="nome">{props.nome}</div>
                <div className="razao">{props.razao}</div>
            </div>
        </div>

        <div onClick={() => mudarSeguir()} className="seguir"><span className={corSeguir}>{textoSeguir}</span></div>
    </div>
    )
}