class Event < ActiveRecord::Base
  belongs_to :notification_type

  include HTTParty
  
  base_uri 'pavlok.herokuapp.com'

  def sendEvent
    token = '99LTNFgqp9'
    puts " not type #{notification_type} "
    action = notification_type.name.to_s
    url = %Q( https://pavlok.herokuapp.com/api/#{token}/#{action}/#{amplitude.to_s} )
    puts url
    response = HTTParty.get(url)
    puts response
  end
end
