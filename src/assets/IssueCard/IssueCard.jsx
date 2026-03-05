
const IssueCard = ({initialData}) => {
  return (
    <div className="mt-20"><h1 className="text-2xl font-semibold">Customer Tickets</h1>
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 border mb-20 border-red-600 mt-4">
      {
        initialData.map((issue=>{
            return <div>
                <div className="card card-dash bg-white shadow w-full p-4">
                <div className="card-body px-0">
                <div className="flex items-center justify-between">
                    <h2 className="card-title ">{issue.title}</h2>
                    <span className={`px-3 py-1 rounded-md ${issue.status === "Open" ? "bg-[#02A53B]" : "bg-[#F8F3B9]"}`}>{issue.status}</span>
                </div>
                
                <p className="text-[#627382] mb-4">{issue.description}</p>
                <div className="flex justify-between">
                <div className="flex gap-3">
                    <p className="text-[#627382]">{issue.id}</p>
                    <p className={`px-3 py-1 rounded-md ${issue.priority === "High"?"bg-[#F83044]": issue.priority === "Medium"?"bg-[#FEBB0C]":"bg-[#02A53B]"}`}>{issue.priority}</p>
                </div>
                <div className="flex gap-3">
                    <p className="text-[#627382]">{issue.customer}</p>
                    <p className="text-[#627382]">{issue.createdAt}</p>
                </div>
                </div>
             </div>
            </div>
            </div>
        }))
      }

    </div>
    </div>
  )
};

export default IssueCard
