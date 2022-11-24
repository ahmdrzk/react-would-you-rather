import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

import NewQuestionForm from "./NewQuestionForm";

const NewQuestionCard = () => {
  return (
    <Card sx={{ border: 1, borderColor: "border.main" }}>
      <CardHeader
        title={
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Create New Question
          </Typography>
        }
        sx={{ borderBottom: 1, borderColor: "border.main", bgcolor: "secondary.main" }}
      />
      <CardContent>
        <NewQuestionForm />
      </CardContent>
    </Card>
  );
};

export default NewQuestionCard;
