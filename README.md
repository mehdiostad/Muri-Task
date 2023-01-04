# Muri-Task
A crawling system that uses MERN stack technologies to show the products of any page in digistyle.com
First of all, you have to write your URI in axios to requset the target website, after that it will parse the html source code with cheerio
and distinguish properties that you need, then it will push the objects to an array. Then it will insert all the items to mongodb.
All of these works would be done if you request to "http://localhost:8000/products/save".
After all, you can see all these products in front-end, and you can click any of them to see the original product in digistyle.com
