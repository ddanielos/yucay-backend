const AWS = require('aws-sdk');

const getBeers = async (event)=>{

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const result = await dynamodb.scan({
        TableName: 'BeerTypes'
    }).promise()

    const beers = result.Items

    return {
        beers
    }

}

module.exports = {
    getBeers
}