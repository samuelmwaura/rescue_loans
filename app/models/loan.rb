class Loan < ApplicationRecord
    has_many :loan_applications
    has_many :users, through: :loan_applications

      #
    validates :name, presence:true, uniqueness:true
    validates :timing, numericality: {only_integer:true}
    validates :purpose, inclusion: {in:["Business","Assest","Recurrent","Bill payment","Travel"]}
end
