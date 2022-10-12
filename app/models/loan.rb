class Loan < ApplicationRecord
    has_many :loan_applications
    has_many :users, through: :loan_applications

      #validations
    validates :name, presence:true, uniqueness:true
    validates :timing, numericality: {only_integer:true}
    validates :purpose, inclusion: {in:["business","assest","recurrent","bill payment","travel"]}
end
