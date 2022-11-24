import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import UserCardLayout from "../Shared/UserCardLayout";

const QuestionSnippet = ({ question }) => {
  const { id, author, optionOne } = question;
  const navigate = useNavigate();

  const handleNavigateToQuestion = () => {
    navigate(`/questions/${id}`);
  };

  return (
    <UserCardLayout authorId={author}>
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: "fontWeightMedium" }}>
          Would You Rather...?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          ...{optionOne.text}...
        </Typography>
        <Button variant="outlined" color="primary" fullWidth onClick={handleNavigateToQuestion}>
          View Question
        </Button>
      </Box>
    </UserCardLayout>
  );
};

export default QuestionSnippet;
