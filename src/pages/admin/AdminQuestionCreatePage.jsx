import AdminSidebar from "@/components/layouts/AdminSidebar";
import QuestionTable from "@/components/QuestionTable";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@base-ui/react";
import { Plus } from "lucide-react";
import { useState } from "react";
import questionService from "@/services/questionService";
import { useEffect } from "react";

const AdminQuestionCreatePage = () => {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    const questionsData = await questionService.getAllQuestions();
    setQuestions(questionsData);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <>
      <SidebarProvider>
        <AdminSidebar />

        <main className="w-full grow p-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Tạo câu hỏi mới
                </CardTitle>
                <CardDescription>
                  Thêm câu hỏi mới vào trong ngân hàng đề thi
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="flex justify-end mt-8">
            <Button>
              <Plus />
              Thêm câu hỏi mới
            </Button>
          </div>

          <div className="mt-8">
            <QuestionTable questions={questions} />
          </div>
        </main>
      </SidebarProvider>
    </>
  );
};

export default AdminQuestionCreatePage;
