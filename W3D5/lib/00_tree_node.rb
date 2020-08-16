# module Searchable

#     # Assuming self is a PolyTree Object
#     def dfs(target) #&prc) # recursive

#         #    A
#         #  B   C
#         # D E F G

#         # target = F
#         return self.value if self.value == target
#         self.children.each do |child|
#             search_result = dfs(child)
#             return search_result.value unless search_result.nil?
#         end
#         nil
        
#     end
    
#     def bfs(target) #&prc) # iterative
#         q = Queue.new

#         q.enq(self)
#         until q.empty? do 

#             return self.value if self.value == target
#             self.children.each{|child| q.enq(child)}
#             self = q.deq
#         end
#         end

# end

class PolyTreeNode
	# include Searchable
	attr_reader :value, :parent, :children
	def initialize(value = "new_value")
    	@value = value
		@parent = nil
		@children = []
	end

	def parent=(new_parent)
        if self.parent
			old_idx_in_parent_children = self.parent.children.index(self)

			self.parent.children.delete_at(old_idx_in_parent_children)
		end
        			# if A.children != [B]
        if new_parent
            new_parent.children << self if !new_parent.children.include?(self)
        end
       		@parent = new_parent 
	end


	def add_child(child)
        	if !self.children.include?(child)
            child.parent = self
        	end
    	end

    	def remove_child(child)
        	raise "Not a child" if !self.children.include?(child)
        	child.parent = nil
    	end

end