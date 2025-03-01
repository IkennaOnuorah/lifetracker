📝 `NOTE` Use this template to initialize the contents of a README.md file for your application. As you work on your assignment over the course of the week, update the required or stretch features lists to indicate which features you have completed by changing `[ ]` to `[x]`. (🚫 Remove this paragraph before submitting your assignment.)

# Week 3 Assignment: Life Tracker

Submitted by: **Ikenna Onuorah**

Deployed Application: [Lifetracker Deployed Site](http://localhost:3001/)

## Application Features

### Core Features

- [ x] **The Nav Bar:** Implement customized views for users who are logged in vs not logged in.
  - [ x] If the user is logged in, it should display a **Sign Out** button. 
  - [ x] If no user is logged in, it should display **Login** and **Register** buttons
  - [ x] Display a logo on the far left side, and contain links to the individual detailed activity page. 
- [ x] **The Landing Page:** Display a large hero image and a brief blurb on what this application is about
- [ x] **Login Page:** A form that allows users to login with email and password.
- [ x] **Registration Page:** A form that allows the user to sign up with their email, password, username, first name, and last name.
- [ x] When a user first authenticates, they should be redirected to an authenticated view (i.e the detailed activity page). When they sign out, all frontend data should be reset.
- [ x] Users have access to an overview Activity page that show one summary statistic about each of the 3 types of activity tracked.
- [ x] The API should have a `security` middleware that only allows authenticated users to access resources and only allows users to access resources about themselves. 
- [ x] Users should have the ability to track at least **1** types of activities (i.e Nutrition, Exercise, Sleep, etc.). Each activity should be tracked on separate pages.
- [ x] Deployed website with Heroku & Surge. 

**Detailed Activity Page:**
- [ x] The detailed activity page should display a feed of all previous tracked activities.
- [ x] The detailed activity should contain a form to contain relevant information. (i.e if tracking nutrition this form allows the user to capture calories, timestamp, image, category, etc.) 
- [ x] The activity tracked should be given a unique id for easy lookup.
  `TODO://` Add link to table schema in the link code below. Your file should end in `.sql` and show your schema for the detailed activities table. 
  * [Table Schema](./backend/lifetracker-schema.sql) 

### Stretch Features

Implement any of the following features to improve the application:
- [ ] Each model (`nutrition`, `exercise`, and `sleep`) should also implement a `fetchById` method that queries the database for a record by its id and only serves it to users who own that resource. Create a new dynamic route on the frontend that displays detail about a single record. For instance, `nutrition/detail/:id` should show a page with all the information about a single nutrition item.
- [ ] Provide a dropdown that allows users to filter activity based on a certain attribute of any activity item.
- [ ] Calculate aggregate statistics based on time periods - such as daily, weekly, monthly aggregates.
- [ ] Create a page that shows all other users that use the life tracker application and allow users to follow each other.

### Walkthrough Video

`TODO://` Add the embedded URL code to your animated app walkthrough below, `ADD_EMBEDDED_CODE_HERE`. Make sure the video or gif actually renders and animates when viewing this README. 
<div style="position: relative; padding-bottom: 53.75%; height: 0;"><iframe src="https://www.loom.com/embed/e87af2b9fcea4599bb761715b3be4327" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

[I felt unprepared for the backend side of this project. I had a hard time being able to connect my frontend and backend to work together. Creating tokens was a aspect that i didn't understand well in the lab. ]

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.

[  If I had more time I would try to implement some of the stretch features to make my website even more interactive.
]

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

[What went well was that my nav  links were set up correctly and I was successfully able to visit each page. My login and signup worked as it should. The user would be able to login and sign up successfully. Some things that I would have to work on is to get my activity and exercise component to work. I noticed that my peer had a very nice and simple layout on their frontend. So next time I would want to improve my site by making it easy for the user to interact with.]

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

[I would like to give a shoutout to my felllow interns Aloye and Yaw for asisting me in better understanding how to link my backend to my frontend to work together. Also for guiding me through the steps of what is needed in the backend to make my site functional and the correct way to implement tokens.]
