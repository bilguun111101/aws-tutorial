const AWS = require('aws-sdk');
const lambda = new AWS.Lambda();

const add = async (num1, num2) => {
    return await new Promise((resolve, reject) => {
        const params = {
            FunctionName: 'arn:aws:lambda:us-east-1:486626735760:function:add-function',
            Payload: JSON.stringify({
                num1,
                num2
            })
        };

        lambda.invoke(params, (err, results) => {
            if (err) reject(err);
            else resolve(results);
        })
    })
}

exports.handler = async (event) => {
    console.log("Event", event);
    return add(event.num1, event.num2);
}
