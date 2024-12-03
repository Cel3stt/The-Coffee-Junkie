const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
       
    },
    lastname:{
        type:String,
        required:true,
      
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});

//Export the model
// module.exports = mongoose.model('User', userSchema);
// // Add Google OAuth fields to schema
// userSchema.add({
//   googleId: {
//     type: String,
//     unique: true,
//     sparse: true
//   },
//   googleDisplayName: String,
//   googleEmail: {
//     type: String,
//     unique: true,
//     sparse: true
//   },
//   googleProfilePhoto: String
// });

// // Google OAuth login method
// userSchema.statics.findOrCreateGoogleUser = async function(profile) {
//   try {
//     // Check if user exists
//     let user = await this.findOne({ googleId: profile.id });
    
//     if (user) {
//       return user;
//     }

//     // Check if email already exists
//     user = await this.findOne({ email: profile.emails[0].value });
    
//     if (user) {
//       // Link Google account to existing user
//       user.googleId = profile.id;
//       user.googleDisplayName = profile.displayName;
//       user.googleProfilePhoto = profile.photos[0].value;
//       await user.save();
//       return user;
//     }

//     // Create new user
//     const newUser = await this.create({
//       firstname: profile.name.givenName,
//       lastname: profile.name.familyName,
//       email: profile.emails[0].value,
//       googleId: profile.id,
//       googleDisplayName: profile.displayName,
//       googleEmail: profile.emails[0].value,
//       googleProfilePhoto: profile.photos[0].value,
//       // Set a random password since it's required but not used for OAuth
//       password: Math.random().toString(36).slice(-8)
//     });

//     return newUser;
//   } catch (error) {
//     throw error;
//   }
// };
