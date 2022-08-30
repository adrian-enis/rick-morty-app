import React from "react"; // el tipo dice que import react ya no es necesario, asi que lo quita.. por que?

export default function Characters(props){
    const {characters, setCharacters} = props;

    const resetCharacters = () => {
       setCharacters(null);
    }

    console.log(characters);
    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetCharacters}>Volver a la home</span>
            <div className="container-characters">
                {characters.map((character, index) => (            // Recorrido del array
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name}/>
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === "Alive" ?(
                                    <>
                                    <span className="alive"></span>
                                    Alive
                                    </>
                                ) : (
                                    <>
                                    <span className="dead"></span>
                                    Dead
                                    </>
                                )}
                            </h6>
                            <p className="text-grey">
                                <span>Episodeos:</span>
                                <span>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie:</span>
                                <span>{character.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className="back-home" onClick={resetCharacters}>Volver a la Home</span>
        </div>
    );
}
