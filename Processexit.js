// exit-handler.js
process.on("exit", code => {
  console.log("Process exiting with code:", code);
});

process.exit();
