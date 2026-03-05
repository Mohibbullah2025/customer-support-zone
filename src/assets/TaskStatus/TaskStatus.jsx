

const TaskStatus = ({taskStatus, handleCompleteButton}) => {

  
  if(taskStatus.length === 0){
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
     {
        taskStatus.map((issue) => (
          <div key={issue.id} className="mb-4 p-4 shadow rounded bg-white">
            <h3 className="font-semibold">{issue.title}</h3>

            <button
              onClick={() => handleCompleteButton(issue)}
              className="btn btn-success w-full mt-4"
            >
              Complete
            </button>
          </div>
        ))
      }
    </div>
  )
  
};

export default TaskStatus
