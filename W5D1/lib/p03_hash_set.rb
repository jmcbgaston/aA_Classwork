class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end
  
  def insert(key)
    bucket_num = key.hash % @store.length
    if !include?(key)
      @store[bucket_num] << key
      @count += 1
      resize! if count > num_buckets # reseize only when you need to
    end
  end

  def remove(key)
    bucket_num = key.hash % @store.length
    if include?(key)
      @store[bucket_num].delete(key) 
      @count -= 1
    end
  end

  def include?(key)
    bucket_num = key.hash % @store.length
    @store[bucket_num].include?(key)
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
