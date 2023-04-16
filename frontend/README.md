# The general flow of the App:

## Entry point -> Homepage

The homepage is what sells the website to the user. User sees this and feels like this may be of their use

### After this, he goes to the /compete page

This page is a listing of all the hackathons going on at the moment. The user sees this and is excited to join the platform!

### For orgs and for students both

Our platform is meant to act as a medium between organization / colleges and students, hence we have to cater to both of them with 2 seperate logins

### Next step is the Registration part!

The user connects the app securely with their metamask account through the plugin. The system checks if it is a new user of an old user through the metask account ID.

### They're logged in!

Once logged in, the user is shown his dashboard, where his profile and past works are shown with an aesthetic UI. The user has 4 links here, home, profile, user-dashboard / organization-dashboard and classrooms.

### Home:

This contains all the graphs generated for the user using apex-graphs.

### Profile:

This section will show the profile of the user (editing profile coming soon!)

### User-Dashboard:
(Only for users)

This is where the user can see all of his past endeavours

### Organization-Dashboard:
(Only for organizations)

This is where the organisations see all of their students, their course completion percentage and get the option to mint new NFTs as certificates for the user

### Classroom

This is the Classroom, where all the course related details of the user will reside.

Frontend Overview:

<pre>
|-public -> This folder is used solely for images and tailwind css configurations
|-src -> Main folder containing all of the source code for the app
   |-abi -> 
   |-action -> 
   |-All-Images -> Images used on the homepage / compete page
   |-assets -> Images used throught the app
   |-Components -> Contains the abstracted, componentized code that acts as the building block for the app
   |-configs -> Configurations of apex-charts to display charts
   |-context -> 
   |-CSS -> All the CSS for the components resides here
   |-data -> Contains sample data which was initially rendered in the UI phase
   |-layout -> Generates the layout for every path after the user is logged in
   |-pages -> The code that combines components into pages is put here 
   |-reducers -> 
   |-widgets -> A set of utility components provided by Material-Tailwind for use throughout the app
   |-App.jsx -> Where the Routing paths and Component links reside
   |-Competitions.js -> Exports the Features array to make it convenient to render over in the competitions section of the compete page
   |-Features.js -> Exports the Features array to make it convenient to render over in the features section of the homepage
   |-images.js -> This file contains the images metadata to make it convenient to render on the HomePage 
   |-main.jsx -> This file renders the App.jsx file in the ThemeProvider and MaterialTailwindControllerProvider, which is necessary to make tailwind and material accessible throught the app
   |-routes.jsx -> This file contains the nested routes for dashboard
   |-Store.js -> This is the Redux Store, which we have used to make data be accessible by every component
</pre>
