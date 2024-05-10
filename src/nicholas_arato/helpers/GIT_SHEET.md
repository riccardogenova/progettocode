<!-- @format -->

# **GIT CHEAT SHEET**

## Table of Contents

1. [Foundational Commands](#foundational-commands)
   - 1.1 [Getting Started](#getting-started)
   - 1.2 [User Configuration](#user-configuration)
2. [Working with Files](#working-with-files)
   - 2.1 [File Management](#file-management)
   - 2.2 [Committing Changes](#committing-changes)
3. [Navigating the Repository](#navigating-the-repository)
   - 3.1 [Repository Insights](#repository-insights)
   - 3.2 [Branching and Merging](#branching-and-merging)
   - 3.3 [Integrating Changes](#integrating-changes)
4. [Remote Collaboration](#remote-collaboration)
   - 4.1 [Connecting with Remotes](#connecting-with-remotes)
   - 4.2 [Synchronizing Changes](#synchronizing-changes)
5. [Advanced Operations](#advanced-operations)
   - 5.1 [Conflict Resolution](#conflict-resolution)
   - 5.2 [Workflow Optimization](#workflow-optimization)

## Foundational Commands

### Getting Started

- **Initialization**: Begin your Git journey by initializing a new repository or cloning an existing one.
  - `git init`: Initialize a new Git project in your current directory.
  - `git clone repository_url`: Obtain a copy of an existing repository onto your local machine.
  - `git clone --depth=1 repository_url`: Clone a repository with only the latest commit for faster cloning in large repositories.
  - `git clone --branch branch_name repository_url`: Clone a specific branch of a repository.

### User Configuration

- **Personalization**: Tailor Git to your preferences by configuring user details and default behaviors.
  - `git config --global user.name "Your Name"`: Set your identity for commit attribution.
  - `git config --global user.email "your@email.com"`: Specify your email address for Git interactions.
  - `git config --global core.editor "your_editor_name"`: Define your preferred text editor for Git operations.
  - `git config --global core.autocrlf true`: Configure Git to automatically convert line endings to the appropriate format for your operating system.
  - `git config --global core.ignorecase true`: Set Git to ignore case differences in file names.

## Working with Files

### File Management

- **Tracking Changes**: Manage file modifications, additions, and removals efficiently.
  - `git add file_name`: Stage specific changes for inclusion in the next commit.
  - `git add .`: Add all modified files to the staging area.
  - `git add -p`: Interactively stage changes, allowing you to review and select which changes to include in the staging area.
  - `git rm file_name`: Delete a file from both the working directory and staging area.
  - `git rm --cached file_name`: Remove a file from the staging area but preserve it in the working directory.
  - `git mv old_name new_name`: Rename a file and stage the modification.
  - `git mv -f old_name new_name`: Force renaming of a file, overriding any checks for file changes.

### Committing Changes

- **Recording Progress**: Document your work with descriptive commit messages.
  - `git commit -m "Commit message"`: Create a new commit with a concise description of changes.
  - `git commit -a -m "Commit message"`: Add and commit all modified files in a single step.
  - `git commit --amend`: Amend the last commit with additional changes or a new message.
  - `git commit --no-verify -m "Commit message"`: Commit changes without running pre-commit and commit-msg hooks.
  - `git commit --date="YYYY-MM-DDTHH:MM:SS"`: Specify the commit date and time.

## Navigating the Repository

### Repository Insights

- **Reviewing History**: Explore the evolution of your project through commit logs and status updates.
  - `git status`: Check the current state of your repository and staged changes.
  - `git status -s`: Display a concise status with the changes in a short format.
  - `git log`: Examine the commit history of your project.
  - `git log --oneline`: Display the commit history in a concise format.
  - `git log --graph --oneline --all`: Visualize branch and commit relationships graphically.
  - `git log --author="Author Name"`: Show commit history filtered by the specified author.

### Branching and Merging

- **Managing Branches**: Organize your work with branches for parallel development and feature isolation.
  - `git branch`: List all existing branches in your repository.
  - `git branch branch_name`: Create a new branch to diverge from the main line of development.
  - `git branch -d branch_name`: Delete a branch.
  - `git branch -m old_name new_name`: Rename a branch.
  - `git branch -r`: List remote branches.
  - `git branch -vv`: Show the tracking branch and its relationship to the local branch.
  - `git checkout branch_name`: Switch to a different branch to continue work or explore changes.
  - `git checkout -b branch_name`: Create and switch to a new branch.

### Integrating Changes

- **Incorporating Updates**: Merge or rebase changes from one branch into another to consolidate progress.
  - `git merge branch_name`: Combine changes from a specified branch into the current branch.
  - `git rebase branch_name`: Incorporate changes from another branch while preserving a linear commit history.
  - `git merge --abort`: Abort an ongoing merge operation and restore the pre-merge state.
  - `git rebase -i HEAD~n`: Initiate an interactive rebase for the last 'n' commits, allowing for squashing, reordering, or editing commits.

## Remote Collaboration

### Connecting with Remotes

- **Linking Repositories**: Establish connections with remote repositories for collaboration and code sharing.
  - `git remote`: View the configured remote repositories for your project.
  - `git remote add remote_name remote_url`: Associate a new remote repository with your local project.
  - `git remote -v show`: Display detailed information about remote repositories, including URLs and fetch/push configuration.
  - `git remote rename origin new_name`: Rename the remote repository from 'origin' to a new name.
  - `git remote prune origin`: Remove remote branches that no longer exist on the remote repository.

### Synchronizing Changes

- **Sharing Updates**: Exchange changes with remote repositories to maintain consistency across collaborators.
  - `git fetch`: Retrieve changes from remote repositories without merging them into your local branch.
  - `git fetch --all`: Fetch changes from all remote repositories.
  - `git diff`: Display differences between the staging area and the last commit.
  - `git diff --cached`: Show the differences between the staging area and the last commit.
  - `git stash`: Temporarily store unfinished changes to switch context or resolve conflicts later.
  - `git stash apply stash@{n}`: Apply a specific stash without removing it from the stash list.
  - `git tag tag_name`: Create a tag for a specific commit.

## Advanced Operations

### Conflict Resolution

- **Resolving Conflicts**: Address conflicts arising from divergent changes in different branches or repositories.
  - `git diff branch1..branch2`: Compare differences between two branches.
  - `git mergetool`: Utilize a merge tool to facilitate conflict resolution in a graphical interface.
  - `git reset file_name`: Remove the file from the staging area.
  - `git reset --merge`: Undo a failed merge operation and restore the repository to its pre-merge state.
  - `git reset --hard commit_hash`: Reset the repository to the specified commit, discarding subsequent commits.

### Workflow Optimization

- **Enhancing Efficiency**: Employ advanced Git techniques to streamline your development process and improve productivity.
  - `git push remote_name branch_name`: Push a branch to a remote repository.
  - `git push --force origin branch_name`: Force push to a remote repository, overwriting history with local changes.
  - `git pull remote_name branch_name`: Fetch and merge changes from a remote repository.
  - `git pull --rebase origin branch_name`: Fetch changes from the remote repository 'origin' and rebase local changes on top of them.
