import Sugestao from "./Sugestao"

export default function Sugestoes(){
    const arraySugestoes = [
        {nome:"bad.vibes.memes",razao:"Segue você"},
        {nome:"chibirdart",razao:"Segue você"},
        {nome:"razoesparaacreditar",razao:"Novo no Instagram"},
        {nome:"adorable_animals",razao:"Segue você"},
        {nome:"smallcutecats",razao:"Segue você"}
    ]
    
    return (
        <div className="sugestoes">
        <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
       {arraySugestoes.map((s) => <Sugestao key={s.nome} nome={s.nome} razao={s.razao} />)}
    </div>
    )
}