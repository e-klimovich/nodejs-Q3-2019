const _transform = (data) => String(data).toUpperCase();

export default () => process.stdin.on('readable', () => {
  const str = process.stdin.read();

  process.stdout.write( _transform(str) );
})
