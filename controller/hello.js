const hello = (event) => {

    // for console we need stringify
    console.info("event.body", JSON.stringify(event.body))
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Hello World!',
                input: event,
            },
            null,
            2
        ),
    };
}

module.exports = { hello }