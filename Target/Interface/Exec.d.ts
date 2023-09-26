export default interface Type {
    (Command: string, Echo?: false | ((Return: any) => void)): Promise<void>;
}
