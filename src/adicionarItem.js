"use strict";

const {v4} = require("uuid");
const AWS = require("aws-sdk")

async function handler(event) {
  const {item} = JSON.parse(event.body);
  const dataCriacao = new Date().toISOString();
  const id = v4()

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  var novoItem = {
    id,
    item,
    dataCriacao,
    itemStatus: false
  }

  await dynamodb.put({
    TableName: "ItemTable",
    Item: novoItem
  }).promise()

  return {
    statusCode: 200,
    body: JSON.stringify(novoItem),
  };
};

module.exports = { handler }