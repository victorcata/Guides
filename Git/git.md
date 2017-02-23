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

- What have you changed but not yet staged
- What have you staged that you are about to commit

```
git diff
git diff --staged > What you've staged that will go into your next commit
```
