# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: You can fix this mistake by adding the foreign key into the database by doing a change to the migration. The name of the foreign key would cohort_id and it would be on the Student model, because you want to compare the cohort to the Student model.

Researched answer: Creating a migration will help adding the foreign key. The add_column command can be used to add the foreign key. A Cohort has_many students and a student belongs_to a cohort. The foreign key will go to the cohort model and be called student_id

2. Which RESTful routes must always be passed params? Why?

Your answer: Params are used to validate what goes into the database. Create and update must be passed params.

Researched answer: Strong params provide control on what goes into the database. Strong params can choose what goes in by the create and update RESTful route.

3. Name three rails generator commands. What is created by each?

Your answer:
- rails db:create - A database is created
- rails server or rails s - It creates a local host to view the website
- rails new file_name - It creates a new Ruby on Rails application

Researched answer:
- rails generate controller Main - Creates a controller, which is used in the MVC and the controller is used to interact with the model and view.
- rails generate rspec:install - Used to install rspec onto the Rails application
- rails generate model Student name:string cohort:string - Creates the model for the application


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students - Index (show all the items in the database)

action: "POST" location: /students - Create (submits data to the database)

action: "GET" location: /students/new - New (adds data to the database)

action: "GET" location: /students/2 - Show (looks for the item #2 in the database)

action: "GET" location: /students/2/edit - Edit (edit the data in the item #2 in the database)

action: "PATCH" location: /students/2 - Update (modify item #2 in the database)

action: "DELETE" location: /students/2 - Destroy (delete the item #2 in the database)

The controller method would be called Student

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a developer, I need to create my Rails application
As a developer, I need to create a PostgreSQL database
As a developer, I need to create a ToDo model
As a developer, I need to do a db:migrate
As a developer, I need to create a landing/index page
As a developer, I need to create a way to create to-do tasks
As a developer, I need to create a way to display to-do tasks
As a developer, I need to create a way to edit/update the to-do tasks
As a developer, I need to create a way to delete the to-do tasks
As a developer, I need to add styling to the application