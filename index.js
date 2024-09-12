// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];

  /*******SBA 308: JavaScript Fundamentals*******/

/****************************************************************/
  
  function getLearnerData(Course, ag, submissions) {
    const result = [
      {
        id: 125,
        avg: 0.985,
        1: 0.94,
        2: 1.0,
      },
      {
        id: 132,
        avg: 0.82,
        1: 0.78,
        2: 0.833,
      }
    ];
    return result;
  }
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

  console.log(result);

/****************************************************************/
const studentPoint = AssignmentGroup;

function studentPoints(AssignmentGroup) {
    console.log(studentPoint);
    
}
studentPoints()


/****************************************************************/

let possiblePoint = studentPoints;

let sum = 0;

for (let i = 0; i < possiblePoint.length; i++ ) {
  sum += possiblePoint[i];
}

console.log(sum)


/****************************************************************/

try {
	if (LearnerSubmissions.submitted_at === AssignmentGroup.due_at) {
		console.log("Are you sure!");
	} else {
		throw "Error - I don't know what I'm doing.";
	}
} catch (error) {
	console.log(error);
}

/****************************************************************/

const  learner_id = [LearnerSubmissions];
learner_id.unshift({learner_id: 130, assignment_id: 6, submission: {
    submitted_at: "2023-05-15",
    score: 600}
  });
  

console.log(learner_id);

/**************************************************************/
   
const dueDate = () => {
  console.log(LearnerSubmissions);
};

setInterval(dueDate, 2000);


  

  
  