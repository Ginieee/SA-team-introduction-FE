/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import EnabledButton from '../components/EnabledButton';
import InputText from '../components/InputText';
import { Member } from '../data/type';
import { defaultMember } from '../data/variable';
import { appContainer, header, title, titleBar, titleBarInner, titleDesc } from '../styles/common';
import { addMemberContent } from '../styles/memberBox';

const AddPage = () => {
  const navigate = useNavigate();
  const [member, setMember] = useState<Member>(defaultMember);
  const [error, setError] = useState(false);

  const setName = (input: string) => {
    setMember((prev) => ({
      ...prev,
      memberName: input,
    }));
  };
  
  const setStudentId = (input: string) => {
    setMember((prev) => ({
      ...prev,
      studentId: input,
    }));
  };

  const setPosition = (input: string) => {
    setMember((prev) => ({
      ...prev,
      position: input,
    }));
  };

  const handleClick = async () => {
    try {
      await axios.post("http://localhost:8080/signup", member);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  }

  return (
    <div css={appContainer}>
      <div css={header}>
        <div>Add Team Member 🙌🏻</div>
      </div>
      <div css={addMemberContent}>
        <div css={titleBar}>
          <div css={titleBarInner}>
            <div css={title}>이름</div>
            <div css={titleDesc}>
              <InputText placeholder='이름' inputValue={member.memberName} setInputValue={setName}/>
            </div>
          </div>
        </div>
        <div css={titleBar}>
          <div css={titleBarInner}>
            <div css={title}>학번</div>
            <div css={titleDesc}>
              <InputText placeholder='학번' inputValue={member.studentId} setInputValue={setStudentId}/>
            </div>
          </div>
        </div>
        <div css={titleBar}>
          <div css={titleBarInner}>
            <div css={title}>담당</div>
            <div css={titleDesc}>
              <InputText placeholder='담당 포지션' inputValue={member.position} setInputValue={setPosition}/>
            </div>
          </div>
        </div>
      </div>
      <EnabledButton text='팀원 추가하기' onClick={handleClick}/>
      {error && "오류가 발생하였습니다."}
    </div>
  );
};

export default AddPage;