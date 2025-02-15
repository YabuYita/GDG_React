import React from "react";

const GroupName = () => {
    let groupMembers = ["Member 1", "Member 2", "Member 3", "Member 4"];
    return (
        <div>
        <h1>Group Name</h1>
        <p>Group Members:</p>
        <ul>
            {groupMembers.map((member, index) => (
                <li key={index}>{member}</li>
            ))}
        </ul>
        

         </div>
    
    );
   
}
export default GroupName;