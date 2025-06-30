const { start, add, end } = context;
const func = answer();

start();
const res = func();
add('test', res === 'test');
end();