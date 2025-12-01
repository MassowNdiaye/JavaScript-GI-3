# JavaScript Exercises

This document contains **four JavaScript exercises** organized by difficulty: Easy, Medium, Hard, and Very Hard.  
Each exercise focuses on a different programming concept.

---

## 🟢 1. EASY – Gym System Daily Exercise Update

### Objective

Implement a logic that updates a gym system with the **daily exercise assigned for the day**.

### Instructions

- Update the `dailyExercise` property with a new assigned exercise.
- Return the updated exercise.

## 🟡 2. MEDIUM – Pizza Slice Sharing Function

### **Objective**

Create a function that calculates **how many slices of pizza each person gets** when shared evenly.

### **Instructions**

- Function must accept:
  - `totalSlices` → number of pizza slices
  - `numPeople` → number of people sharing
- Return how many slices each person gets (**rounded down**).

## 🟠 3. HARD – Object With Hidden SSN (Encapsulation)

### **Objective**

Create an object with two properties: **name** and **SSN**, but the SSN must be **completely private and inaccessible**.

### **Instructions**

- Use **closures** to hide private data.
- Allow public access **only to the name** using a getter method.
- **Do NOT expose the SSN** under any circumstance.

## 🔴 4. VERY HARD – Constructor With Inheritance and Methods

### **Objective**

- Create a **Person constructor** with three properties.
- Create a **new constructor that inherits from Person**, and demonstrate method usage with prototypes.

### **Instructions**

- Create a constructor: `Person(name, job, age)`
- Add one or more **methods** to `Person.prototype`
- Create a second constructor: `Programmer` that **inherits** from Person
- Add an **extra property and an additional method** to the child constructor
