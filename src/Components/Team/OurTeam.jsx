import React from 'react';
import TeamMember from './TeamMember.jsx';
import styles from "./OurTeam.module.css";

import {teamMemberData} from '../../Data/Data';

const OurTeam = () => {
    console.log(teamMemberData);
  return (
    <div className={styles.mainContainer}>
        <div className={styles.heading}>
            <span>Our Team</span>
        </div>
        <div className={styles.teamContainer}>
            {teamMemberData.map((member, index) => (
                <TeamMember
                key={index}
                name={member.name}
                imageUrl={member.imageUrl}
                cases={member.cases}
                highlighted={index === 1}
                />
            ))}
        </div>
    </div>
  );
}

export default OurTeam;
