import styled from '@emotion/styled';

const RecommendationWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-right: 2.4rem;
`;

const CarouselBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.primary.gray_300};
  width: 200px;
  height: 200px;
`;

export { RecommendationWrapper, CarouselBox };
