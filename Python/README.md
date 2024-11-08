SYS MODULE

The sys module provides functions and variables used to manipulate different parts of the Python runtime environment. This module provides access to some variables used or maintained by the interpreter and to functions that interact strongly with the interpreter.

sys.argv is a list that contains the command-line arguments passed to the script. The first item (sys.argv[0]) is the script name, and the subsequent items are the arguments.


Explanation of __name__ and __main__
__name__:

Every Python module (file) has a special built-in variable called __name__.
When a Python file is run, Python automatically assigns the value __main__ to the __name__ variable of that script.
If the file is imported as a module in another script, the __name__ variable is set to the module's name instead (e.g., if the file is my_script.py, __name__ would be "my_script").
The Purpose of if __name__ == "__main__":

By checking if __name__ is equal to "__main__", the code can determine if the script is being run directly.
If __name__ == "__main__" is True, the code inside this if block will execute only when the script is run directly, not when it is imported.
This construct allows us to have code that runs when the script is executed on its own, but that does not run if the script is imported into another module.