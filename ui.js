class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    // show search results
    showProfile(user){
        this.profile.innerHTML = `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-2">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-2">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary mb-2">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary mb-2">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success mb-2">Followers: ${user.followers}</span>
                        <span class="badge badge-info mb-2">Following: ${user.following}</span>
                        <br></br>
                        <ul class="list-group mb-2">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-2">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    // show user repos
    showRepos(repos){
        let output = '';

        repos.forEach(repo => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary mb-2">Start: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary mb-2">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success mb-2">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        // output repositories
        document.getElementById('repos').innerHTML = output;
    }

    // show alert msg
    showAlert(message, className){
        // clear any remaining alerts
        this.clearAlert();
        // create div
        const div = document.createElement('div');
        // add class
        div.className = className;
        // add text
        div.appendChild(document.createTextNode(message));
        // get parent
        const container = document.querySelector('.searchContainer');
        // get search box
        const search = document.querySelector('.search');
        // insert alert
        container.insertBefore(div, search);
        // error disappears after three seconds
        setTimeout(() => {
           this.clearAlert(); 
        }, 3000);
    }

    // clear alert message (to not show it multiple times, but just one)
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        } 
    }

    // clear search results
    clearProfile(){
        this.profile.innerHTML = '';
    }
}