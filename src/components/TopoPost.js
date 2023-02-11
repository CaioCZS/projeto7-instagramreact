export default function TopoPost(props){
    return (
        <div class="topo">
            <div class="usuario">
                <img src={`assets/img/${props.nome}.svg`} alt={props.nome} />
                {props.nome} 
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

    )
}