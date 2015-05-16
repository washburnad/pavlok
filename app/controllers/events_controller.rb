class EventsController < ApplicationController
  def create
    @event = Event.create(event_params)
    if @event.valid?
      @event.sendEvent
      redirect_to root_path
    else
      redirect_to root_path, status: :unprocessable_entity
    end
  end

  private

  def event_params
    params.
      require(:event).
      permit(:notification_type_id, :amplitude)
  end
end
