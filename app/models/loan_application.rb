class LoanApplication < ApplicationRecord
    belongs_to :loan
    belongs_to :user
    validates :user_id,numericality:{only_integer:true}
    validates :loan_id,numericality:{only_integer:true}
    validates :category, inclusion:{in:["urgent","average","low"]}
end
