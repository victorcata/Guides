# Git
<!-- TOC -->

- [Git](#git)
- [Configuration](#configuration)
    - [List configuration](#list-configuration)
    - [Credential cache](#credential-cache)
    - [Identity](#identity)
        - [Username](#username)
        - [Email](#email)
    - [Editor](#editor)
- [Staging](#staging)
- [Commit](#commit)
- [Pushing](#pushing)
- [Pulling](#pulling)
- [Undo changes](#undo-changes)
- [Branching](#branching)
    - [Branch management](#branch-management)
        - [List branches](#list-branches)
        - [Create](#create)
        - [Delete](#delete)
        - [Last commit on each branch](#last-commit-on-each-branch)
        - [Branches merged](#branches-merged)
        - [Branches not yet merged](#branches-not-yet-merged)
    - [HEAD](#head)
    - [Switching branches](#switching-branches)
    - [New branch and switch](#new-branch-and-switch)
    - [Merging](#merging)
        - [Merge conflicts](#merge-conflicts)
    - [Remote branches](#remote-branches)
        - [Fetching remote branch](#fetching-remote-branch)
        - [Syncronizing branches](#syncronizing-branches)
        - [Multiple remote servers](#multiple-remote-servers)
    - [Tracking branches](#tracking-branches)
        - [List tracking branches](#list-tracking-branches)
        - [Local branch with a different name](#local-branch-with-a-different-name)
        - [Changing the name of the local branch](#changing-the-name-of-the-local-branch)
    - [Rebasing](#rebasing)
- [Server](#server)
    - [Local protocol](#local-protocol)
    - [HTTP protocol](#http-protocol)
    - [SSH protocol](#ssh-protocol)
    - [Git protocol](#git-protocol)
            - [Help](#help)
        - [Initialize repository](#initialize-repository)
        - [Checking the status](#checking-the-status)
        - [Ignoring files](#ignoring-files)
        - [View staged and unstaged changes](#view-staged-and-unstaged-changes)
        - [Commiting changes](#commiting-changes)
        - [Removing a file](#removing-a-file)
        - [Moving a file](#moving-a-file)

<!-- /TOC -->
# Configuration
- **git config:** Specific to that single repository
- **git config --system:** Every user on the system and all their repositories
- **git config --global:** Specific to your user
## List configuration
```sh
$ git config --list
```
## Credential cache
```sh
$ git config --global credential.helper cache
```
## Identity
### Username
```sh
$ git config --global user.name <USER_NAME>
```
### Email
```sh
$ git config --global user.email <USER_EMAIL>
```
## Editor
```
$ git config --global core.editor <EDITOR_NAME>
```
# Staging
```sh
$ git add <FILE> <FILE> ...
```
# Commit 
```sh
$ git commit -m <COMMENT>
```
# Pushing
```sh
$ git push <REMOTE> <BRANCH>
```
# Pulling
```sh
$ git pull 
```
Equivalent to
```sh
$ git fetch
$ git merge
```
# Undo changes
Removes stages and working directories changes
```sh
$ git reset --hard
```
```sh
$ git clean -f -d # Remove untracked
$ git clean -fxd  # Include ignored files
```
# Branching
## Branch management
### List branches
```sh
$ git branch
```
### Create
```sh
$ git branch <BRANCH>
```
### Delete
```sh
$ git branch -d <BRANCH>
```
### Last commit on each branch
```sh
$ git branch -v
```
### Branches merged
```sh
$ git branch --merged
```
### Branches not yet merged
```sh
$ git branch --no-merged
```
## HEAD
HEAD is a special pointer that let you know what branch you're currently on
```sh
$ git log --oneline --decorate
$ git log --oneline --decorate --graph --all
```
## Switching branches
```sh
$ git checkout <BRANCH>
```
## New branch and switch
```sh
$ git checkout -b <BRANCH>
```
Equivalent to
```sh
$ git branch <BRANCH>
$ git checkout <BRANCH>
```
## Merging
- **Fast-forward:** when you try to merge one commit with a commit that can be reached by following the first commit's history
- **Three-way:** creates a new snapshot that results fron this three-way merge and automatically creates a new commit that points to it
```sh
$ git merge <BRANCH>
```
### Merge conflicts
```sh
$ git mergetool
```
## Remote branches
### Fetching remote branch
```sh
$ git checkout --track origin/<REMOTE>
$ git checkout --track -b <LOCAL_NAME> origin/<REMOTE>
```
### Syncronizing branches
```sh
$ git fetch <REMOTE>
```
From all the remotes
```sh
$ git fetch --all 
```
### Multiple remote servers
```sh
$ git remote ad <REMOTE> <URL>
```
## Tracking branches
Tracking branches are local branches that have a direct relationship to a remote branch
```sh
$ git checkout --track <REMOTE/BRANCH>
```
### List tracking branches
```sh
$ git branch -vv
```
### Local branch with a different name
To set up a local branch with a different name than the remote one
```sh
$ git checkout -b <NEW_NAME> <REMOTE/BRANCH>
```
### Changing the name of the local branch
If you already have a local branch and want to set it to a remote branch that you just pulled down
```sh
$ git branch -u <REMOTE/BRANCH>
$ git branch --set-upstream-to <REMOTE/BRANCH>
```
## Rebasing
```sh
$ git checkout <BRANCH_DESINATION>
$ git rebase <BRANCH_ORIGIN>
```
# Server
## Local protocol
The remote repository is in another directory on the disk
```sh
$ git clone /folder/project.git
```
To add a local repository to an existing Git project
```sh
$ git remote add <LOCAL_PROJECT> /folder/project.git
```
## HTTP protocol
```sh
$ git clone https://domain.com/project.git
```
## SSH protocol
```sh
$ git clone ssh://user@server:project.git
```
## Git protocol
Git protocol listens to the specific port 9418. It's indicated for serving a ver large project that doesn't require user authentication for read access
```sh
$ git clone git://project.git
```






-----------------------------------------------------
#### Help
```
git help <verb>
git <verb> --help
man git-<verb>
```
### Initialize repository
```
git init
```
### Checking the status
```
git status
git status -s | git status --short
```
### Ignoring files
.gitignore file
```
# a comment - this is ignored
*.a             # no .a files
!lib.a          # but do track lib.a, even though you're ignoring .a files above
/TODO           # only ignore the root TODO file, not subdir/TODO
build           # ignore all files in the build/ directory
doc/*.txt       # ignore doc/notes.txt, but not doc/server/arch.txt
```
### View staged and unstaged changes
Show changes made since the last commit, only changes that are still unstaged
- What have you changed but not yet staged
- What have you staged that you are about to commit
```
git diff
git diff --staged > What you've staged that will go into your next commit
git diff --cached
```
### Commiting changes
```
git commit
git commit -v > You can see exactly what changes you're commiting, like with git diff
git commit -m <MESSAGE>
git commit -a  > Skip the staging area
```
### Removing a file
```
git rm <FILE>
git rm -f <FILE>    If you modified the file and added it to the index already, you must force the removal with the -f
git rm --cached <FILE>  Keep the file in the working tree but remove it from the staging area
```
### Moving a file
```
git mv <FILE_FROM> <FILE_TO>
```
Equivalent to
```
mv <FILE_FROM> <FILE_TO>
git rm <FILE_FROM>
git add <FILE_TO>
```
-----------------------------------------------------