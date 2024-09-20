function Note({ note, name }) {
    return (
        <div>
            <Author name={name} />
            <p>{note}</p>
        </div>
    );
}

function Author({name}) {
    return <span>By: {name}</span>
}

export default Note;