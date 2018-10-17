class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
        t.string :content
        t.string :friend_id
      t.timestamps
    end
    add_index :reviews, :friend_id
  end
end
