'use client';

import styled, { keyframes } from 'styled-components';

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

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.xl};
  min-height: calc(100vh - 200px);
  animation: ${fadeInUp} 0.8s ease-out;
`;

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PageSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  line-height: 1.8;
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`;

const IntroCard = styled.div`
  background: linear-gradient(135deg, rgba(0, 112, 243, 0.05), rgba(0, 168, 255, 0.03));
  padding: ${({ theme }) => theme.spacing['2xl']};
  border-radius: 12px;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const IntroText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.9;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  &:last-child {
    margin-bottom: 0;
  }
`;

const Highlight = styled.strong`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const Card = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const CardIcon = styled.span`
  font-size: 1.5rem;
`;

const CardContent = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.7;
`;

// 기술 스택
const TechStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing['2xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const TechCategory = styled.div`
  padding: ${({ theme }) => theme.spacing['2xl']};
  background: rgba(0, 112, 243, 0.03);
  border-radius: 12px;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    background: rgba(0, 112, 243, 0.06);
    transform: translateY(-3px);
  }
`;

const CategoryTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const TechBadge = styled.span`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// Career Timeline
const TimelineContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const TimelineItem = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  padding-left: ${({ theme }) => theme.spacing.xl};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -7px;
    top: ${({ theme }) => theme.spacing.xl};
    width: 11px;
    height: 11px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
  }
`;

const TimelineDate = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const TimelineTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const TimelineSubtitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TimelineDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
`;

export default function AboutPage() {
  return (
    <AboutContainer>
      <PageTitle>About Me</PageTitle>
      <PageSubtitle>
        더 나은 프로덕트를 만들기 위해 끊임없이 고민하고 소통하는 개발자입니다.
      </PageSubtitle>

      {/* 소개 */}
      <Section>
        <IntroCard>
          <IntroText>
            안녕하세요, 프론트엔드 개발자 <Highlight>한지선</Highlight>입니다.
          </IntroText>
          <IntroText>
            <Highlight>레거시 환경과 모던 프론트엔드 개발을 모두 경험</Highlight>하며, 기존 시스템의
            구조를 이해하고 새로운 기술로 자연스럽게 확장할 수 있습니다. 기술의 변화보다{' '}
            <Highlight>서비스의 지속성과 사용자 경험</Highlight>을 우선으로 생각합니다.
          </IntroText>
          <IntroText>
            jQuery와 GSAP을 활용한 인터랙티브 UI 구현부터 JSP 기반 구조 개선, React와 TypeScript를
            통한 모던 프론트엔드 개발까지 다양한 프로젝트를 수행했습니다.
          </IntroText>
          <IntroText>
            웹 접근성, 반응형·적응형 UI, 그리고 비동기 데이터 통신에 대한 이해를 바탕으로{' '}
            <Highlight>안정적이고 유지보수 가능한 코드</Highlight>를 지향합니다.
          </IntroText>
          <IntroText>
            사용자 경험을 최우선으로 생각하며, 한 줄의 코드에도 의미를 담아 더 나은 프로덕트를
            만들어갑니다.
          </IntroText>
        </IntroCard>
      </Section>

      {/* 핵심 역량 */}
      <Section>
        <SectionTitle>핵심 역량</SectionTitle>
        <ContentGrid>
          <Card>
            <CardTitle>
              <CardIcon>💡</CardIcon>
              문제 해결
            </CardTitle>
            <CardContent>
              사용자의 &lsquo;불편함&rsquo;을 발견하는 것에서 출발하지만, 그 해결이 서비스의 성장과
              비즈니스 목표로 이어질 수 있도록 고민합니다. 코드 한 줄, 버튼 한 위치에도 경험과
              성과를 함께 담으려 합니다.
            </CardContent>
          </Card>

          <Card>
            <CardTitle>
              <CardIcon>✨</CardIcon>
              디테일
            </CardTitle>
            <CardContent>
              보이지 않는 디테일이 좋은 경험을 만든다고 믿습니다. 사용자의 시선을 먼저 생각합니다.
            </CardContent>
          </Card>

          <Card>
            <CardTitle>
              <CardIcon>🚀</CardIcon>
              성장 마인드
            </CardTitle>
            <CardContent>
              끊임없이 학습하고 발전하는 개발자입니다. 변화하는 기술을 열린 마음으로 받아들이며, 더
              나은 사용자 경험을 위한 성장에 가치를 둡니다.
            </CardContent>
          </Card>
        </ContentGrid>
      </Section>

      {/* 기술 스택 */}
      <Section>
        <SectionTitle>기술 스택</SectionTitle>
        <TechStackGrid>
          <TechCategory>
            <CategoryTitle>💻 Frontend</CategoryTitle>
            <TechList>
              <TechBadge>HTML</TechBadge>
              <TechBadge>CSS (SCSS)</TechBadge>
              <TechBadge>JavaScript (ES6+)</TechBadge>
              <TechBadge>TypeScript</TechBadge>
              <TechBadge>React</TechBadge>
              <TechBadge>jQuery</TechBadge>
              <TechBadge>JSP</TechBadge>
            </TechList>
          </TechCategory>

          <TechCategory>
            <CategoryTitle>🎨 Styling</CategoryTitle>
            <TechList>
              <TechBadge>Styled-Components</TechBadge>
              <TechBadge>Emotion</TechBadge>
              <TechBadge>Tailwind CSS</TechBadge>
            </TechList>
          </TechCategory>

          <TechCategory>
            <CategoryTitle>🛠️ Libraries / Tools</CategoryTitle>
            <TechList>
              <TechBadge>Zustand</TechBadge>
              <TechBadge>React Query</TechBadge>
              <TechBadge>Axios</TechBadge>
              <TechBadge>GSAP</TechBadge>
              <TechBadge>Webpack</TechBadge>
              <TechBadge>Vite</TechBadge>
              <TechBadge>Git</TechBadge>
            </TechList>
          </TechCategory>
        </TechStackGrid>
      </Section>

      {/* 경력 */}
      <Section>
        <SectionTitle>경력</SectionTitle>
        <TimelineContainer>
          <TimelineItem>
            <TimelineDate>2024.03 - 현재</TimelineDate>
            <TimelineTitle>㈜라텔앤드파트너즈</TimelineTitle>
            <TimelineSubtitle>프론트엔드 개발자</TimelineSubtitle>
            <TimelineDescription>
              아큐브(ACUVUE) 웹·앱 5개 플랫폼 운영 및 신규 서비스 구축
            </TimelineDescription>
          </TimelineItem>

          <TimelineItem>
            <TimelineDate>2020.08 - 2023.06</TimelineDate>
            <TimelineTitle>㈜엘루오씨앤씨</TimelineTitle>
            <TimelineSubtitle>웹 퍼블리셔</TimelineSubtitle>
            <TimelineDescription>
              웹 에이전시에서 B2C·B2B 웹사이트 구축 및 운영, HTML·CSS·jQuery 기반 반응형 UI 개발
              수행
            </TimelineDescription>
          </TimelineItem>
        </TimelineContainer>
      </Section>

      {/* 교육 */}
      <Section>
        <SectionTitle>교육</SectionTitle>
        <TimelineContainer>
          <TimelineItem>
            <TimelineDate>2009.03 - 2015.08</TimelineDate>
            <TimelineTitle>한국예술종합학교</TimelineTitle>
            <TimelineSubtitle>협동과정 예술경영과</TimelineSubtitle>
            <TimelineDescription>
              공연기획·마케팅·재무회계 등 예술 비즈니스 전반에 대한 기획 및 운영 역량을 함양
            </TimelineDescription>
          </TimelineItem>
          <TimelineItem>
            <TimelineDate>2023.07 - 2023.10</TimelineDate>
            <TimelineTitle>위코드 부트캠프 48기</TimelineTitle>
            <TimelineSubtitle>프론트엔드 개발자 교육 과정</TimelineSubtitle>
            <TimelineDescription>
              JavaScript 알고리즘과 비즈니스 로직 분석을 통해 프로덕트와 사용자 경험에 대한 이해를
              확장하고 백엔드와 협업하여 React 기반 프로젝트 실행
            </TimelineDescription>
          </TimelineItem>
          <TimelineItem>
            <TimelineDate>2020.02 - 2020.07</TimelineDate>
            <TimelineTitle>더조은컴퓨터아카데미</TimelineTitle>
            <TimelineSubtitle>UI/UX 전문가 양성과정</TimelineSubtitle>
            <TimelineDescription>
              Photoshop·Illustrator를 활용한 UI/UX 디자인과 HTML5·CSS3·JavaScript 기반 코딩 학습 및
              웹표준과 접근성을 준수한 반응형·크로스브라우징 구현 능력 강화
            </TimelineDescription>
          </TimelineItem>
        </TimelineContainer>
      </Section>
    </AboutContainer>
  );
}
