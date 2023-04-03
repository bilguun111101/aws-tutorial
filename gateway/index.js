const { DynamoDB } = require("@aws-sdk/client-dynamodb");
const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");

const db = new DynamoDB();

exports.handler = async (event) => {
  const {
    id,
    book,
    username,
    university
  } = JSON.parse(event.body);
    const student = marshall(
      {
        id,
        book,
        username,
        university
      }
    )
    const params = {
      TableName: 'gateway',
      Item: student,
    }
    const { $metadata } = await db.putItem(params);
    return {
      body: JSON.stringify($metadata)
    };
};


exports.get = async (event) => {
    // const { id } = JSON.parse(event.queryStringParameters);
    const { id } = event.queryStringParameters;
    // const { id } = event.path;
    const params = {
        TableName: 'gateway',
        Key: marshall({ id })
    }
    const { Item } = await db.getItem(params);
    const response = unmarshall(Item);

    return {
      body: JSON.stringify(response)
    };
}