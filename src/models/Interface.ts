export interface Serializable {
	serialize(): {};
}

export interface Deserializable {
	deserialize(json: {}): void;
}
