import {UserDetails} from '../helpers/customTypes.ts';

const userDetails: UserDetails = {
  username: 'standard_user',
  password: process.env.PASSWORD ? process.env.PASSWORD : '',
};

export default userDetails;
