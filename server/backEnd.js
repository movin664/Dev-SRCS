const{spawn}=require('child_process');

const process=spawn('python',['./hello.py','andrew']);

process.stdout.on('data',data=>{

    console.log(data.toString());
});
