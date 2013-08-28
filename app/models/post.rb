class Post < ActiveRecord::Base
  attr_accessible :body, :title, :user_id

  validates :body, :title, :presence => true
end
