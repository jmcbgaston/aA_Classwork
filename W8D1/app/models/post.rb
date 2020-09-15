# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  url        :string
#  content    :text
#  sub_id     :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord

    validates :title, presence: true
    validates :url, uniqueness: true

    belongs_to :sub,
        foreign_key: :sub_id,
        class_name: "Sub"

    belongs_to :author,
        foreign_key: :user_id,
        class_name: "User"

    has_many :postsubs,
        foreign_key: :post_id,
        class_name: 'PostSub'  
        
    has_many :subs,
        through: :postsubs, 
        source: :sub,
        optional: true

end
