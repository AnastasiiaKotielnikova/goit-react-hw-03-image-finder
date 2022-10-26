import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  flex-basic: calc ((100% - 4 * 30px) / 4);
  margin-left: 30px;
  margin-bottom: 30px;
  border-radius: 10px;
  overlow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  &:hover {
    transform: scale(1.04);
    cursor: zoom-in;
  }
`;

export const Image = styled.img`
  width: 350px;
  height: 260px;
  object-fit: cover;
  transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 4px;
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
