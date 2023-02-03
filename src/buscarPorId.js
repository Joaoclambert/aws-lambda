"use strict";

const AWS = require("aws-sdk");

async function handler(event) {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    try {
        const itemNoDynamo = await dynamodb.get({
            TableName: "MinhaTabela",
            Key: {
                id: event.pathParameters.id
            }
        }).promise();

        return {
            statusCode: 200,
            body: JSON.stringify(itemNoDynamo.Item),
        };

    } catch (error) {
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify({}),
    };
};

module.exports = { handler };