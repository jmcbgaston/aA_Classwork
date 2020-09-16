require 'rack'

app = Proc.new do |env|
    
    request = Rack::Request.new(env)
    response = Rack::Response.new
    # we are creating req and res objects to make our lives easier.
    
    response['Content-Type'] = 'text/html'
    # Setting the Content-Type header tells the browser what the server has given to it in response. 

    # response.write("Hello world!")
    # renders localhost:3000 => Hello world
    response.write(request.path)
    # renders localhost:3000/any/thing/you/want => /any/thing/you/want 
    
    # In order to actually put things into the response body you use Rack::Response#write
    
    response.finish
    # Finally you want to call Rack::Response#finish when the res is done being built so Rack knows to wrap everything up for you.
    
end

Rack::Server.start(

    # app: Proc.new do |env|
    #     ['200', {'Content-Type' => 'text/html'}, ['hello world']]
    # end

    app: app,
    Port: 3000
    # In order to actually have a functioning web application we need to actually give app to Rack.

    # You can specify whatever port you want here, but 3000 is a common choice.

)