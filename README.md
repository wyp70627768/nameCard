# nameCard
1. 
* have an HTML file serve up some CSS and some JavaScript
* Get some routes in the entry doc
* Use static directories that supported by middleware
* Use bootstrap templates 
* Use Bower for managing packages such as CSS filess and JavaScript files

2. 
* configuring gulp, gulp is essentially a task managements system for node.
* enforce coding standards, use jscs and jshint
* inject css and javascript references into html automatically, which implemented by wiredep and gulp-inject
* use nodemon to auto restarting application
* finished up building the framework of this project

3. 
* use template engine, which is basically bridge between express application and the html 
* need some dynamic pages instead of only static pages, therefore templating engine can help bridge code with html
* Jade is heavyweight, good for keeping templates clean and sharp
* handlebars has lot of built-in features 
* ejs conflict with angular, use ejs to build module from the bootstrap template downloaded

4. 
* Build routes for application
* use req.params, pass parameters in the url to help the application know where want to go
* render different views based upon the route 

5. 
* Getting data from sql server
* use mongodb driver
* insert data into database using insertMany command line to get data into database
* Find and find one, to find data

6. 
* create user in the database, authenticate the user
* secure routes using passport
* Oauth with passport