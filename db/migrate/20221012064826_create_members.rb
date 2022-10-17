class CreateMembers < ActiveRecord::Migration[6.1]
  def change
    create_table :members do |t|
      t.string :username
      t.string :password_digest
      t.string :role
      t.timestamps
    end
  end
end
