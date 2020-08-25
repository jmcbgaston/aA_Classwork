class MaxIntSet
  attr_accessor :store

  def initialize(max)
    # @store = (0..50).to_a
    @store = Array.new(max + 1, false)
  end

  def insert(num)
    # raise 'Out of bounds' unless (0...@store.length).include?(num)
    raise 'Out of bounds' if !num.between?(0, @store.length - 1)
    @store[num] = true
  end

  def remove(num)
    @store[num] = false
  end

  def include?(num)
    # @store.include?(num)
    @store[num]
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end

end


class IntSet

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    bucket_num = num % @store.length
    @store[bucket_num] << num
  end
  
  def remove(num)
    bucket_num = num % @store.length
    @store[bucket_num].delete(num) 
  end

  def include?(num)
    bucket_num = num % @store.length
    @store[bucket_num].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

end

class ResizingIntSet

  attr_accessor :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    bucket_num = num % @store.length
    if !include?(num)
      @store[bucket_num] << num
      @count += 1
      resize! if count > num_buckets # reseize only when you need to
    end
  end

  def remove(num)
    bucket_num = num % @store.length
    if include?(num)
      @store[bucket_num].delete(num) 
      @count -= 1
    end
  end

  def include?(num)
    bucket_num = num % @store.length
    @store[bucket_num].include?(num)
  end

  private
  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!
    new_store = Array.new(num_buckets * 2) { Array.new }
    old_store = @store
    @store = new_store
    @count = 0
    old_store.flatten.each do |num|
      self.insert(num)
    end
  end

end
