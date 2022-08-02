# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The BlogPostsController is a class that contains the controller portion of the MVC application. This specific controller only has access to the Blog Posts. Below the class is a method titled index, which is commonly used as the first page or the landing page.
class BlogPostsController < ApplicationController
  def index
    # ---2) The @posts is an instance variable that can be called to post all the content in a database because of the .add method.
    @posts = BlogPost.all
  end

  # ---3) This is a show RESTful route that looks for one item in the database. It uses an Active Record call by finding the one params id.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) new is a RESTful route that adds information to the application and stores it in the database.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) create is a RESTful route that submits user data to the database. Below is using the @post instance variable to create a new blog post. Then it is using a conditions check to see if that post is valid or correct. If it is valid, then the website will redirect it tp the post. If it is not valid, then it will redirect to the new page.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) Same thing as the show method a few methods up. It uses the .find method to look for the specific item in the database.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) update is another RESTful route used to change the data in the database. It uses the .find method to look for a specific item in the database and sets it to the @post instance variable. Then below it uses the .update to change the content. Then it uses the if condition to see if the post update is valid and if it is, then it will redirect the route to the blog post. Otherwise, if the post update is not valid, then it will just redirect it back to the edit page without any changes.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) destry is another RESTful route that is used to delete the content from the database. First, it searches for the item using the .find method and searches by id. It uses an if condition and if the instance variable can be destroyed, then it redirects the route the blog posts. Otherwise, the route will redirect to the blog post instance variable.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) private keyword is used to restrict scope within the class so it can only be used when called. params are typically last methods inside the controller.
  private
  def blog_post_params
    # ---10) Strong params provide control over what information is required. This makes it so only specific data can be sent over and doesn't allow for other data to be added. It is used din the controller class to create and update. It is requiring that a blog post have a title and a content.
    params.require(:blog_post).permit(:title, :content)
  end
end
