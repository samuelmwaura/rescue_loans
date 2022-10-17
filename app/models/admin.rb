class Admin < ApplicationRecord
    has_secure_password 
    validates :first_name,:last_name,:user_name,:role, presence: true
    validates :user_name, uniqueness: true 
end
