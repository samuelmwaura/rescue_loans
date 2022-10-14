class LoansController < ApplicationController
    rescue_from ActiveRecord::InvalidForeignKey, with: :render_foreignkey_failure
    #skip_before_action :authorize, only:[:index]
    #GET /loans
    def index
       render json: Loan.all
    end
    #GET /loan/:id
    def show
      loan = find_a_loan
      render json:loan   
    end
    #POST /loans
    def create
        loan = Loan.create!(loan_params)
        render json: loan, status: :created
    end
    #PATCH /loans/:id
    def update
        loan = find_a_loan
        loan.update!(loan_params)
        render json: loan, status: :accepted
    end
    #DELETE /loans/:id
    def  destroy
        loan = find_a_loan
        loan.destroy
        head :no_content
    end

    private
    def find_a_loan
        loan = Loan.find(params[:id])
    end

    def loan_params
        params.permit(:name,:timing,:purpose)
    end

    def render_foreignkey_failure(exception)
        render json:{errors:exception}, status: :unauthorized
    end
end
