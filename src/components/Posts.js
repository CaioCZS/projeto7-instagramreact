import Post from "./Post"

export default function Posts() {
    const arrayPosts = [
        { nome: "chibirdart", imagem:"assets/img/pintinho.jpeg" , curtidas: 256.233, curtidoPor: "razoesparaacreditar" },
        { nome: "smallcutecats", imagem: "assets/img/gato-telefone.svg", curtidas: 101.523, curtidoPor: "respondeai" },
        { nome: "barked", imagem: "assets/img/dog.svg", curtidas: 99.161, curtidoPor: "adorable_animals" },
        { nome: "nathanwpylestrangeplanet", imagem:"assets/img/esquilo.jpeg" , curtidas: 306.228, curtidoPor: "memeriagourmet" }
    ]

    return (
        <div className="posts">
            {arrayPosts.map((p) =>
                <Post key={p.nome} nome={p.nome} imagem={p.imagem} curtidas={p.curtidas} curtidoPor={p.curtidoPor} />)
            }
        </div>
    )
}