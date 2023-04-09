# OOP

Object-oriented programming (OOP) is a programming paradigm that focuses on creating objects that encapsulate data and behavior. In OOP, objects are instances of classes, which define the properties and methods of the object. Objects can communicate with each other through methods, and inheritance allows classes to be derived from other classes.

```python
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print(self.name + " barks")

dog = Dog("Buddy")
dog.bark() # Output: Buddy barks
```

# FP

Functional programming (FP) is a programming paradigm that focuses on writing functions that transform data, rather than on objects and their methods. In FP, functions are treated as first-class citizens, which means that they can be passed around as arguments to other functions, and returned as values from functions. FP emphasizes immutability, and pure functions that do not have side effects.
<br>
FP often uses higher-order functions and closures.

```python
def add(x, y):
    return x + y

def double(x):
    return x * 2

result = double(add(2, 3))
print(result) # Output: 10
```

## main diff between OOP & FP

...is the way that they approach problem-solving. In OOP, the focus is on objects and their behavior, while in FP, the focus is on functions and their composition. <br>
OOP is often used for building complex systems with lots of interrelated objects, while FP is often used for solving problems that can be expressed as data transformations.
