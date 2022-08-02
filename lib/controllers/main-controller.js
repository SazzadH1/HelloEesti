
function helloEesti(ctx) {
const response = {text: 'Tere Eesti!'}
ctx.body = { text: response };
}

function addition(ctx) {
    const first = Number(ctx.request.query.number1);
    const second = Number(ctx.request.query.number2);
const sum= first+second;
    const response = {
        num1: first,
        num2: second,
        result:sum
      }

    ctx.body = response;
    }


function noYou(ctx) {
    const queryString = ctx.request.query.word;
    const response = {
        text: `Hello from the city of ${queryString}`
      }

    ctx.body = response;
    }


module.exports = {helloEesti, noYou, addition};