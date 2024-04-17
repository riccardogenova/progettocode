# **GIT CHEAT SHEET**
## Basic Commands

### Configuration
- `git config` Get and set repository or global options. See options below.
  - `--global user.name "yourname"` Set your username.
  - `--global user.email "youremail"` Set your email.

### Initialization and repositories commands
- `git init` Initialize an empty Git repository. Run the command in the directory you want to initialize as a repository.

- `git clone` Clone a repository into a directory.
  - `[<repository>][<directory>]`

- `git pull`
  - `[<options>] [<repository> [<refspec>...]]`
   1. `[<options>]` This refers to any options you can include to customize the behavior of the git pull command.
      - `--rebase` Instead of merging the remote changes into the local branch, rebase the local branch on top of the remote branch.
   2. `[<repository>]` This specifies the remote repository from which you want to pull changes. If you've already set up a remote repository, you can use its name (e.g., `origin`). If you want to pull from a different repository, you can specify its URL.
   3. `[<refspec>...]]` This refers to the branch or branches and their associated commits that you want to pull from the remote repository. If you omit this, Git will try to pull from the default branch of the remote repository.

- `git push`




