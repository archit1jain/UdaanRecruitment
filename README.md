# UdaanRecruitment
This is  a HouseKeeping App APIs.

Built using -
NodeJS
ExpressJS.

I created the API collection in this App. I haven't used any UI but every API is working.
Also, I parsed JSON object  instead of using any DBMS so that I can concentrate on API more.

To Run the app.

1. npm start

It will start the app and will redirect to the index Page.

2. Open Browser.
3. Enter URL - "localhost:5000"

or just open "https://udaanrecruitment.herokuapp.com/"

Now we can access APIs.

4. To check all the APIs. We can use POSTMAN for checking the POST and GET.

  a.) For /add-asset: POST new asset to this extention and the updated JSON will be displayed.
  
  b.) For /add-task: POST new asset to this extention and the updated JSON will be displayed.
  
  c.) For /add-worker: POST new asset to this extention and the updated JSON will be displayed.
  
  d.) For /assets/all: Will display every asset.
  
  e.) For /allocate-task: POST new task-allocation to this extention and the updated JSON will be displayed.
  
  f.) For /get-tasks-for-worker/id: will return JSON object with worker ID same as the URL.
  

5. Assets : { id: "" , Name: "" }
6. Tasks: {id: "", Name: ""}
7. Worker: {id: "", Name:""}
8. Task Allocation: {id: "",AssetID: "" ,TaskId:"",WorkerID: "",timeofallocation:"",tasktobecompleteedby:""}



assets/all

![alt text](https://github.com/archit1jain/UdaanRecruitment/blob/master/assets-all.PNG)

/add-assets

![alt text](https://github.com/archit1jain/UdaanRecruitment/blob/master/2.PNG)

![alt text](https://github.com/archit1jain/UdaanRecruitment/blob/master/3.PNG)


/add-task

![alt text](https://github.com/archit1jain/UdaanRecruitment/blob/master/4.PNG)

![alt text](https://github.com/archit1jain/UdaanRecruitment/blob/master/5.PNG)


/add-worker

![alt text](https://github.com/archit1jain/UdaanRecruitment/blob/master6.PNG)

![alt text](https://github.com/archit1jain/UdaanRecruitment/blob/master/7.PNG)


/allocate-task

![alt text](https://github.com/archit1jain/UdaanRecruitment/blob/master/*.PNG)

![alt text](https://github.com/archit1jain/UdaanRecruitment/blob/master/9.PNG)


/get-tasks-for-worker/id
![alt text](https://github.com/archit1jain/UdaanRecruitment/blob/master/10.PNG)


These are some creenshots from POSTMAN APP>


Also You can check out this app on heroku,

"https://udaanrecruitment.herokuapp.com/"

