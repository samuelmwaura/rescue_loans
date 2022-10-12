class UserSerializer < ActiveModel::Serializer
  attributes :id,:username
  has_many :loans
  has_manu :loan_applications
end
