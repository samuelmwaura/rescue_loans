class User < ApplicationRecord
    has_secure_password
     #associations
    has_many :loan_applications
    has_many :loans, through: :loan_applications
      #validations
    validates :username, presence:true, uniqueness:true
    validates :password, presence:true
end
