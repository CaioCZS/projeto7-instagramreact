import Post from "./Post"

export default function Posts() {
    const arrayPosts = [
        { nome: "meowed", imagem: "gato-telefone", curtidas: 101.523, curtidoPor: "respondeai" },
        { nome: "barked", imagem: "dog", curtidas: 99.159, curtidoPor: "adorable_animals" },
        { nome: "barked", imagem: "dog", curtidas: 256.233, curtidoPor: "respondeai" }
    ]

    return (
        <div class="posts">
            {arrayPosts.map((p) =>
                <Post nome={p.nome} imagem={p.imagem} curtidas={p.curtidas} curtidoPor={p.curtidoPor} />)
            }
        </div>
    )
}