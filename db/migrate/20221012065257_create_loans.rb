class CreateLoans < ActiveRecord::Migration[6.1]
  def change
    create_table :loans do |t|
      t.string :name
      t.integer :timing
      t.string :purpose

      t.timestamps
    end
  end
end
