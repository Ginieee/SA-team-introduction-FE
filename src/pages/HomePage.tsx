/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EnabledButton from '../components/EnabledButton';
import MemberBox from '../components/MemberBox';
import { Member } from '../data/type';
import { appContainer, content, header, title, titleBar, titleDesc, emptyMsg } from '../styles/common';
import { memberBoxContainer } from '../styles/memberBox';

const HomePage = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState<Member[]>([]);
  const testMember:Member = {
    studentId: '202135503',
    memberName: '강어진',
    position: 'Front-end'
  }

  useEffect(()=>{
    const fetchAllMembers = async () => {
      try {
        const res = await axios.get("http://15.164.159.9:9000/members");
        console.log("GET MEMBERS ==== ", res.data.result);
        setMembers(res.data.result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllMembers();
  }, []);

  return (
    <div css={appContainer}>
      <div css={header}>
        <div>Our Team Information 😎</div>
      </div>
      <div css={content}>
        <div css={titleBar}>
          <div css={title}>Name</div>
          <div css={titleDesc}>오아시스</div>
        </div>
        <div css={titleBar}>
          <div css={title}>Introduce</div>
          <div css={titleDesc}>안녕하세요! 이번 시스템 아키텍쳐 수업에 참여하게 된 팀 오아시스입니다.<br/>저희 팀은 오디오와 관련한 API를 이용하여 시스템 아키텍쳐 수업에서 텀 프로젝트를 진행하려고 합니다.</div>
        </div>
        <div css={titleBar}>
          <div css={title}>Members</div>
          <div css={titleDesc}>{members.length}명</div>
        </div>
      </div>
      <div css={memberBoxContainer}>
        {
          members.length > 0 ? members.map((item,idx)=>(
            <MemberBox member={item} pos={idx}/>
          )) : <div css={emptyMsg}>아직 등록된 멤버가 없어요. 😥</div>
        }
        {/* <MemberBox member={testMember} pos={0}/>
        <MemberBox member={testMember} pos={1}/>
        <MemberBox member={testMember} pos={2}/>
        <MemberBox member={testMember} pos={3}/>
        <MemberBox member={testMember} pos={4}/>
        <MemberBox member={testMember} pos={5}/> */}
      </div>
      <EnabledButton text='팀원 추가하기' onClick={()=>{navigate('/add')}}/>
    </div>
  );
};

export default HomePage;