class Api::QuestionsController < ApplicationController

    def index
        questions = Question.all
        render json: questions
    end

    def show
        question = Question.find(params[:id])
        render json: question
    end

    def create
        question = Question.create([question_params])
        render json: question, status: 201
    end

    def destroy
        question = Question.find(params[:id])
        question.destroy
        render json: "Successfully deleted", status: 200
    end


    private

    def question_params
        params.permit(:body, answers_attributes: [:id, :text, :correct])
    end

end
