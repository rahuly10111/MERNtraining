import { connect } from 'mongoose';

export function connection() {
    return connect('mongodb://127.0.0.1:27017/PraticeUserdata')
        .then(() => {
            console.log("DB Connected");
        })
        .catch((error) => {
            console.log(error);
        });
}
