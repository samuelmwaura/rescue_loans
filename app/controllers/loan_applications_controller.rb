class LoanApplicationsController < ApplicationController
  #GET /loan_applications
   def index
      loan_applications = LoanApplication.all
      render json: loan_applications
   end
   #GET /loan_applications/:id
   def show
      loan_application = find_loan_application
      render json:loan_application
   end
   #POST /loan_applications
   def create
      loan = LoanApplication.create!(loan_application_params)
      render json:loan, status: :created
   end


   private
   def find_loan_application
      loan_application = LoanApplication.find(params[:id])
   end

   def loan_application_params
      params.permit(:category,:user_id,:loan_id)
   end
end