const { DynamoDB } = require("@aws-sdk/client-dynamodb");
const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");

const db = new DynamoDB();

// GET METHOD
exports.handler = async (event) => {
  const { id } = JSON.parse(event.body);
  const params = {
    TableName: 'gateway',
    Key: marshall({ id })
  }
  const { Item } = await db.getItem(params);
  // const Clean = unmarshall(Item);
  // console.log(Item);
  return {
    // statusCode: 200,
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Headers': '*',
    //   'Access-Control-Allow-Credentials': true,
    // },
    // body: JSON.stringify(Clean),
  }
}
