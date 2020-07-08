export class Attributes<T> {
	constructor(private data: T) {}

	get = <K extends keyof T>(key: K): T[K] => {
		// 'this' will be correctly bound to the instance of attr that we created
		return this.data[key];
	};

	set(update: T): void {
		Object.assign(this.data, update);
	}

	getAll(): T {
		return this.data;
	}
}
