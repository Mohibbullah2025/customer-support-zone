
const TaskStatus = ({selectedIssue}) => {
  console.log(selectedIssue)
  
  if(!selectedIssue){
    return(
      <div>
        <h2 className="mt-20 text-xl mb-10">Task Status</h2>
        <p>Select a ticket to add to Task Status</p>     
        </div>
    )
  }
  return(
    <div>
      <h2 className="mt-20 text-xl mb-10">Task Status</h2>
      <div>
        <h3 className="font-semibold">{selectedIssue.title}</h3>
        <button className="btn btn-success w-full mt-4">Complete</button>
      </div>
    </div>
  )
};

export default TaskStatus
