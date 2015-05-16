class AccelerometerController < ApplicationController
  def index
  end
  
  def create
    render :json => accelerometer_params
  end
  
  private
  
  def accelerometer_params
    params
      .require(:accelerometer)
      .permit(:alpha, :beta, :gamma)
  end
end
