seeds = {
  "notification_types" => ['vibrate', 'beep', 'shock', 'led' ]
}
seeds.each do |klass_name, values|
  klass = klass_name.classify.constantize
  values.each do |val|
    klass.find_or_create_by_name(val)
  end
end