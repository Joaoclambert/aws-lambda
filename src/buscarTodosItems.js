"use strict";

const AWS = require("aws-sdk");

async function handler(event) {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    let items;

    try {
        const listaDeItems = await dynamodb.scan({
            TableName: "MinhaTabela"
        }).promise();

        return {
            statusCode: 200,
            body: JSON.stringify(listaDeItems.Items),
        };

    } catch (error) {
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify([]),
    };
};

module.exports = { handler };