const _reverse = (str) => String(str).split('').reverse().join('');

export default () => process.stdin.on('readable', () => {
  const str = process.stdin.read();

  process.stdout.write( _reverse(str) );
})