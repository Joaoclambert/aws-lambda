"use strict";

const AWS = require("aws-sdk")

async function handler(event) {

  const {itemStatus} = JSON.parse(event.body);

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  await dynamodb.update({
    TableName: "MinhaTabela",
    Key: { id: event.pathParameters.id },
    UpdateExpression: 'set itemStatus = :itemStatus',
    ExpressionAttributeValues: {
      ':itemStatus': itemStatus
    },
    ReturnValues: "ALL_NEW"
  }).promise()

  return {
    statusCode: 200,
    body: JSON.stringify({ mensagem: 'Atualizado com Sucesso'} ),
  };
};


module.exports = { handler }