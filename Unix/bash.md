# BASH COMMANDS
<!-- TOC -->

- [BASH COMMANDS](#bash-commands)
    - [Ctrl + command](#ctrl--command)
    - [Directories](#directories)
    - [Commands](#commands)
        - [echo](#echo)
        - [ls](#ls)
    - [man](#man)
    - [pwd](#pwd)
    - [wc](#wc)
        - [wc -l](#wc--l)
        - [wc -w](#wc--w)
        - [wc -c](#wc--c)
    - [wc](#wc-1)
    - [alias](#alias)
    - [cd](#cd)
    - [cat](#cat)
    - [reset](#reset)
    - [head](#head)
        - [head -n [number]](#head--n-number)
    - [cp](#cp)
        - [cp -r](#cp--r)
    - [mv](#mv)
    - [rm](#rm)
        - [rm -r](#rm--r)
    - [mkdir](#mkdir)
        - [mkdir -p](#mkdir--p)
    - [rmdir](#rmdir)
    - [Wildcards](#wildcards)
    - [Paths](#paths)
    - [curl](#curl)
    - [grep](#grep)
    - [sed](#sed)
    - [Special characters](#special-characters)
        - [Pipes](#pipes)

<!-- /TOC -->

## Ctrl + command
- **Ctrl^D**: Gracefully quit
- **Ctrl^C**: Terminate the program

## Directories
- **..** Parent directory
- **.** Current directory
- **~** Home directory

## Commands
<!---------------------------------------------------------- echo ---------------------------------------------------------->
### echo
Writes to the standard output
```bash
$ echo $SHELL
$ echo hello there > hello.txt
$ echo how are you >> hello.text
```
<!---------------------------------------------------------- ls ---------------------------------------------------------->
### ls
Lists directory content
```bash
$ ls
$ ls /
$ ls ..
```
**ls -1**\s
Lists in one column
```bash
$ ls -1
```
<!---------------------------------------------------------- man ---------------------------------------------------------->
## man
Displays the manual for a specified command
```bash
$ man pwd
```
<!---------------------------------------------------------- pwd ---------------------------------------------------------->
## pwd
Shows the current path
```bash
$ pwd
```
<!---------------------------------------------------------- wc ---------------------------------------------------------->
## wc
Displays the number of characters, words and lines of the specified file
```bash
$ wc
$ wc file.txt
```
### wc -l
Displays the number of lines
```bash
$ wc -l file.txt
```
### wc -w
Displays the number of words
```bash
$ wc -w file.txt
```
### wc -c
Displays the number of characters
```bash
$ wc -c file.txt
```





## wc
```bash
$ wc -c < file.txt
```




## alias
You have to save it in ~/.bashrc to have the alias in the next session 
```bash
$ alias
$ alias li="li -1"
```

## cd
```bash
$ cd .
$ cd media
$ cd    # Equivalent to cd ~
```

## cat
Concatenate files output
```bash
$ cat file1.txt file2.txt
$ cat
$ cat file1.txt
```

## reset
```bash
$ reset
```

## head
Shows the first 10 lines of a file
```bash
$ head file.txt
```
### head -n [number]
Shows the first [number] lines of a file
```bash
$ head -n 5 file.txt
$ head --lines=5 file.txt
```

## cp
Copy a file
```bash
$ cp file1.txt filecopy.txt
$ cp file1.txt ../
$ cp file1.txt file2.txt folder
```
### cp -r
Recursevely copy
```bash
$ cp -r file1.txt folder
```

## mv
Rename and overwrite files
```bash
$ mv file.txt filenewname.txt
$ mv file.txt file2.txt
```

## rm
Removes a file
```bh
$ rm file.txt
```
### rm -r
Removes recursively
```bash
$ rm -r folder
```

## mkdir
Creates a new directory
```bash
$ mkdir directory
```

### mkdir -p
Creates anidated directories
```bash
$ mkdir -p folder1/folder2/folder3
```

## rmdir
Removes a directory
```bash
$ rmdir directory
```


## Wildcards
- **\***
```bash
$ echo cat b*p.txt
```
- **{}**
```bash
$ echo cat b{ee, oo}p.txt
$ echo img{0..100}
$ echo img{0..100..10}
$ mkdir -p images/img{0..100}
```

## Paths

- Relatives path
```bash
$ ls ../
$ ls ./folder
```
- Absolutes path
```bash
$ ls /
```

## curl
Loads the url and prints the content
```bash
$ curl -s URL 
$ curl -s URL | gunzip
```

## grep
Filters the output
```bash
$ grep -i word
```

## sed
Mades substitutions
```bash
$ sed -r 's/\s+/\n/g'
```

## Special characters

### Pipes
The output of a command is the input of the next one
```bash
$ ls -l | wc -l
```