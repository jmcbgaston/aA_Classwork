import { connect } from 'react-redux';
import { selectAllPokemon } from '../reducers/selectors'
import { requestAllPokemon } from '../actions/pokemon_actions' 
import PokemonIndex from './pokemon_index'

const mapStateToProps = (state) => {
    // piece of state that container subscribes to
    
    // return ({ 
    //     pokemon: Object.values(state.entities.pokemon) 
    // })

    return { pokemon: selectAllPokemon(state) }
};

const mapDispatchToProps = dispatch => {
    return ({
        requestAllPokemon: () => {
        return dispatch(requestAllPokemon())
        }
    })
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonIndex);