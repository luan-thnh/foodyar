const { default: mongoose } = require('mongoose');

mongoose.set('strictQuery', true);

async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://foodyar:foodyar@cluster0.to3szhj.mongodb.net/foodyar'
    );
    console.log('Database connected!!');
  } catch (error) {
    console.log('Database not connected!!');
  }
}

module.exports = { connect };
