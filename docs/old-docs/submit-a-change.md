### Open Development

All work on Secret Website happens directly on GitHub. Team members and external contributors send pull requests which go through the same review process.

### Branch Organization

We have two difderents branches `main` and `dev`. If you want to contriubute on this project, submit all changes directly to the dev branch. 

### Steps To Contribute

##### Work in dev branch

If is your first time using our github repo, firtst you need to go Project Setup link. Configurate the project and all the required enviroment to be able to run the project.

If you already have our repo running locally but are in the `main` branch is indespensable to move on `dev` branch. You can validate this running in your terminal the following command ` git branch `, it is not display a `dev` branch, follow the next command: 

```bash
git checkout --track origin/dev
```

This command will retrieve the dev branch on our “origin”. The “origin” refers to the remote repository with which our repository is associated.

The “dev” branch will be saved to a local branch. Then, our Git HEAD will change to the “dev” branch. This means we’ll move from viewing whatever branch we were on to the “dev” branch.

##### Upload your changes
Once your changes has already done and you feel ready to contibute your awesome job with the secret website community. Make sure all your stages and commits are update. Then upload your changes into your current `dev branch`.

```bash
git pull origin dev
```

##### Submit a pull request
Feel free tou submit a pull request. Once your changes and commits has already done on the github remote repository, create a new pull request from your terminal or directly from github website.

##### Pull request review
The team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation. We’ll do our best to provide updates and feedback throughout the process.

#### Merging purposal
In a pull request, you propose that changes you've made on a head branch should be merged into a base branch on this case is `main`. 

If youproposal is accepted by a team member your changes are going to be available in the official website.

