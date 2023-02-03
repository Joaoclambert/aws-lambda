"use strict";

async function hello(event) {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: "Olá Mundo",
                input: event,
            },
            null,
            2
        ),
    };
}


module.exports = {
    handler: hello
}