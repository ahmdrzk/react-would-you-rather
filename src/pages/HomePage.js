import { useState } from "react";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import { selectAuthUser } from "../redux/selectors/authSelectors";
import { selectAnsweredQuestions, selectUnansweredQuestions } from "../redux/selectors/questionsSelectors";
import QuestionsListPanel from "../components/Questions/QuestionsListPanel";

const HomePage = () => {
  const authUser = useSelector(selectAuthUser);
  const answeredQuestions = useSelector((state) => selectAnsweredQuestions(state, authUser.id));
  const unansweredQuestions = useSelector((state) => selectUnansweredQuestions(state, authUser.id));
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, value) => {
    setTabValue(value);
  };

  return (
    <Paper
      sx={{
        border: 1,
        borderColor: "border.main",
        borderRadius: 2,
      }}
    >
      <Tabs aria-label="questions tabs" centered value={tabValue} onChange={handleTabChange}>
        <Tab label="Unanswered Questions" id="tab-1" aria-controls="tabpanel-1" />
        <Tab label="Answered Questions" id="tab-2" aria-controls="tabpanel-2" />
      </Tabs>

      <div>
        <QuestionsListPanel
          id="tabpanel-1"
          ariaLabelledby="tab-1"
          hidden={tabValue !== 0}
          questions={unansweredQuestions}
        />
        <QuestionsListPanel
          id="tabpanel-2"
          ariaLabelledby="tab-2"
          hidden={tabValue !== 1}
          questions={answeredQuestions}
        />
      </div>
    </Paper>
  );
};

export default HomePage;
