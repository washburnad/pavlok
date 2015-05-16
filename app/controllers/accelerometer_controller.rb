class AccelerometerController < ApplicationController
  def index
  end
  
  def create
    puts accelerometer_params
  end
  
  private
  
  def accelerometer_params
    params
      .require(:accelerometer)
      .permit(:alpha, :beta, :gamma)
  end
end
