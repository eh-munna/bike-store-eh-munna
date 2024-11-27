import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

// * Start the server and listen on the specified port *
const main = async () => {
  try {
    // * Connect to a database *
    await mongoose.connect(`${config.dbUrl}`);

    app.listen(config.port, () => {
      // * Log a message indicating that the server is running *
      console.log(`Server is running on port ${config.port}`);
    });
    // * Log a message if something went wrong with database connection *
  } catch (error: any) {
    console.log('Error starting the server:', error);
  }
};
main();
