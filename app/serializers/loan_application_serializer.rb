class LoanApplicationSerializer < ActiveModel::Serializer
  attributes :id,:member_id,:loan_id,:category,:created_at
  belongs_to :loan
  belongs_to :member
end
