import Story from "./Story";

export default function Stories() {
    const nomes= [
        "9gag",
        "meowed",
        "barked",
        "nathanwpylestrangeplanet",
        "wawawicomics",
        "respondeai",
        "filomoderna",
        "memeriagourmet"
    ]


    return (
        <div className="stories">
            {nomes.map((n) => <Story nome={n} key={n}/>)}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}