module Searchable

	def dfs(target)
		return self if self.value == target
		self.children.each do |child|
			search_result = child.dfs(target)
			return search_result unless search_result.nil?
		end
		nil
	end

	def bfs(target) #&prc) # iterative
		q = Queue.new
	
		q.enq(self)
		until q.empty? do 
			current = q.deq

			return current if current.value == target
			current.children.each{|child| q.enq(child)}
		end
		nil
	end

end

class PolyTreeNode
	include Searchable

	attr_reader :value, :parent, :children
	def initialize(value = "new_value")
    	@value = value
		@parent = nil
		@children = []
	end

	def inspect
		"#<PolyTreeNode: #{value} >"
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
