import axios from "axios";
export const fetchAiBot = async (question) => {
  const response = await axios.post("/api/Aibot", {
    question,
  });
  return response.data.result;
};
