import { connect, connection } from "mongoose";

const mongooseStart = () => {
  try {
    connection.on("open", () => {
      console.log(`mongo connection is open on port ${process.env.MONGO_PORT}`);
    });
    connect(
      `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        autoIndex: false,
      }
    );
  } catch (error) {
    console.log(`mongoDb connection error: ${error.message}`);
  }
};

export default mongooseStart