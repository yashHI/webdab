const questions = [
  {
    que: "Who invented Java Programming?",
    a: "Guido van Rossum",
    b: "James Gosling",
    c: "Dennis Ritchie",
    d: "Bjarne Stroustrup",
    correct: "b",
  },
  {
    que: "Which statement is true about Java?",
    a: "Java is a sequence-dependent programming language",
    b: "Java is a code dependent programming language",
    c: "Java is a platform-dependent programming language",
    d: "Java is a platform-independent programming language",
    correct: "d",
  },
  {
    que: "Which component is used to compile, debug and execute the java programs?",
    a: "JRE",
    b: "JIT",
    c: "JDK",
    d: "JVM",
    correct: "c",
  },
  {
    que: "Which one of the following is not a Java feature?",
    a: "Object-oriented",
    b: "Use of pointers",
    c: "Portable",
    d: "Dynamic and Extensible",
    correct: "b",
  },
  {
    que: "What is the extension of java code files?",
    a: ".js",
    b: ".txt",
    c: ".class",
    d: ".java",
    correct: "d",
  },
  {
    que: "What is not the use of “this” keyword in Java?",
    a: "Referring to the instance variable when a local variable has the same name",
    b: "Passing itself to the method of the same class",
    c: "Passing itself to another method",
    d: "Calling another constructor in constructor chaining",
    correct: "b",
  },
  {
    que: "What is Truncation in Java?",
    a: "Floating-point value assigned to a Floating type",
    b: "Floating-point value assigned to an integer type",
    c: "Integer value assigned to floating type",
    d: "Integer value assigned to floating type",
    correct: "b",
  },
  {
    que: "Which exception is thrown when java is out of memory?",
    a: "MemoryError",
    b: "OutOfMemoryError",
    c: "MemoryOutOfBoundsException",
    d: "MemoryFullException",
    correct: "b",
  },
  {
    que: "Which of these are selection statements in Java?",
    a: "break",
    b: "continue",
    c: "for()",
    d: "if()",
    correct: "d",
  },
  {
    que: "Which of the following is a superclass of every class in Java?",
    a: "ArrayList",
    b: "Abstract class",
    c: "Object class",
    d: "String",
    correct: "c",
  },
];
let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");
const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }

  reset();

  const data = questions[index];
  console.log(data);
  quesBox.innerText = `${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};
const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();

  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};
const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};
const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};
const endQuiz = () => {
  document.getElementById("box").innerHTML = `
<h3>Thank you for playing the Quiz </h3>
<h2>${right}/${total} are correct </h2>
`;
};
loadQuestion();
