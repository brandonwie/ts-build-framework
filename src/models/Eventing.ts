type Callback = () => void;

export class Eventing {
	events: { [key: string]: Callback[] } = {};

	on = (eventName: string, callback: Callback): void => {
		const handlers = this.events[eventName] || [];
		handlers.push(callback);
		this.events[eventName] = handlers;
	};

	trigger = (eventName: string): void => {
		const handlers = this.events[eventName];

		if (!handlers || handlers.length === 0) {
			console.error(`Error: the event-listener "${eventName}" doesn't exist`);
			return;
		}

		handlers.forEach((callback) => {
			callback();
		});
	};
}
