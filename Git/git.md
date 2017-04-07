<!-- TOC -->

        - [Configuration](#configuration)
            - [Identity](#identity)
            - [Editor](#editor)
            - [Settings](#settings)
            - [Help](#help)
        - [Initialize repository](#initialize-repository)
        - [Cone repository](#cone-repository)
        - [Initial commit](#initial-commit)
        - [Checking the status](#checking-the-status)
        - [Tracking new files and Staging modified files](#tracking-new-files-and-staging-modified-files)
        - [Ignoring files](#ignoring-files)
        - [View staged and unstaged changes](#view-staged-and-unstaged-changes)
        - [Commiting changes](#commiting-changes)
        - [Removing a file](#removing-a-file)
        - [Moving a file](#moving-a-file)
- [Branching](#branching)
    - [Staging and commit](#staging-and-commit)
    - [Branch management](#branch-management)
        - [List](#list)
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

<!-- /TOC -->
### Configuration
#### Identity
- git config --system: Every user on the system and all their repositories
- git config --global: Specific to your user
- git config: Specific to that single repository
```
git config --global user.name
git config --global user.email
```
#### Editor
```
git config --global core.editor
```
#### Settings
```
git config --list
```
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
### Cone repository
```
git clone https://github.com/repository
```
### Initial commit
```
git add *.c
git add [FILE]
git commit -m <COMMENTS>
```
### Checking the status
```
git status
git status -s | git status --short
```
### Tracking new files and Staging modified files
- Tracking new files
- Stage files
- Merge-conflicted files as resolved
```
git add [FILE | DIRECTORY]
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
# Branching
## Staging and commit
```sh
$ git add <FILE> <FILE> ...
$ git commit -m "my first commit"
```
## Branch management
### List
```sh
$ git branch
```
### Create
```sh
$ git branch <BRANCH_NAME>
```
### Delete
```sh
$ git branch -d <BRANCH_NAME>
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
$ git checkout <BRANCH_NAME>
```
## New branch and switch
```sh
$ git checkout -b <BRANCH_NAME>
```
Equivalent to
```sh
$ git branch <BRANCH_NAME>
$ git checkout <BRANCH_NAME>
```
## Merging
- Fast-forward: when you try to merge one commit with a commit that can be reached by following the first commit's history
- Three-way: creates a new snapshot that results fron this three-way merge and automatically creates a new commit that points to it
```sh
$ git merge <BRANCH_NAME>
```
### Merge conflicts
```sh
$ git mergetool
```