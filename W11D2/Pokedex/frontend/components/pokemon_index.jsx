import React from 'react';

class PokemonIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render() {
        return (
            <>
                {this.props.pokemon.map((poke, idx) => {
                    return <li key={idx}>{poke.name}<img src={poke.image_url}/></li>
                })}
            </>
        )
    }
}

export default PokemonIndex;