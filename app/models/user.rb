class User < ActiveRecord::Base
  # Include default devise modules.
  has_one :bio
  has_many :posts
  after_create :create_bio

  def create_bio
    bio = Bio.create(description: '', profile_image: '', user_id: self.id)
  end


  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User
end
