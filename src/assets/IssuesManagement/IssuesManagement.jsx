import { use, useState } from "react";
import IssueCard from "../IssueCard/IssueCard";
import TaskStatus from "../TaskStatus/TaskStatus";

const IssuesManagement = ({fetchPromise}) => {
    const initialData= use(fetchPromise);
    const [issues, setIssues]= useState(initialData)
    const [selectedIssue, setSelectedIssue]= useState(null)
    const handleSelectedIssue = (issue)=>{
      setSelectedIssue(issue);
      const UpdateIssues= issues.filter((item)=>item.id !== issue.id);
      setIssues(UpdateIssues)
    }
  return (
 
        
    <div className="flex flex-col md:flex-row gap-6">
        
      <IssueCard initialData={issues} handleSelectedIssue={handleSelectedIssue}></IssueCard>
      <TaskStatus selectedIssue={selectedIssue}></TaskStatus>
    
     </div>
     
  )
};

export default IssuesManagement
