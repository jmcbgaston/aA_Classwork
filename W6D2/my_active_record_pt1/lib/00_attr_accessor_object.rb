class AttrAccessorObject

  def self.my_attr_accessor(*names)
    # my_attr_accessor([name, height, weight, ...])

    # goes through names of accessors
    names.each do |name|
      # define_method of the given name
      define_method(name) do
        # use this method to get the name
        instance_variable_get("@#{name}")
        # to result in a getter
        # "@#{name}" => "@name"
      end

      # in the same sense we want to create the setter using the instance set method

      # define_method(name, value) do
      #   instance_varialbe_set("@#{name}")
      # end

      # ^ not complete
      # it needs to set to a value

      # use the getter name and associate it to the setter (without the @ and having an =)
      # you must then pass in a value for it to be set to
      define_method("#{name}=") do |value|
        # "#{name}=" => "name ="
        instance_variable_set("@#{name}", value)
        # the set instance then needs to have a value as its second argument
        # given the example of [ @name = name | "name = Jose" | @name = Jose ]
      end

    # Side notes:

    # Interpolation will allow us here to enter in a variety of names of accessors
    #   due to its array of variables simply named (*names)

    # The @ symbol can be anything you want it to be
    #   but for readability across platforms, using standard naming conventions will help
    #   someone figure out what your code is supposed to be doing

    end
  end
end
