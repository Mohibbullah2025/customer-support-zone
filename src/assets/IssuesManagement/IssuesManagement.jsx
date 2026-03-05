import { use, useState } from "react";
import IssueCard from "../IssueCard/IssueCard";
import TaskStatus from "../TaskStatus/TaskStatus";
import { toast } from "react-toastify";



const IssuesManagement = ({fetchPromise, setInprogress, inProgress, resloved, setResloved}) => {
    const initialData= use(fetchPromise);
    const [issues, setIssues]= useState(initialData)
    const [taskStatus, setTaskStatus]= useState([])
    
    const handleSelectedIssue = (issue)=>{
      const UpdateIssues= issues.filter((item)=>item.id !== issue.id);
      setIssues(UpdateIssues)
      setTaskStatus([...taskStatus, issue])
      setInprogress(inProgress+1)
      toast.success(`Ticket "${issue.title}" added on task status successfully!`);
    }

    const handleCompleteButton=(issue)=>{
      const updatedTaskStatus= taskStatus.filter((item)=>item.id !== issue.id);
      setTaskStatus(updatedTaskStatus)
      setInprogress(inProgress-1)
      setResloved(resloved+1)
      toast.success(`Ticket "${issue.title}" remove from task status successfully!`);
    }
  return (
 
        
    <div className="flex flex-col md:flex-row gap-6">
        
      <IssueCard initialData={issues} handleSelectedIssue={handleSelectedIssue}></IssueCard>
      <TaskStatus taskStatus={taskStatus} handleCompleteButton={handleCompleteButton}></TaskStatus>
     
     </div>
     
  )
};

export default IssuesManagement
