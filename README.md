# Course Companion
Course companion is a tool which helps students plan their studies and find suitable courses
## Functional
### Background
Today most students at LiU use a more or less customized Excel sheet which has been created over and over again, in many different fashions. These sheets are not necessarily reliable, and ask the user to bring most data into it, only assisting with some simple calculations and a little structure. We see a need for a unified, user friendly tool, which can be used by all (LiU)-students to plan their studies.
### Vision
Course companion will become the university standard in terms of study planning aid.
### Core functions
* Let users specify their education through simple, pre-defined choices
* Generate users' probable progression through their education
* Let users modify generated data to simulate their situation
* Compare users' progress to program goals
## Technical
We intend to use technology that we have limited experience with, but feel comfortable knowing it should integrate well
### Front-end
Our intended front-end framework is React, with the potential extension to use a state-manager such as Redux. We believe that React will easily let us customize the front-end experience depending on the data supplied and allow us to exercise strict control of the data at the same time. We are aware that React may be lacking in terms of handling state, and will consider bringing Redux or similar into the stack if there is an apparant need.
### Server
We intend to use Meteor for running our server. We have a little bit of experience doing this from before, and believe that it should integrate smoothly with React when done right. The choice is based on slight familiarity and we believe that we can learn to use it in a way which will be useful to our application.
### Deployment
Heroku was at first our platform of choice, because we have some previous experience using it with very few hick-ups, but in an attempt to learn something new, we intend to deploy to Openshift, with Heroku being a fall-back. We have no knowledge of potential compatability issues in specific deployment environments, so we did not consider the rest of our tech stack when choosing to work with Openshift.