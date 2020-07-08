export interface UserProps {
	id?: number;
	email?: string;
	name?: string;
	age?: number;
}

export interface Serializable {
	serialize(): {};
}

export interface Deserializable {
	deserialize(json: {}): void;
}
