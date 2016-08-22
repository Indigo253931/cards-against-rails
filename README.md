<!--
Creator: <Name>
Market: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Rails and Angular 

## Why Rails and Angular?
Rails provides some helpful built-in capabilities that work nicely with Angular. The Rails 
asset pipeline will take your Angular app and create a single minimified javascript file in 
production. The Rails asset pipeline also gives you access to SASS for easier CSS manipulation.
Rails via the gem community can also give you a way to manage your dependencies as there may be 
a gem that wraps around your Javascript depdendency. 

All of these benefits come just from the Rails Asset Pipeline. You still have all the tools to 
build an easy to use web API including things like ActiveRecord. 

## Installing Angular 
To install Angular in a Rails App you can use the ``angularjs-rails`` gem. You'll also need to
 add Angular in your Javascript manifest file.
```js
//= require angular
```

If you want to include another dependency that is no longer inlcuded in Angular, like routes
 or resources, you can just include those dependencies in your manifest file. 
```js
//= require angular-routes
```

## Creating your Angular App
To build your actual Angular app you can use the ``app/assets/javascripts`` folder. Inside 
this folder, you can use whatever file structure you like.

One item that can be somewhat tricky is templates. Since templates will make a webservice 
<details>
We can use a templates folder in the public directory. 
</details>
Another option is to use a custom gem. The [Angular Rails Templates](https://github.com/pitr/angular-rails-templates)
gem enables you to keep your templates in assets folder. You can either keep them in your 
``javascripts`` folder or in ``assets/templates``. You can also run them through a template library like ERB, Handlebars, or HAML. Even Rails helper methods can be used in the templates!

If you use Angular Rails Templates, 

1. You need to include it in your Gemfile, ``angular-rails-templates``
2. You need to include ``require angular-rails-templates`` in your ``application.js`` manifest.
3. You need to include ``templates`` as a module dependency for your Angular app.
```js
angular.module('CardsAgainstRails', ['templates'])
```

How do you load Angular inside of a Rails app?
<details>
Include the ``angularjs-rails`` gem in your Gemfile and include ``angular`` in the Javascript 
manifest.
</details>

How do you include the Angular resource library in a Rails app?
<details>
Include the ``angularjs-rails`` gem and include ``angular-resource`` in the Javascript manifest.
</details>

What is a library that can help with Angular templates? What do you need to do to include it
 in your app?
<details>
angular-rails-templates is the gem. It needs to be included in the Gemfile, the Javascript 
manifest, and the Angular app to work.
</details>

## Helping with your API
Another of main reason for using Rails to help manage an Angular app is to keep the front end 
and back end apps in sync.  There are a couple of important things to remember when creating an API with Rails.

### API Namespace
One option that Rails makes easy to work with is to keep multiple routes together in a 
namespace. For example, when you want to prefix a group of routes behind ``api/`` you can use a
namespace.

1. Includes a namespace in your routing 
```ruby
	namespace :api do 
		resources :questions
		# any other resources 
	end
```
2. Adding the namespace also allows you to exclude the new and edit route at the namespace level. 
```ruby
	namepsace :api, exclude: [:new, :edit] 
```
3. To use the namespace with the default rails conventions you'll need to do put all of the 
controllers in the namespace in a folder with the same name as the namespace. You also need to 
declare your controller inside of a module with the name of the namespace.
```ruby 
# app/controllers/api/questions_controller.rb
module api
	class QuestionsController < ApplicationController
	# Alternate form class Api::QuestionsController < ApplicationController
```

### Interacting with JSON 
Rails will automatically parse the body of a JSON request and include those variables in the 
params hash. For example if you have the following JSON:
```js
{
	"name": "A blogger"
	"posts": [
		{"title": "", "body": "Some long body string."},
		{"title": "A longer post", "body" },
		{"title": "A super long post", "body": "https://www.youtube.com/watch?v=9KtzdP7mR-4"}
	]
}
```
Then ``params[:name]`` will exist as a string and ``params[:posts]`` will be an array of 
objects.

Note that parameters will often only symbolize the first level of JSON objects so you might 
need to use calls like ``params[:posts].first['title']``.

To return JSON use, ``render json: my_object``. 

## Independent Practice

### Connect the Angular app to Rails App
The Rails app and the Angular app don't current talk together. Use the factory in the Angular 
app to connect the two apps together.

### Build out the Rails app
The Rails app currently doesn't store the information in a database. Add models to the Rails 
app to store and retreive the questions.

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.