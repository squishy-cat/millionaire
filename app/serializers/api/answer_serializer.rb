class Api::AnswerSerializer < ActiveModel::Serializer
  attributes :text, :correct
end
