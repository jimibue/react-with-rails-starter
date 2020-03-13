class Api::ThingsController < ApplicationController
  def index
    render json: Thing.all
  end

  def create
    thing = Thing.new(thing_params)
    if thing.save
      render json: thing
    else
      render json: { errors: thing.errors }, status: :unprocessable_entity
    end
  end

  def update
    thing = Thing.find(params[:id])
    thing.update(complete: !thing.complete)
    render json: thing
  end

  def destroy
    Thing.find(params[:id]).destroy
    render json: { message: "Thing deleted" }
  end

  private

  def thing_params
    params.require(:thing).permit(:name)
  end
end
