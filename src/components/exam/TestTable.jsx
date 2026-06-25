import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { useEffect } from "react";
import useExam from "@/hooks/useExam";

const TestTable = () => {
  const { exams, fetchExams } = useExam("AdminTestsPage");

  useEffect(() => {
    fetchExams();
  }, [fetchExams]);

  return (
    <>
      <div className="rounded-xl border border-slate-200 bg-white shadow w-full p-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-15 uppercase">ID</TableHead>
              <TableHead className="text-left uppercase">Tên đề thi</TableHead>
              <TableHead className="text-left uppercase">Câu hỏi</TableHead>
              <TableHead className="text-center uppercase">Hành động</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {exams.map((exam) => (
              <TableRow key={exam.id}>
                <TableCell className="w-15">{exam.id}</TableCell>
                <TableCell className="text-left whitespace-normal wrap-break-word">
                  {exam.title}
                </TableCell>
                <TableCell className="text-left">
                  {exam.questionIds.join(", ")}
                </TableCell>
                <TableCell className="flex gap-2 justify-center">
                  <Link>
                    <Button variant="outline">Sửa</Button>
                  </Link>
                  <Button variant="destructive">Xóa</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter className="bg-slate-50/50 border-t border-slate-200">
            <TableRow>
              <TableCell
                colSpan={5}
                className="p-4 text-sm text-muted-foreground font-normal"
              >
                Hiển thị 1-5 trên tổng số 5 đề thi
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </>
  );
};

export default TestTable;
