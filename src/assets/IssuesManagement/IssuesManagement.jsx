import { use } from "react";
import IssueCard from "../IssueCard/IssueCard";
import TaskStatus from "../TaskStatus/TaskStatus";

const IssuesManagement = ({fetchPromise}) => {
    const initialData= use(fetchPromise);
    console.log(initialData)
  return (
 
        
    <div className="flex flex-col md:flex-row gap-6">
        
      <IssueCard initialData={initialData}></IssueCard>
      <TaskStatus></TaskStatus>
    
     </div>
     
  )
};

export default IssuesManagement
