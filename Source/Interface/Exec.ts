export default interface Type {
	(
		Command: string,
		// rome-ignore lint/suspicious/noExplicitAny:
		Echo?: false | ((Return: any) => void)
	): Promise<void>;
}
