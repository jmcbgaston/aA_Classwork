module Slidable
# require "byebug"
  def move
    clone = self.moveset.dup
    (1..7).inject([]) do |acc, i| # diagonal
      # debugger
      # indexies = [[pos[0] + i, pos[1] + i], [pos[0] - i, pos[1] - i], [pos[0] + i, pos[1] - i], [pos[0] - i, pos1[1] + i]]
      clone.each do |sub|
        new_pos = [pos[0] + sub[0] * i, pos[1] + sub[1] * i]
        if !board[pos].color == nil || pos.include?(-1) || pos.include?(8)
          stuff.delete(sub)
        end
        acc << new_pos if new_pos.all? { |i| (0..7).to_a.include? i } && board[sub[0], sub[1] + i].color == self.enemy_color
      end
      acc
    end
  end
end

#       (1..7).inject([]) do |acc, i| # vertical, horizontal
#         indexies = [[pos[0] + i, pos[1]], [pos[0] - i, pos[1]], [pos[0], pos[1] - i], [pos[0], pos1[1] + i]]
        
#         indexies.select! { |idx| idx.all? { |i| (0..7).to_a.include? i }}
#         acc += indexies
#       end
#     end
#     def move 
      
#     end
        
#         indexies.select! { |idx| idx.all? { |i| (0..7).to_a.include? i }}
#         acc += indexies
#       end
#     end
  
#     #self.pos + end pos < p1[7] p2[7]
# end