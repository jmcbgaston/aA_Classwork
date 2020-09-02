require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject

  def self.columns
    # return an arr with the names of the table's columns

    # Cat.columns == [:id, :name, :owner_id]

    # DBConnection::execute2 method returns an array; the first element is a list of the names of columns

    # DBConnection.execute2(<<-SQL)
    #   SELECT
    #     *
    #   FROM
    #     cats
    # SQL
    # # => [
    # #   ["id", "name", "owner_id"],
    # #   {"id"=>1, "name"=>"Breakfast", "owner_id"=>1},
    # #   {"id"=>2, "name"=>"Earl", "owner_id"=>2},
    # #   {"id"=>3, "name"=>"Haskell", "owner_id"=>3},
    # #   {"id"=>4, "name"=>"Markov", "owner_id"=>3}
    # # ]

    # set up base case if @columns exists
    return @columns if @columns

    # If NOT, =>
    # call the query with dbconnection.exectute2
    # take the first element in the array
    # limit 0 to make sure we don' get any of the instances from the output array
    # save that into a variable so that we have a variable containing the table names: ["id", "name", "owner_id"]
    columns = DBConnection.execute2(<<-SQL).first
      SELECT
        *
      FROM
        #{self.table_name}
      LIMIT
        0
    SQL

    # .to_sym => converts string to symbol
    # (&:) => shorthand for hitting each element in the array
    columns.map!(&:to_sym)
    # now the columns array looks something like this:
    # [:id, :name, :owner_id]

    # finally, we can override @columns to the values in our columns variable
    @columns = columns
  end

  def self.finalize!
    # when we call this method,
    # self will then have access to our:
    #   getter 
    #   setter

    # We can call on the table names using our previously made columns method

    self.columns.each do |table_name|

      define_method(table_name) do |table_name|
        self.attributes[table_name]
      end

      define_method("#{table_name}=") do |value|
        self.attributes[table_name] = value
      end

    end
  end

  def self.table_name=(table_name)
    # set the name of the table for the class

    # Object has an innate getter method using the @ symbol. That's why we are able to utilize that same logic here without having a getter within this class.
    @table_name = table_name

  end

  def self.table_name
    # get the name of the table for the class

    # Human.table_name => humans
    # return ("#{self}").tableize => snake_case

    # This code below works
    # @table_name || self.name.underscore.pluralize
    # This code below works with: [require 'active_support/inflector']
    @table_name || self.name.tableize

  end

  def self.all
    # ...
  end

  def self.parse_all(results)
    # ...
  end

  def self.find(id)
    # ...
  end

  def initialize(params = {})
    # ...
  end

  def attributes
    # using 
    @attributes ||= {}
  end

  def attribute_values
    # ...
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
end
