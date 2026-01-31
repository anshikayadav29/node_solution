const { Worker } = require('worker_threads');
new Worker(`console.log("Worker")`,{eval:true});
