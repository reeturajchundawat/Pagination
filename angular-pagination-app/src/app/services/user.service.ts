export class UserService {
    private apiUrl = 'https://dummyjson.com/users';

    async getUsers(page: number, limit: number) {
        const response = await fetch(`${this.apiUrl}?page=${page}&limit=${limit}`);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        return await response.json();
    }
}