const { v4 } = require('uuid');
const AWS = require('aws-sdk');

const addBeer = async(event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const { title, cover, details, description, pair, abv, intensity } = JSON.parse(event.body);
    const createdAt = new Date()
    const id = v4();

    const newBeer = {
        id,
        title,
        cover,
        details,
        description,
        pair,
        abv,
        intensity,
        createdAt
    }

    await dynamodb.put({
            TableName: 'BeerTypes',
            Item: newBeer,
        }).promise()

    return {
        statusCode: 200,
        body: JSON.stringify(newBeer)
    }
};

module.exports = {
    addBeer,
}