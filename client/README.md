# Transit Academy Registry.

` Transit Academy Registry` is a complimentary service application for Transit academy students and staff that include teachers and finance staff. A teacher in the academy is allocated courses by the school to teach which the students register to attend. The students are responsible of initiating their own registrations and making adjustments that include editing the registrations, deleting the registrations provided they have done payments for the courses and the deadline day is not yet.

A finance officer in the academy enters payment records to the school database which captures the student name  and the amount, the date created and the last date of payment update. The application has three categories of users,i.e students, teachers and the finance team each of who logs in with their preset changeable credentials.

## Using the App.

### 1. Student.
Once logged into the system, a student accesses a dashboard that has three cards for summaries.The cards represent the number of registered courses, the likely cumulative number of teachers that could teach in all those courses where a course has two alternatives for teachers and the cumulative payments for the semester.Besides, the dashboard shows the student the courses that are currently on offer in the academy and from which they can choose the ones to register.

The registration table also shows grades for the various units they have registered for. For those registrations that are already graded, the student cannot tamper with them. The payments tab for the student account contains a table that shows the payments that the student has done in the semester and the specific day when the payment was made.

<p float="left">
  <img src="./public/demos/studentDashboard.png" width="350" height="200"/>
  <img src="./public/demos/studentRegistration.png" width="350" height="200"/> 
  <img src="./public/demos/studentPayment.png" width="350" height="200"/>
</p>

### 2.Teacher.
A Teacher account has the dashboard and the grading panel.In the dashboard, the teacher has 2 summary cards one with their total allocated courses for the semester and the other has the total student audience for all the allocated courses i.e. the cumulative number of students who have registered for all the courses allocated to the teacher for the semester. Besides the summares, a teacher can see the specifics of the courses allocated to them as well as see the courses' registered students' details.

In the grading panel, a teacher is able to choose a course and get the list of the students registered for that course with an option to grade them. For registrations already graded the teacher cannot tamper with those.

<p float="left">
  <img src="./public/demos/teacherDashboard.png" width="330" height="200"/>
  <img src="./public/demos/teacherGrading.png" width="330" height="200"/> 
</p>

### 3. Finance Staff.

The finance team has a sole responsibility of creating payments in the system for students who bring invoices. They are able to choose from the database of students. They also can search/filter payments by a given student.

  <img src="./public/demos/financeView.png" width="315" height="200"/>

## Technologies.

The following are the technologies that have been used to realize this project:
  
  1. React Js
  2. CSS
  3. Backend Powered by a ruby Sinatra app.

The project backend is built using `ruby sinatra framework` that uses the `ActiveRecord` Object Relational Mapper' to interact with the database.Sinatra is a lightweight web server framework that abstracts the basic routing functionalities.

## System Acess

Mess around  the project as a student using the username `Marcos1` and `Marcos` as the password.

## Accessing the hosted project.
   
This project is hosted in a model of halves. This frontend that is built using React.js is hosted on `Netlify` while the powering `Ruby Sinatra App` is hosted on `Heroku`.

The project can be accessed live at [Transist Registry.](https://transitregistry.netlify.app/).

  ## Get a copy/ personify.

The following is the process of getting your own copy of the project.

`Transit Registry` is  verion-controlled in two different github repositories, one for the backend `https://github.com/samuelmwaura/transit_academy_server` and the other carrying the app interface `https://github.com/samuelmwaura/transit_academy_client`;

To get copies of each:
   1. Navigate to the main project's github repo via the link, `https://github.com/samuelmwaura/triadhealth`
   2. Click the fork button to fork it to your personal github account.
   3. Once you have a copy in your github account,copy the ssh url -`git@github.com:samuelmwaura/transit_academy_client.git` or the https - `https://github.com/samuelmwaura/transit_academy_client.git` depending on the preference and the github access configuration of your machine.
   3. Open your terminal (Unix OSs are the presumed operating system for your computer.For any other operating systems, the instruction might be different) and navigate to the folder your desire the project to be located

   Use the following command to clone the project locally.
   ```bash
   git clone preferred url;
   ```
  Once the project user interface has been cloned to the local machine, navigate to the created project directory , `cd "Project Directory"`.Open your code editor in this folder to access the project sourcecode.Before beginning to edit the files, run `npm install` to install all the dependencies and later `npm start` to launch the app in the browser.Begin editing the files.

  Follow the above process for the backend at `https://github.com/samuelmwaura/transit_academy_server`.Once you open the project in the code editor window, `run bundle` install to install the project dependencies and start editing.


     
   ## License.
   This project is under the MIT GRO  licenses:

   [MIT](https://choosealicense.com/licenses/mit/)


