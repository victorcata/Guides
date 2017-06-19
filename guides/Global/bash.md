<h1>BASH COMMANDS</h1>
<!-- TOC -->

- [Job control](#job-control)
- [Directories](#directories)
- [Paths](#paths)
- [Backticks](#backticks)
- [Arithmetics](#arithmetics)
- [Wildcards](#wildcards)
- [Pipes](#pipes)
- [Read a file](#read-a-file)
- [Environment variables](#environment-variables)
- [Quotes](#quotes)
- [Scripts](#scripts)
- [Loops and conditionals](#loops-and-conditionals)
- [Permissions](#permissions)
- [Vim](#vim)
    - [Command Mode](#command-mode)
- [Commands](#commands)
    - [alias](#alias)
    - [cal](#cal)
    - [cat](#cat)
    - [cd](#cd)
    - [chmod](#chmod)
    - [cp](#cp)
    - [curl](#curl)
    - [date](#date)
    - [echo](#echo)
    - [fold](#fold)
    - [grep](#grep)
    - [groups](#groups)
    - [head](#head)
    - [history](#history)
    - [ls](#ls)
    - [man](#man)
    - [mkdir](#mkdir)
    - [mv](#mv)
    - [pwd](#pwd)
    - [read](#read)
    - [reset](#reset)
    - [rm](#rm)
    - [rmdir](#rmdir)
    - [tail](#tail)
    - [test](#test)
    - [touch](#touch)
    - [screen](#screen)
    - [sed](#sed)
    - [wc](#wc)

<!-- /TOC -->

## Job control
- **Ctrl^c**: Terminate the program
- **Ctrl^z**: Put a process in the background. Type *fg JOB* to put it again in the foreground. With *jobs* we can see the jobs in the background. Or *kill* to terminate a job.
- **Ctrl^D**: Send a signal to indicates that end a program and starts with the  next one in the pipe

## Directories
- **..** Parent directory
- **.** Current directory
- **~** Home directory

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

## Backticks
```bash
$ echo `date`
$ echo $(date)
$ echo some output > $(date).txt
```

## Arithmetics
```bash
$ echo $((5*2+23))
$ echo Hi from $((`date +%Y`+1000))
```

## Wildcards
**\*** <br/>
```bash
$ echo cat b*p.txt
```
**{}** <br/>
```bash
$ echo cat b{ee, oo}p.txt
$ echo img{0..100}
$ echo img{0..100..10}
$ mkdir -p images/img{0..100}
```

## Pipes
- **|**: The output of a command is the input of the next one
```bash
$ ls -l | wc -l
```
- **&&**: Executes the command only if the previous was successfull
```bash
$ test -f file.txt && echo exists
```
- **||**: Executes the command if the previous failed
```bash
$ test -f file.txt || echo "no exists"
```
- **;**: Always execute the next command even when the command doesn't exists
```bash
$ jdaksjdl; date;
```



## Read a file
```bash
$ wc -c < file.txt
```


## Environment variables
- export: to see al the environment variables
- echo $USER: to show what's the value of a variable
- ls $HOME
- MSG=hi: to declare a variable live while the terminal is open
- YEAR=`date +%Y`
- export MSG: to export a variable
- ~/.bashrc: File to save the variables
- $PATH: Contains a list of places separated by ':' that bash will look when you type a command.



## Quotes
- echo '\<h1>Hi\</h1>'
- echo "\<h1>Hi $USER\</h1>"
- echo "\<h1>Hi $(whoami)\</h1>"
- echo "\<h1>Hi `whoami`\</h1>"



## Scripts
- The file has to start with **#!/bin/bash**
```sh
$ echo `date +'%F %T'` message >> `date +%F`.log
```
Equivalent to
```sh
#!/bin/bash
echo `date +'%F %T'` $* >> `date +%F`.log
# $1 $2 $3 positional arguments
# $* $@ all arguments
```
- We have to execute **chmod +x file** after it's created
- To use it globally: sudo cp <file> /usr/local/bin/<name>




## Loops and conditionals
```bash
$ while true; do date; sleep 1; done
$ ls -1 | while read LINE; do echo -n "$LINE "; wc -l $LINE | awd '{print $1}'; done
```
```bash
$ for x in {0..10}; do echo $x; done
```
```bash
$ if test -f cool.txt; then echo true; else echo false; fi
```



## Permissions
Each file on a UNIX system belongs to a user and a group. <br/>
Owners: 
- u: user
- g: group
- o: other

Permissions: 
- r: read
- w: write
- x: lists the content in folders, execute in files

Example: 
```bash
-rwxr-xr-- 3 USER_NAME GROUP_NAME 4096 May 16 12:00 file.txt

USER: rwx (read, write and execute)
GROUP: r-x (read and execute)
OTHERS: r-- (read)
```



## Vim
To execute Vim
```bash
$ vim
$ vim filename
```
- Starts in INSERT mode.
- To back in the command mode: Esc or Ctrl+c
- To back to the INSERT mode press I
- VISUAL mode pressing V

### Command Mode
- **:w filename** To save a file
- **:q** To quit
- **:q!** Quit without save the changes
- **:wq** Save and quit
- **:o filename** Loads a file
- Keys *H, J, K and L* to move inside the text
- $ and ^ to move the cursor at the end or the begining of the line
- *gg* moves to the first line of the file
- *G* moves to the last line of the file
- *x* removes a character
- *d$* removes everything to the end of the line
- *d0* removes everything from the beginning of the line
- *u* to undo something
- *dd* delete the next line
- *dk* delete the current and the next line
- *dD* delete from the current to the end of the file
- *o|O* go into insert mode but inserting a new line below|above the current one
- *a|A* go into insert mode but before|after the current character
- *J* moves the next line to the end of the current line

**Search and replace**
```bash
:s /PATTERN/REPLACE/FLAGS
:%s /PATTERN/REPLACE/FLAGS # Every line in the file
```



## Commands
<!---------------------------------------------------------- alias ---------------------------------------------------------->
### alias
To have the alias available in the next section you have to modified in *~/.bashrc*
```bash
$ alias
$ alias li="li -1"
```
<!---------------------------------------------------------- cal ---------------------------------------------------------->
### cal
Shows the calendar
```bash
$ cal
$ cal 2017
$ cal oct 2017
```
<!---------------------------------------------------------- cat ---------------------------------------------------------->
### cat
Concatenate the output of some files
```bash
$ cat file1.txt file2.txt
$ cat
$ cat file1.txt
```
<!---------------------------------------------------------- cd ---------------------------------------------------------->
### cd
```bash
$ cd .
$ cd media
$ cd    # Equivalent to cd ~
```
<!---------------------------------------------------------- chmod ---------------------------------------------------------->
### chmod
Changes the permissions on a file
```bash
$ chmod g+w file.txt # Grants permission
$ chmod g-w file.txt # Revoque permission
$ chmod ugo+rwx file.txt
```
<!---------------------------------------------------------- cp ---------------------------------------------------------->
### cp
Copies a file
```bash
$ cp file1.txt filecopy.txt
$ cp file1.txt ../
$ cp file1.txt file2.txt folder
```
**cp -r** <br/>
Recursively copy
```bash
$ cp -r file1.txt folder
```
<!---------------------------------------------------------- curl ---------------------------------------------------------->
### curl
Loads the url and prints the content
```bash
$ curl -s URL 
$ curl -s URL | gunzip
$ curl -X POST -sST localhost:5000/api/hi
$ curl -d user=username -d hello=hi localhost
```
<!---------------------------------------------------------- date ---------------------------------------------------------->
### date
Shows the date
```bash
$ date
$ date +'%M'
$ date +'%F'
```
<!---------------------------------------------------------- echo ---------------------------------------------------------->
### echo
Writes to the standard output
```bash
$ echo $SHELL
$ echo hello there > hello.txt
$ echo how are you >> hello.text
```
<!---------------------------------------------------------- fold ---------------------------------------------------------->
### fold
Formats the line width output
```bash
$ fold 30
$ fold -sw 30
```
<!---------------------------------------------------------- grep ---------------------------------------------------------->
### grep
Filters the output
```bash
$ grep -i word
```
<!---------------------------------------------------------- groups ---------------------------------------------------------->
### groups
Lists all the groups 
```bash
$ groups
```
<!---------------------------------------------------------- head ---------------------------------------------------------->
### head
Shows the first 10 lines of a file
```bash
$ head file.txt
```
**head -c[number]**<br/>
Shows the first [number] characters of a file
```bash
$ head -c 5 file.txt
```
**head -n[number]**<br/>
Shows the first [number] lines of a file
```bash
$ head -n 5 file.txt
$ head --lines=5 file.txt
```
<!---------------------------------------------------------- history ---------------------------------------------------------->
### history
Lists the last commands executed
```bash
$ history
```
<!---------------------------------------------------------- ls ---------------------------------------------------------->
### ls
Lists directory content
```bash
$ ls
$ ls /
$ ls ..
```
**ls -1** <br/>
Lists in one column
```bash
$ ls -1
```
<!---------------------------------------------------------- man ---------------------------------------------------------->
### man
Displays the manual for a specified command
```bash
$ man pwd
```
<!---------------------------------------------------------- mkdir ---------------------------------------------------------->
### mkdir
Creates a new directory
```bash
$ mkdir directory
```
**mkdir -p**<br/>
Creates anidated directories
```bash
$ mkdir -p folder1/folder2/folder3
```
<!---------------------------------------------------------- mv ---------------------------------------------------------->
### mv
Rename and overwrite files
```bash
$ mv file.txt filenewname.txt
$ mv file.txt file2.txt
```
<!---------------------------------------------------------- pwd ---------------------------------------------------------->
### pwd
Shows the current path
```bash
$ pwd
```
<!---------------------------------------------------------- read ---------------------------------------------------------->
### read
To prompt for input
```bash
$ read LINE
$ echo $LINE
```
<!---------------------------------------------------------- reset ---------------------------------------------------------->
### reset
Resets the console
```bash
$ reset
```
<!---------------------------------------------------------- rm ---------------------------------------------------------->
### rm
Removes a file
```bh
$ rm file.txt
```
**rm -r**<br/>
Removes recursively
```bash
$ rm -r folder
```
<!---------------------------------------------------------- rmdir ---------------------------------------------------------->
### rmdir
Removes a directory
```bash
$ rmdir directory
```
<!---------------------------------------------------------- tail ---------------------------------------------------------->
### tail
Shows the last 10 lines of a file
```bash
$ tail file.txt
```
**tail -c[number]**<br/>
Shows the last [number] characters of a file
```bash
$ tail -c 5 file.txt
```
**tail -n[number]**<br/>
Shows the last [number] lines of a file
```bash
$ tail -n 5 file.txt
$ tail --lines=5 file.txt
```
**tail -f** <br/>
Keeps waiting for additional data
```bash
$ tail -f file.txt
```
<!---------------------------------------------------------- test ---------------------------------------------------------->
### test
Tests if a file exists
```bash
$ test -f file.txt
```
<!---------------------------------------------------------- touch ---------------------------------------------------------->
### touch
Creates a file
```bash
$ touch file.txt
$ echo $?
```
<!---------------------------------------------------------- screen ---------------------------------------------------------->
### screen
Runs command-line programs and keep them running
```bash
$ screen
```
- **screen -list**: List all the screens
- **screen -S <name>**: Give it a name
- **screen -x <name>**: Attach again
To detach press *Ctrl+a* and then *Ctrl+d*

<!---------------------------------------------------------- sed ---------------------------------------------------------->
### sed
Mades substitutions
```bash
$ sed -r 's/\s+/\n/g'
```
<!---------------------------------------------------------- wc ---------------------------------------------------------->
### wc
Displays the number of characters, words and lines of the specified file
```bash
$ wc
$ wc file.txt
```
**wc -l** <br/>
Displays the number of lines
```bash
$ wc -l file.txt
```
**wc -w** <br/>
Displays the number of words
```bash
$ wc -w file.txt
```
**wc -c** <br/>
Displays the number of characters
```bash
$ wc -c file.txt
```