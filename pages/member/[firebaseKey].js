/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewMemberDetails } from '../../api/mergedData';

export default function ViewMember() {
  const [memberDetails, setMemberDetails] = useState({});
  const router = useRouter();

  // GRAB FIREBASE KEY FROM URL
  const { firebaseKey } = router.query;

  useEffect(() => {
    viewMemberDetails(firebaseKey).then(setMemberDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      <div className="d-flex flex-column">
        // eslint-disable-next-line @next/next/no-img-element
        <img src={memberDetails.image} alt={memberDetails.name} style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h5>
          {memberDetails.name}
        </h5>
        Role: {memberDetails.role}
        <hr />
      </div>
    </div>
  );
}
