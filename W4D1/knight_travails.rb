#
require "../W3D5/skeleton/lib/00_tree_node.rb"

#initialize a starting positionn "[a,b]"
  #                        [a,b]
  #                          |
  #             -----------------------------
  #          /         |     |       |         \
  # [a - 2, b - 1]     |     |      |     [a + 2, b + 1]
  #            [a - 2, b + 1]| [a + 2, b - 1]
  #                          |
  #                          |
  #             -----------------------------
  #          /         |     |       |         \
  # [a - 1, b - 2]     |     |       |     [a + 1, b + 2]
  #            [a - 1, b + 2]| [a + 1, b - 2]
  
  #8 possible children
  class KnightPathFinder
    
    attr_reader :build_move_tree, :root_node
    attr_accessor :considered_positions
    
    def self.valid_moves(pos)
    pos_moves = []

    moves = [
      [2,-1],
      [-2,1],
      [-1,2],
      [1,-2],
      [2, 1],
      [-2, -1],
      [-1,-2],
      [1, 2]
    ]
    moves.each do |possibility|
      move = [possibility[0] + pos[0], possibility[1] + pos[1]]
      
      pos_moves << move if  move.all?{|axis| axis < 8 && axis >= 0} 
    end
    return pos_moves     
  end
  
  def initialize(position)
    @root_node = PolyTreeNode.new(position)
    @considered_positions = [self.root_node.value]
    @build_move_tree = self.build_move_tree
  end
    
  def build_move_tree
    q = Queue.new
    
    q.enq(root_node)
    until q.empty? 
      current = q.deq
      
      new_move_positions(current.value).each  do |move|
        child_new = PolyTreeNode.new(move)
        current.add_child(child_new)
      end
      current.children.each {|new_pos| q.enq(new_pos)}
      
    end
    
    return self
  end
  
  def find_path(end_pos)
    # finds the end_pos node
    # return self.root_node.value if self.root_node.value == end_pos

    # self.root_node.children.each do |child|
    #   search_res = child.find_path(end_pos)
    #   return search_res unless search_res.nil? 
    # end
    # nil
    points_to_end = []
    q = Queue.new
    q.enq(self.root_node)
    until q.empty? do 
      current = q.deq
      
      return current if current.value == end_pos
      current.children.each{|child| q.enq(child)}
    end
    nil
  end
  
  def trace_back_path # it seems that this needs to be called within find path
    # yeah but created outside
    
    # was talking to a group member
    # and their approach was to save the node path into an arr in trace back
    # i guess because of the scope, we can save the ele's called from find path into the nested method
  end
  
  def new_move_positions(pos)
    new_moves = []
    KnightPathFinder.valid_moves(pos).each do |move|
      if !@considered_positions.include?(move)
        @considered_positions << move
        new_moves << move
      end
    end
    return new_moves
  end
  
  
end

kpf = KnightPathFinder.new([0, 0])
# p kpf.root_node.children
p kpf.find_path([4,3])
# kpf = KnightPathFinder.new([0,0])
# kpf.find_path([2, 1]) # => [[0, 0], [2, 1]]
# kpf.find_path([3, 3]) # => [[0, 0], [2, 1], [3, 3]]
# p KnightPathFinder.valid_moves 
# p knight.root_node