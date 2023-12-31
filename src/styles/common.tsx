import { css } from "@emotion/react";

export const appContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Pretendard';
  color: #FFFFFF;
  margin: auto auto;
  min-height: 100%;
  height: auto;
  width: 100%;
  position: relative;
  font-size: 16px;
  background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,75,253,1) 100%);
`

export const header = css`
  font-size: 36px;
  line-height: 150%;
  text-align: center;
  font-weight: 700;
  margin-top: 100px;
  margin-bottom: 50px;
`

export const content = css`
  display: flex;
  flex-direction: column;
  padding: 0 100px;
`

export const titleBar = css`
  font-size: 24px;
  line-height: 150%;
  display: flex;
  margin-top: 10px;
  width: 100%
`

export const title = css`
  width: 100px;
  font-weight: 600;
  height: auto;
  text-align: start;
  display: flex;
  align-items: center;
`

export const titleDesc = css`
  margin-left: 50px;
  text-align: start;
  display: flex;
  align-items: center;
`

export const emptyMsg = css`
  font-size: 18px;
  font-weight: 500;
  margin-top: 50px;
`

export const titleBarInner = css`
  display: flex;
  margin: 0 auto;
`