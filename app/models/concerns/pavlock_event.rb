class PavlockEvent
  include HTTParty
  base_uri 'pavlock.herokuapp.com'

  def self.sendEvent(action, amplitude)
    response = HTTParty.get('https://pavlok.herokuapp.com/api/99LTNFgqp9/beep/155')
    puts response
  end
end