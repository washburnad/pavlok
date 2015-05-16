class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.integer :notification_type_id
      t.integer :amplitude
      t.timestamps
    end
  end
end
