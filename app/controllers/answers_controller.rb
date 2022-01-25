class AnswersController < ApplicationController

    def index
        answers = Answer.all
        render json: answers
    end

    # def show
    #     answers = Answer.where(question_id = params[:question_id])
    #     render json: answer
    # end

    private



end
