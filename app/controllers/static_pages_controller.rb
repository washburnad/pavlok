class StaticPagesController < ApplicationController
  def index
    @notification_types = NotificationType.all
    @event = Event.new
  end
end
