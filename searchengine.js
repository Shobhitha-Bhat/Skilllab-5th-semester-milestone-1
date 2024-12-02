const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())

const articles =
[
  {
    "id": 1,
    "title": "Backend Development",
    "content": "This is the backend content."
  },
  {
    "id": 2,
    "title": "Frontend Basics",
    "content": "This article introduces frontend development and its key concepts."
  },
  {
    "id": 3,
    "title": "Node.js Fundamentals",
    "content": "Learn the basics of Node.js and how it powers modern backend systems."
  },
  {
    "id": 4,
    "title": "Express.js Framework",
    "content": "Express.js simplifies backend development by providing essential tools for building APIs."
  },
  {
    "id": 5,
    "title": "API Design Principles",
    "content": "This article covers the best practices in designing RESTful APIs for backend services."
  },
  {
    "id": 6,
    "title": "Database Management",
    "content": "A deep dive into relational databases and how to interact with them using SQL."
  },
  {
    "id": 7,
    "title": "MongoDB for Developers",
    "content": "Learn how to work with MongoDB, a NoSQL database, in backend applications."
  },
  {
    "id": 8,
    "title": "Web Security Essentials",
    "content": "An overview of essential security measures for protecting web applications."
  },
  {
    "id": 9,
    "title": "Authentication Techniques",
    "content": "Explore various authentication methods like JWT, OAuth, and sessions."
  },
  {
    "id": 10,
    "title": "RESTful APIs",
    "content": "A guide to designing and consuming RESTful APIs for modern web applications."
  },
  {
    "id": 11,
    "title": "GraphQL Introduction",
    "content": "GraphQL allows clients to request exactly the data they need. This article explains its fundamentals."
  },
  {
    "id": 12,
    "title": "Asynchronous Programming in JavaScript",
    "content": "Understanding async programming techniques like callbacks, promises, and async/await."
  },
  {
    "id": 13,
    "title": "Microservices Architecture",
    "content": "This article explains the concept of microservices and how to implement them in backend systems."
  },
  {
    "id": 14,
    "title": "Docker and Backend Development",
    "content": "Learn how Docker containers can improve the deployment and scalability of backend systems."
  },
  {
    "id": 15,
    "title": "CI/CD for Backend Development",
    "content": "Continuous integration and continuous deployment practices for backend applications."
  },
  {
    "id": 16,
    "title": "Version Control with Git",
    "content": "Git helps in managing the version history of your codebase. This article covers the basics."
  },
  {
    "id": 17,
    "title": "WebSockets for Real-Time Communication",
    "content": "Learn how WebSockets enable real-time communication between clients and backend servers."
  },
  {
    "id": 18,
    "title": "Handling Errors in Backend Development",
    "content": "Best practices for error handling in backend services to ensure stability and reliability."
  },
  {
    "id": 19,
    "title": "Building REST APIs with Node.js",
    "content": "Learn how to build a REST API using Node.js and Express.js."
  },
  {
    "id": 20,
    "title": "Testing Backend APIs",
    "content": "Learn how to write tests for backend services to ensure correctness and prevent bugs."
  },
  {
    "id": 21,
    "title": "Caching Techniques for Backend Performance",
    "content": "A guide to caching mechanisms like Redis for speeding up backend services."
  },
  {
    "id": 22,
    "title": "Session Management in Web Applications",
    "content": "Session management strategies for handling user authentication in web applications."
  },
  {
    "id": 23,
    "title": "Building Scalable Backend Systems",
    "content": "Best practices for scaling backend systems to handle a large number of requests."
  },
  {
    "id": 24,
    "title": "Introduction to SQL Databases",
    "content": "A beginner's guide to SQL databases and how to interact with them for backend development."
  },
  {
    "id": 25,
    "title": "Data Validation in APIs",
    "content": "Ensuring that the data passed to APIs is valid and safe."
  },
  {
    "id": 26,
    "title": "ORMs for Backend Development",
    "content": "An overview of Object-Relational Mappers (ORMs) and their usage in backend development."
  },
  {
    "id": 27,
    "title": "Serverless Backend Development",
    "content": "An introduction to serverless architecture and how it changes the backend development landscape."
  },
  {
    "id": 28,
    "title": "API Rate Limiting",
    "content": "How to prevent abuse and overload of APIs through rate limiting."
  },
  {
    "id": 29,
    "title": "Caching with Redis",
    "content": "Using Redis as an in-memory data store to improve API response times and backend performance."
  },
  {
    "id": 30,
    "title": "Authentication in Microservices",
    "content": "How to manage authentication and authorization in microservice architectures."
  },
  {
    "id": 31,
    "title": "Automating Backend Tasks with Cron Jobs",
    "content": "Scheduling repetitive backend tasks using cron jobs in Node.js."
  },
  {
    "id": 32,
    "title": "HTTP/2 and Backend Optimization",
    "content": "Improving backend performance with HTTP/2 and its features."
  },
  {
    "id": 33,
    "title": "Message Queues in Backend Systems",
    "content": "How to implement message queues like RabbitMQ for handling asynchronous tasks in backend systems."
  },
  {
    "id": 34,
    "title": "Optimizing SQL Queries",
    "content": "Techniques to optimize SQL queries for faster database performance."
  },
  {
    "id": 35,
    "title": "OAuth 2.0 Authentication",
    "content": "A detailed guide on using OAuth 2.0 for securing APIs and applications."
  },
  {
    "id": 36,
    "title": "GraphQL vs REST",
    "content": "Comparing GraphQL and REST for building APIs and understanding their differences."
  },
  {
    "id": 37,
    "title": "File Uploads in Web Applications",
    "content": "How to handle file uploads in backend applications, from security to storage."
  },
  {
    "id": 38,
    "title": "Using JWT for API Security",
    "content": "Learn how to implement JSON Web Tokens (JWT) for secure API communication."
  },
  {
    "id": 39,
    "title": "Cloud-Native Backend Services",
    "content": "Developing backend services optimized for cloud environments and platforms."
  },
  {
    "id": 40,
    "title": "Event-Driven Architecture",
    "content": "How event-driven architecture enhances backend systems for scalability and reliability."
  },
  {
    "id": 41,
    "title": "Web API Documentation",
    "content": "Best practices for documenting APIs to make them easy to use and understand for developers."
  },
  {
    "id": 42,
    "title": "Graph Databases for Backend",
    "content": "An introduction to graph databases and their use cases in backend applications."
  },
  {
    "id": 43,
    "title": "Server-Side Rendering (SSR)",
    "content": "The benefits of Server-Side Rendering (SSR) for SEO and performance in web applications."
  },
  {
    "id": 44,
    "title": "Distributed Systems in Backend",
    "content": "An overview of distributed systems and how they improve backend reliability and performance."
  },
  {
    "id": 45,
    "title": "API Gateway Pattern",
    "content": "How API Gateways help manage and route API requests in microservices architectures."
  },
  {
    "id": 46,
    "title": "Building a Backend with Python",
    "content": "A guide to creating backend services using Python and Flask or Django."
  },
  {
    "id": 47,
    "title": "Using WebSockets in Node.js",
    "content": "Implementing WebSocket connections for real-time communication in Node.js applications."
  },
  {
    "id": 48,
    "title": "Load Balancing in Backend Systems",
    "content": "How load balancing helps distribute traffic across servers for optimal performance."
  },
  {
    "id": 49,
    "title": "API Documentation with Swagger",
    "content": "Creating interactive API documentation using Swagger for easier consumption of APIs."
  },
  {
    "id": 50,
    "title": "Handling Large Data in Backend",
    "content": "Techniques for handling large"
}
]

app.post('/addarticle',(request,response)=>{
    const { addtitle,addcontent }=request.body;
    if(!addtitle || !addcontent){
        response.send("Title and Content required");
    }else{
        const newid=articles.length+1;
        const newarticle=
            {
                "id":newid,
                "title":addtitle,
                "content":addcontent
            };
    
        articles.push(newarticle);
        response.send("Article added")
    }
})

app.get('/searcharticle',(request,response)=>{
    const searchQuery = request.query.input;
    const result = searchKeywords.get(searchQuery.toLowerCase());
    response.send(result);
})

app.get('/articleid',(request,response)=>{
    const idinput = request.query.input;
    const foundarticle = articles.find((art)=> art.id == idinput)
    response.send(foundarticle);

})

app.listen(1234,()=>console.log("Server Started!"));

//Indexing
const searchKeywords = new Map();
articles.forEach((ar) => {
    const keywords = ar.content.split(' ');
    keywords.forEach((word) => {
        const lw = word.toLowerCase();
        if(!searchKeywords.has(lw)){
            searchKeywords.set(lw, []);
        }
        searchKeywords.get(lw).push(ar);
    });
});


// http://localhost:1234/addarticle?addtitle=New%20Article&addcontent=This%20is%20the%20content
// htt