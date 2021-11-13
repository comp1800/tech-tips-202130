



db.collection("posts").orderBy("time", "desc").limit(1).get().then(snap=>{
    lastpost = snap.size;
})
.then(function(){
    
})