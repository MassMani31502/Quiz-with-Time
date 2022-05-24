// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Who is the father of C language?",
    answer: "Dennis Ritchie",
    options: [
      "Steve Jobs",
      "James Gosling",
      "Dennis Ritchie",
      "Rasmus Lerdorf"
    ]
  },
    {
    numb: 2,
    question: "Which of the following is not a valid C variable name?",
    answer: "int $main;",
    options: [
      "int number;",
      "float rate;",
      "int variable_count;",
      "int $main;"
    ]
  },
    {
    numb: 3,
    question: "All keywords in C are in ____________",
    answer: "LowerCase letters",
    options: [
      "LowerCase letters",
      "UpperCase letters",
      "CamelCase letters",
      "None of the mentioned"
    ]
  },
    {
    numb: 4,
    question: "Which is valid C expression?",
    answer: "int my_num = 100000;",
    options: [
      "int my_num = 100,000;",
      "int my_num = 100000;",
      "int my num = 1000;",
      "int $my_num = 10000;"
    ]
  },
    {
    numb: 5,
    question: "Which of the following cannot be a variable name in C?",
    answer: "volatile",
    options: [
      "true",
      "volatile",
      "friend",
      "export"
    ]
  },
  {
    numb: 6,
    question: "What is short int in C programming?",
    answer: "Short is the qualifier and int is the basic data type",
    options: [
      "The basic data type of C",
      "Qualifier",
      "Short is the qualifier and int is the basic data type",
      "All of the mentioned"
    ]
  },
  {
    numb: 7,
    question: "Which of the following declaration is not supported by C language?",
    answer: "String str;",
    options: [
      "String str;",
      "char *str;",
      "float str = 3e2;",
      "Both String str; & float str = 3e2;"
    ]
  },
  {
    numb: 8,
    question: "What is an example of iteration in C?",
    answer: "all of the mentioned",
    options: [
      "for",
      "while",
      "do-while",
      "all of the mentioned"
    ]
  },
  {
    numb: 9,
    question: "Functions in C Language are always _________",
    answer: "External",
    options: [
      "Internal",
      "External",
      "Both Internal and External",
      "External and Internal are not valid terms for functions"
    ]
  },
  {
    numb: 10,
    question: "Which of following is not accepted in C?",
    answer: "static static int a; //a static variable prefixed with static",
    options: [
      "static a = 10; //static as",
      "static int func (int); //parameter as static",
      "static static int a; //a static variable prefixed with static",
      "all of the mentioned"
    ]
  },
  
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];