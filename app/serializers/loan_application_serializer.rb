class LoanApplicationSerializer < ActiveModel::Serializer
  attributes :id,:user_id,:loan_id,:category
  belongs_to :loan
  belongs_to :user
end
