'use client';

import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HomeContainer = styled.div`
  width: 100%;
`;

// Hero Section
const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const Greeting = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 400;
`;

const MainTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.3;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const NameHighlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: 400;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const CTAButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing['2xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const Button = styled(Link)<{ $variant?: 'primary' | 'outline' }>`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  transition: all ${({ theme }) => theme.transitions.normal};
  text-align: center;
  cursor: pointer;

  ${({ theme, $variant }) =>
    $variant === 'primary'
      ? `
    background: ${theme.colors.primary};
    color: white;
    border: 2px solid ${theme.colors.primary};
    
    &:hover {
      background: #005bb5;
      border-color: #005bb5;
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.md};
    }
  `
      : `
    background: transparent;
    color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.primary};
    
    &:hover {
      background: ${theme.colors.primary};
      color: white;
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.md};
    }
  `}
`;

// Quote Section
const QuoteSection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`;

const QuoteCard = styled.div`
  padding: ${({ theme }) => theme.spacing['3xl']};
  background: linear-gradient(135deg, rgba(0, 112, 243, 0.08), rgba(0, 168, 255, 0.05));
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
  text-align: center;
`;

const Quote = styled.p`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-style: italic;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.secondary};
  letter-spacing: 0.5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export default function Home() {
  return (
    <HomeContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <Greeting>안녕하세요,</Greeting>
          <MainTitle>
            프론트엔드 개발자
            <br />
            <NameHighlight>한지선</NameHighlight>입니다.
          </MainTitle>
          <SubTitle>사용자의 여정을 코드로 설계하고, 더 나은 경험으로 이끕니다.</SubTitle>
          <Description>
            React와 Next.js를 중심으로 웹 프론트엔드를 개발하며, 보이지 않는 디테일이 좋은 사용자
            경험을 만든다고 믿습니다.
          </Description>
          <CTAButtons>
            <Button href="/about" $variant="primary">
              더 알아보기
            </Button>
            <Button href="/projects" $variant="outline">
              프로젝트 보기
            </Button>
            <Button href="/contact" $variant="outline">
              연락하기
            </Button>
          </CTAButtons>
        </HeroContent>
      </HeroSection>
    </HomeContainer>
  );
}
