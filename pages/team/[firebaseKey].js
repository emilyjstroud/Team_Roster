// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { viewTeamDetails } from '../../api/mergedData';

// export default function viewTeam() {
//   const [teamDetails, setTeamDetails] = useState({});
//   const router = useRouter();

//   const { firebaseKey } = router.query;

//   useEffect(() => {
//     viewTeamDetails(firebaseKey).then(setTeamDetails);
//   }, [firebaseKey]);

//   return (
//     <div className="mt-5 d-flex flex-wrap">
//       <div className="text-white ms-5 details">
//         <h5>
//           {teamDetails.name}
//         </h5>
//         <hr />
//       </div>
//     </div>
//   );
// }
