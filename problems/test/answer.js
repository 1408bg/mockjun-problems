return () => {
  const arr = Array.from('toast');
  arr.splice(1, 2, 'e');
  return arr.join('');
};