const { buildSchema } = require("graphql");

module.exports = buildSchema(`

    type Post{
    _id : ID!
    title: String! 
    content : String!
    imageUrl : String!
    creator: String!
    createdAt:String!
    updatedAt: String!

    }
    type User {
    _id : ID!
    name: String! 
    email : String!
    password : String!
    status : String!
    posts : [Post!]!
    }


    type AuthData{
    token : String!
    userId : String!
    }


    input userInputData {
    email : String!
     name : String! 
     password : String!
    }

    input postInputData{
    title : String!
    content : String!
    imageUrl : String!

    }


    type RootQuery{
    login(email : String! ,password : String!): AuthData!
    }


 type RootMutation {
 createUser(userInput: userInputData): User!
 createPost(postInputData : postInputData): Post!
 }

  
    schema {
      query : RootQuery
      mutation : RootMutation 
    }
    
    
    `);

//here type is used when data is coming from the server and input is used when data is being sent to the server
