class Api::QuestionSerializer < ActiveModel::Serializer
  attributes :body
  has_many :answers
end
