class LoanApplication < ApplicationRecord
    belongs_to :loan
    belongs_to :member
    validates :member_id,numericality:{only_integer:true}
    validates :loan_id,numericality:{only_integer:true}
    validates :category, inclusion:{in:["urgent","average","low"]}
end
