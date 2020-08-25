class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    return 0 if self.empty?

    i = 0
    while i < self.length - 1
      if self.length == 1
        return self[i].hash
      elsif self.length > 1
        return self[i].hash + self[i + 1].hash + self[-1].hash
      end

      i += 1
    end
  end
end

class String
  def hash
    alphabet = ('a'..'z').to_a.join

    num = 0
    self.split(' ').join.each_char.with_index do |char, i|
      num += alphabet.index(char) + i.hash
    end

    num
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    0
  end
end
