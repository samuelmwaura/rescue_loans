class UserSerializer < ActiveModel::Serializer
  attributes :id,:username
  has_many :loans
  has_many :loan_applications
end
