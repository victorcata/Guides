<h1>BASH COMMANDS</h1>
<!-- TOC -->

- [Ctrl + command](#ctrl--command)
- [Directories](#directories)
- [Paths](#paths)
- [Backticks](#backticks)
- [Arithmetics](#arithmetics)
- [Wildcards](#wildcards)
- [Pipes](#pipes)
- [Read a file](#read-a-file)
- [Commands](#commands)
    - [alias](#alias)
    - [cal](#cal)
    - [cat](#cat)
    - [cd](#cd)
    - [cp](#cp)
    - [curl](#curl)
    - [date](#date)
    - [echo](#echo)
    - [fold](#fold)
    - [grep](#grep)
    - [head](#head)
    - [ls](#ls)
    - [man](#man)
    - [mkdir](#mkdir)
    - [mv](#mv)
    - [pwd](#pwd)
    - [reset](#reset)
    - [rm](#rm)
    - [rmdir](#rmdir)
    - [tail](#tail)
    - [sed](#sed)
    - [wc](#wc)

<!-- /TOC -->

## Ctrl + command
- **Ctrl^D**: Gracefully quit
- **Ctrl^C**: Terminate the program

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
The output of a command is the input of the next one
```bash
$ ls -l | wc -l
```

## Read a file
```bash
$ wc -c < file.txt
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
<!---------------------------------------------------------- wc ---------------------------------------------------------->
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