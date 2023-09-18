/** @jsxImportSource @emotion/react */
import React from 'react';
import { Member } from '../data/type';
import { imgList } from '../data/variable';
import { memberPosition, memberProfileImg, memberStyle } from '../styles/memberBox';

const MemberBox = ({member, pos}:{member:Member, pos:number}) => {
  return (
    <div css={memberStyle}>
      <img src={process.env.PUBLIC_URL + imgList[pos]} alt={`Image ${pos}`} css={memberProfileImg}/>
      <div>
        <div>{member.studentId} {member.memberName}</div>
        <div css={memberPosition}>{member.position}</div>
      </div>
    </div>
  );
};

export default MemberBox;