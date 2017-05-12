class Comment < ActiveRecord::Base
  belongs_to :person_comment, polymorphic: true
end
