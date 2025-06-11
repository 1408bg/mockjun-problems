const { start, add, end } = context;

start();

const s = answer();

const numbers = [
  '010-1234-5678',
  '010-1234-5678'
];

numbers.forEach(number => {
  add(number, s(number) === number.split('-').at(-1));
});

end();