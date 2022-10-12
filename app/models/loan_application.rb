class LoanApplication < ApplicationRecord
    belongs_to :loan
    belongs_to :user
end
