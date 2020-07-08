import { Eventing } from './Eventing';
import { UserProps } from './Interface';
import { Sync } from './Sync';

const rootUrl = 'http://localhost3000/users';
export class User {
	public events: Eventing = new Eventing();
	public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
}
