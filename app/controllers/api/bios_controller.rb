class Api::BiosController < ApplicationController

def index
    render json: current_user.bio
end


def show
    render json: Bio.find(params[:id])
end


def update
    bio = Bio.find(params[:id])
    bio.update(bio_params)
    render json: bio
end

private
    def bio_params
        params.require(:bio).permit(:description, :profile_image)
    end

end
