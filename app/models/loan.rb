class Loan < ApplicationRecord
    has_many :loan_applications
    has_many :users, through: :loan_applications
end
