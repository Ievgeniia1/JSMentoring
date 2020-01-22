const superagent = require('superagent');


async function test() {
    await Promise.all([
            superagent.get("https://swapi.co/api/people/1"),
            superagent.get("https://swapi.co/api/people/2")
        ]
    ).then(data => {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].status);
            console.log(data[i].body.name)
        }
    });
}

test();