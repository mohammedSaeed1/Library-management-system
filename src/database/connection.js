import mongoose from 'mongoose';


const URI = `mongodb://127.0.0.1:27017/NTI-COURSES-PLATFORM-EXAM`;

export const databaseConnection = mongoose.connect(URI).then(_ =>{console.log(`Database conntected succesfully !`);})
.catch(err => {console.log(err);});

