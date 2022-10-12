class CreateLoanApplications < ActiveRecord::Migration[6.1]
  def change
    create_table :loan_applications do |t|
      t.belongs_to :user,null: false, foreign_key:true
      t.belongs_to :loan,null:false, foreign_key: true
      t.string :category
      t.timestamps
    end
  end
end
