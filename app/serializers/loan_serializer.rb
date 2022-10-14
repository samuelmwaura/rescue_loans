class LoanSerializer < ActiveModel::Serializer
  attributes :id,:name, :timing,:purpose,:created_at
  has_many :users
  has_many :loan_applications
end
