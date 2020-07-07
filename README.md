# Publicis Sapient
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Submission](#submission)
## General info
This project is simple UI developement assignment given by publisis sapient.
In which calling external API for getting hacker-news related data with thiere stories, comments, votes and so on.

## Technologies
Used pure Angular stack for developing the same.

Project is created with:
* Angular version: 10.0.2
* Angular CLI: 10.0.1
* Node version: 12.18.1

Project Components : 

* Main Module :
    * Feature Module :
        This module consist of two compoents i.e
        1. Hacker-News-Dashboard Component : 
       Responsible for loading hacker-news API related data in repective output format. This is parent component holding chil componets references. Createc 2 cutome pipes for data representation.
         1. hours from date : In this converted story created date to current date and time diffrences.
         2. host from URL : In thids geeting host name only from  stroy-url.

        2. Hacker-News-Chart Component :
        Responsible for showing story and votes data in line-chart format- for this Apex-Chart npm has been used. reflect rela time vote data changes from parent components changes.
    
    * Models :
        holding classes details which is used in application.
    
    * services :
        1. hacker-news service : service which is reponsible for getting data from hacker-news external api and provide to respective component.
        2. data-passing service : service which is used for sharing data from Parent Component(DashBoard) to Child(Chart).when story collection has changed, votes has changed and story has hide by user.
    



* Data-Storage :
    For storing votes and story-hides used localstorage of browser and which is persisted.storing votes used Map key-value collection for getting and setting values, for hiding story used simple string array and maintaing sotry id which is hided by user and when on page load check those id's from response and exclude those records from response and pass to components.

## Submission

 * Git : created repo in Git.
 * CI pipeline : pending.
 * Deployement : Project deployed on Heroku. [a link] https://publicis-sapient-assignment.herokuapp.com/
