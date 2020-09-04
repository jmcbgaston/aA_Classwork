# == Schema Information
#
# Table name: artworks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  image_url  :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Artwork < ApplicationRecord
    validates :title, :artist_id, presence: true, uniqueness: true
    validates :image_url, presence: true
    
    belongs_to :artist,
    foreign_key: :artist_id,
    primary_key: :id,
    class_name: :User
    
    has_many :art_shares,
        primary_key: :id,
        foreign_key: :artwork_id,
        class_name: :ArtWorkShare
    
end
