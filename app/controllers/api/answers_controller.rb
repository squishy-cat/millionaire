class Api::AnswersController < ApplicationController
    before_action :get_question

    def index
        answers = Answer.all
        render json: answers
    end

end
