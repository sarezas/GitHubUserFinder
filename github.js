class GitHub {
    constructor() {
        this.client_id = 'f5f8d3fd7c938965c2bb';
        this.client_secret = 'dc4589fa105a47c2ed5c470d49050f8e73971c29';
        this.repos_count = 6;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        };
    }
}