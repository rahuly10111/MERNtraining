import { connect } from 'mongoose';
  connect('mongodb://127.0.0.1:27017/PraticeUserdata')
        .then(() => {
            console.log("DB Connected");
        })
        .catch((error) => {
            console.log(error);
        });

