const { default: mongoose } = require('mongoose');

async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://hxrrnhVyLBPNcdo1:hxrrnhVyLBPNcdo1@cluster0.to3szhj.mongodb.net/foodyar'
    );
    console.log('Database connected!!');
  } catch (error) {
    console.log('Database not connected!!');
  }
  ('');
}

module.exports = { connect };
