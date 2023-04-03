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
    const response = await db.putItem(params);
    return response;
};


exports.get = async (event) => {
    const { id } = JSON.parse(event.body);
    // const { id } = event.path;
    const params = {
        TableName: 'gateway',
        Key: marshall({ id })
    }
    const { Item } = await db.getItem(params);

    return unmarshall(Item);
}