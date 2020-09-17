class Array

    def uniq
        unique = []
        i = 0

        while i < self.length
            if i == self[i] && !unique.include(self[i])
                unique << self[i]
            end
            i += 1
        end
        unique

    end
   #arr[-1,1,2,3,-2]
    def two_sum(arr) #target = 0
        arr = []

        arr.each_with_index do |el1, i1|
            arr.each_with_index do |el2, i2|
                if i2 > i1 && el1 + el2 == 0
                    arr << [arr.index[el1], arr.index[el2]]
                end
            end
        end

        arr
        # [-1,1,2,3,-2]
        # [[0,1][2,4]]
    end

    def self.transpose(arr)
        trans_arr = Array.new(arr[0].length){arr.length}
        (0...arr[0].length).each do |i|
            (0...arr.length).each do |j|
                trans_arr[i][j] = arr[j][i]
            end 
        end
        trans_arr
    end
    
end

# Array.new{}{}

arr = [[1,2,3],[4,5,6],[7,8,9]]

p arr.transpose