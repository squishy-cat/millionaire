class Api::QuestionSerializer < ActiveModel::Serializer
  attributes :id, :body
  has_many :answers
end
