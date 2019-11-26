var golbalVariable = 'Ma aflu in contextul global';

if (true) {
  let localVariable = 'Ma aflu in contextul local';

  console.log(golbalVariable);
  console.log(localVariable);
}

console.log(localVariable);