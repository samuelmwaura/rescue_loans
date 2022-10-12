class User < ApplicationRecord
    has_secure_password
    has_many :loan_applications
    has_many :loans, through: :loan_applications
end
