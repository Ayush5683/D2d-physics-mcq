// Units and Measurement
function UnitsMeasurement() {
  const answers = {
    q1: "b",
    q2: "a",
    q3: "c",
    q4: "b",
    q5: "c",
    q6: "b",
    q7: "c",
    q8: "a",
    q9: "b",
    q10: "b",
    q11: "b",
    q12: "b",
    q13: "c",
    q14: "b",
    q15: "a",
    q16: "d",
    q17: "b",
    q18: "c",
    q19: "b",
    q20: "a",
    q21: "a",
    q22: "a",
    q23: "b",
    q24: "a",
    q25: "b",
    q26: "a",
    q27: "a",
    q28: "c",
    q29: "a",
    q30: "b",
    q31: "c",
    q32: "c",
    q33: "a"
  };
  let score = 0;
  const form = document.getElementById("quizForm");
  const formData = new FormData(form);

  for (const [question, correctAnswer] of Object.entries(answers)) {
    const userAnswer = formData.get(question);
    const questionElements = document.getElementsByName(question);

    questionElements.forEach((element) => {
      // Clear previous markings
      element.parentNode.style.color = "initial";

      if (element.value === correctAnswer) {
        // Mark correct answers green
        element.parentNode.style.color = "green";
      } else if (
        element.value === userAnswer &&
        element.value !== correctAnswer
      ) {
        // Mark incorrect answers red
        element.parentNode.style.color = "red";
      }
    });

    // Count score only for correct answers
    if (userAnswer === correctAnswer) {
      score++;
    }
  }

  // Display the score
  const result = document.getElementById("result");
  result.textContent = `You scored ${score} out of ${
    Object.keys(answers).length
  }.`;
}



// Mechanics
function Mechanics() {
  // Correct answers for the new set of questions
  const answers = {
    q1: "a",
    q2: "b",
    q3: "a",
    q4: "d",
    q5: "b",
    q6: "b",
    q7: "a",
    q8: "c",
    q9: "b",
    q10: "c",
    q11: "b",
    q12: "c",
    q13: "c",
    q14: "c",
    q15: "c",
    q16: "a",
    q17: "c",
    q18: "b",
    q19: "a",
    q20: "c",
    q21: "a",
    q22: "c",
    q23: "a",
    q24: "b",
    q25: "a",
    q26: "c",
    q27: "b",
    q28: "b",
    q29: "a",
    q30: "b",
    q31: "b",
    q32: "a",
    q33: "a",
    q34: "c",
  };

  let score = 0;
  const form = document.getElementById("quizForm");
  const formData = new FormData(form);

  // Iterate through each question and evaluate answers
  for (const [question, correctAnswer] of Object.entries(answers)) {
    const userAnswer = formData.get(question);
    const questionElements = document.getElementsByName(question);

    questionElements.forEach((element) => {
      // Reset previous styles
      element.parentNode.style.color = "initial";

      if (element.value === correctAnswer) {
        // Correct answer marked in green
        element.parentNode.style.color = "green";
      } else if (
        element.value === userAnswer &&
        element.value !== correctAnswer
      ) {
        // Incorrect answer marked in red
        element.parentNode.style.color = "red";
      }
    });

    // Increment the score for correct answers
    if (userAnswer === correctAnswer) {
      score++;
    }
  }

  // Display the final score
  const result = document.getElementById("result");
  result.textContent = `You scored ${score} out of ${
    Object.keys(answers).length
  }.`;
}
