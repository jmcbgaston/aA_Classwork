class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    # validates :email, presence: true

    has_many :art_works,
        foreign_key: :artist_id,
        primary_key: :id,
        class_name: :Artwork
        
    has_many :art,
        foreign_key: :artist_id,
        primary_key: :id,
        class_name: :Artwork


end