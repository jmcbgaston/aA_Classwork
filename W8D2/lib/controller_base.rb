require 'active_support'
require 'active_support/core_ext'
require 'erb'
require_relative './session'
# require 'active_support/inflector'

class ControllerBase
  attr_reader :req, :res, :params 
  attr_accessor :already_built_response

  # Setup the controller
  def initialize(req, res)
    @req = req
    @res = res
  end

  # Helper method to alias @already_built_response
  def already_built_response?
    
    @already_built_response

    # if @already_built_response
    #   raise "double render error"
    # else
    #   @already_built_response = true
    # end
    # if @res.nil? && @req.nil?
    #   @already_built_response = false
    # else
    #   @already_built_response = true
    # end
    
    # raise "double render error" if already_built_response?
    # @already_built_response = true
    # session.store_session(@res)
    # flash.store_flash(@res)
  end

  # Set the response status code and header
  def redirect_to(url)
    raise "double render error" if already_built_response?
    # self.already_built_response?

    # Issuing a redirect consists of two parts,
    @res.status = 302
    # and setting the response status code to 302
    @res["Location"] = url
    # setting the 'Location' field of the response header to the redirect url

    @already_built_response = true
  end

  # Populate the response with content.
  # Set the response's content type to the given type.
  # Raise an error if the developer tries to double render.
  def render_content(content, content_type)
    raise "double render error" if already_built_response?
    # self.already_built_response?

    @res['Content-Type'] = content_type
    # the type of content that will be rendered
    @res.write(content)
    # content will be == request.path
    
    @already_built_response = true
    #################
    # It should also set an instance variable, @already_built_response, so that it can check that content is not rendered twice.
  end

  # use ERB and binding to evaluate templates
  # pass the rendered html to render_content
  def render(template_name)
    dir_path = File.dirname(__FILE__)
    # file directory
    template_path = File.join(
      dir_path,
      "views",
      # self.class.name.underscore, 
      "#{template_name}.html.erb"
    )
    # join directory + views folder + template name along with the file type
    
  end

  # method exposing a `Session` object
  def session
  end

  # use this with the router to call action_name (:index, :show, :create...)
  def invoke_action(name)
  end
end

