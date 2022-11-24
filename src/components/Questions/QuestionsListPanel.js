import Stack from "@mui/material/Stack";

import QuestionSnippet from "./QuestionSnippet";

const QuestionsListPanel = ({ id, ariaLabelledby, hidden, questions }) => {
  return (
    <div role="tabpanel" id={`tab-${id}`} aria-labelledby={`tabpanel-${ariaLabelledby}`} hidden={hidden}>
      <Stack spacing={2} sx={{ p: 2 }}>
        {questions.map((question) => (
          <QuestionSnippet key={question.id} question={question} />
        ))}
      </Stack>
    </div>
  );
};

export default QuestionsListPanel;
