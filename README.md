# Scheduler

## Description

In this project, I created a scheduler based on an hourly basis of the workday from the hours 9am-5pm. 

This scheduler allows you to add a list of things todo within that hour chosen. After adding an item, you have the option
of saving it to your localstorage. This will allow the list of items saved, be returned to the lists after leaving the site and coming back. 

I created div codes for each hour within the workday, each containing an id for that specific hour. From here I used dayjs to help list out the current date and format it in the currentDay id. 

I then added a click event for each button. This event will save the text entered in the description and save it to that specific id key in the localstorage.

There is code that then gets the information from the local storage for each id and lists out the value in the description of specified id. 

The timecheck function gets the current hour and converts it to a 24 hours format. From here, we take the current hour and compares it to each id. If the id hour is less than the current time, we add the class 'past.' If the the id hour is equal to the current time, we add class 'present.' All else we add future. 

The biggest challenge, was learning how to set items to the local storage and then figuring out how to get items. 

I hope moving forward, I become more familiar with using jquery. 

