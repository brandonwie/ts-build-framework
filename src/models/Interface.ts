export interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

export interface Serializable {
	serialize(): {};
}

export interface Deserializable {
	deserialize(json: {}): void;
}
