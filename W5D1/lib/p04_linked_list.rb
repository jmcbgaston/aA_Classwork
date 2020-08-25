class Node
  attr_reader :key
  attr_accessor :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
  end
end

class LinkedList
  include Enumerable

  def initialize
    @head = Node.new # [k=nil, v=nil]
    @tail = Node.new # [k=nil, v=nil]
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  # { []--[] }
  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
    self.first == @tail
  end

  def get(key)
  end

  def include?(key)
  end

  def append(key, val)
    new_node = Node.new(key, val)
    if self.empty?
      @head.next = new_node
      @tail.prev = new_node
    end
    @tail.prev = new_node
    new_node.next = @tail
    # @tail.prev.next = new_node
    # [k,v](head)--[k,v](new_node)--||[k,v](new_node_2)||--[k,v](tail)
  end

  def update(key, val)
  end

  def remove(key)
  end

  def each
    until self.first.next == self.last.prev
      yield self
      self.next
    end
  end

  # uncomment when you have `each` working and `Enumerable` included
  # def to_s
  #   inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  # end
end
