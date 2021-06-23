<h1>Analyzing the Daily Trends on Twitter</h1>

<h3>Description:</h3>
Twitter is a microblogging system that allows users to send and receive short posts called tweets. This leads to a massive accumulation of the data daily. The aim of our project is to analyze the daily trending topics on Twitter. We have collected the top trending topics for India over a period of four days using the Twitter API. With respect to trending topics, we have retrieved the tweets related to the top 10 topics per day.

<h3>Database:</h3>
We used MongoDB Compass to store the data we have collected. Since the data collected is in JSON and CSV format we chose MongoDB database to store it, since it is schema-free and allows us to create documents without defining their structure first.

<h3>Goals:</h3>
Our project objective is divided into the following three goals
a) To clear the tweet texts thoroughly to remove unwanted punctuations, articles, prepositions & meaningless words. Then splitting each record & creating a bag of words. Finally, finding the second most used word in the tweet texts with respect to each topic.
b) To find the top 10 most tweeted/trending topics out of all the topics in our dataset. 
c) To find the topics that are trending for more than one day throughout the period. We used Spark parallel processing for this, created an RDD out of the dataset. Used the unction CountbyValue() & sorted() to perform the operation.

API:
We have used the Twitter API along with the Tweepy library in python for accessing the API. We have used trends_place(), Cursor() methods of tweepy library to retrieve information related to trending topics and their respective tweets.

Tweepy Methods:
1. For trends_place() method we have used the WOEID[23424848] identifier for our target location India and retrieved the daily trending topic names.
2. For Cursor () method we have used the api.search() criteria to fetch data for a particular search word (referring to trending topic names). And, we have fetched up to 100 tweets per trending topic name.
Datasets:
1. Trending Topics Dataset: This dataset comprises statistics for the daily trending topics on Twitter. It has five features namely name, tweet_volume, url, promoted_content & query. Each day there are 50 top trending topics on Twitter, we have a collection of 200 topics as we collected data over a period of 4 days.

MongoDB Database:
The data is stored in MongoDB as Trendingtopics and Tweet Data

User Interface:
Since we have used MongoDB for the database we decided to use MERN stack development for the web application. We have used Express as the web application framework for Node.js. React as javascript front end library for the front end and
Node.js as the javascript run time environment.
 We have used Mongoose to connect to MongoDB which makes the communication easy with Node.js.
 Cross-origin resource sharing(CORS) package is used which allows access of resources from remote hosts.
 We have used nodemon server to make development easier.
 We have used axios library to send HTTP requests to our backend.
The mongoose is utilized to connect to the MongoDB in the backend section of the code. In the front end section we have used react with axios library to communicate with the backend section.

<h3>Results:</h3>
Goal 1: Finding the second most common word per trending topic.
![Goal1-1](https://github.com/Manikantacb/Analyzing-the-Daily-Trends-on-Twitter/blob/main/Result1.png)
![Goal1-2](https://github.com/Manikantacb/Analyzing-the-Daily-Trends-on-Twitter/blob/main/Result1-1.png)

Goal 2: Top 10 Trending Topics based on Tweet Volume
![Goal2-1](https://github.com/Manikantacb/Analyzing-the-Daily-Trends-on-Twitter/blob/main/Result2.png)
![Goal2-2](https://github.com/Manikantacb/Analyzing-the-Daily-Trends-on-Twitter/blob/main/Result2-1.png)

Goal 3: Trending topics for more than one day throughout the period
![Goal3-1](https://github.com/Manikantacb/Analyzing-the-Daily-Trends-on-Twitter/blob/main/Result3.png)
![Goal3-2](https://github.com/Manikantacb/Analyzing-the-Daily-Trends-on-Twitter/blob/main/Result3-1.png)


