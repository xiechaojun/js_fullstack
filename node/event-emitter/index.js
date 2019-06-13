function main(arg) {
  console.log(arg);
  if(!arg || !arg.length) {
    arg = arg[2];
  }
  console.log(argv);
}
main(process.argv);