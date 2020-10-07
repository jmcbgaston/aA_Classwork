class Api::PokemonController < ApplicationController
    def index
        # debugger
        @pokemon = Pokemon.all
        render :index
    end

    def show
        # debugger
        @poke = Pokemon.find(params[:id])
        if @poke
            render :show
        else
            render json: ["That pokemon does not exist"], status: 422
            redirect_to api_poke_index_url
        end
    end
end
