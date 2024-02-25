import mongoose from "mongoose";

export async function connectMongoose() {
  const url = process.env.MONGODB_URI as string;
  
  try{
    await mongoose.connect(url);
    console.log('connected to mongo db successfully')
  } catch {
    throw Error('error connecting to mongo db')
  }

}

export async function disconnectMongoose() {
  try {
    
      await mongoose.disconnect()
      console.log('disconnected mongo db successfully')
  } catch (error) {
    console.log('cannot close mongodb connection: ', error)
  }
}
