import styled from '@emotion/styled';

export const BtnLoadMore = styled.button`
  display: block;
  margin: 0 auto 20px auto;
  padding: 5px;
  width: 130px;
  height: 35px;
  text-align: center;
  font-size: 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border-style: none;
  color: #ffffff;
  background: rgba(218, 242, 4, 0.802);
  background: linear-gradient(
    to right,
    rgba(34, 193, 195, 0.7539390756302521) 25%,
    rgba(218, 242, 4, 0.802) 75%
  );
  &:hover,
  &:focus {
    transform: scale(1.1);
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
  }
`;
