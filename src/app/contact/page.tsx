'use client';

import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaBlogger } from 'react-icons/fa6';

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

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.xl};
  min-height: calc(100vh - 200px);
  animation: ${fadeInUp} 0.8s ease-out;
`;

const Header = styled.div`
  text-align: left;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.8;
`;

const SecondarySubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.8;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing['3xl']};
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing['3xl']};
  background: white;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  transition: all ${({ theme }) => theme.transitions.normal};
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(0, 112, 243, 0.1), rgba(0, 168, 255, 0.05));
  border-radius: 50%;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  transition: all ${({ theme }) => theme.transitions.normal};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  ${ContactCard}:hover & {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: scale(1.05);
  }
`;

const ContactInfo = styled.div`
  width: 100%;
`;

const Label = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: 700;
`;

const Value = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: 500;
  word-break: break-all;
  transition: color ${({ theme }) => theme.transitions.fast};

  ${ContactCard}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CopyMessage = styled.div<{ $show: boolean }>`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%) translateY(${({ $show }) => ($show ? 0 : '-10px')});
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  box-shadow: ${({ theme }) => theme.shadows.md};
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transition: all ${({ theme }) => theme.transitions.normal};
  pointer-events: none;
  white-space: nowrap;
  z-index: 10;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${({ theme }) => theme.colors.primary};
  }
`;

export default function ContactPage() {
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const handleEmailClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText('hanccino@gmail.com');
      setShowCopyMessage(true);
      setTimeout(() => setShowCopyMessage(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <ContactContainer>
      <Header>
        <Title>Contact</Title>
        <Subtitle>함께 일하고 싶으신가요?</Subtitle>
        <SecondarySubtitle>
          새로운 도전과 성장을 추구하는 개발자입니다. 흥미로운 프로젝트나 협업 기회가 있다면 언제든
          연락주세요!
        </SecondarySubtitle>
      </Header>

      <ContactGrid>
        <ContactCard href="mailto:hanccino@gmail.com" onClick={handleEmailClick}>
          <CopyMessage $show={showCopyMessage}>📋 이메일 주소가 복사되었습니다!</CopyMessage>
          <IconWrapper>
            <HiOutlineMail />
          </IconWrapper>
          <ContactInfo>
            <Label>이메일</Label>
            <Value>hanccino@gmail.com</Value>
          </ContactInfo>
        </ContactCard>

        <ContactCard href="https://github.com/JisunHan" target="_blank" rel="noopener noreferrer">
          <IconWrapper>
            <FaGithub />
          </IconWrapper>
          <ContactInfo>
            <Label>GitHub</Label>
            <Value>github.com/JisunHan</Value>
          </ContactInfo>
        </ContactCard>

        <ContactCard href="https://velog.io/@hanccino" target="_blank" rel="noopener noreferrer">
          <IconWrapper>
            <FaBlogger />
          </IconWrapper>
          <ContactInfo>
            <Label>Blog</Label>
            <Value>velog.io/@hanccino</Value>
          </ContactInfo>
        </ContactCard>

        <ContactCard
          href="https://linkedin.com/in/jisun-han"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrapper>
            <FaLinkedin />
          </IconWrapper>
          <ContactInfo>
            <Label>LinkedIn</Label>
            <Value>linkedin.com/in/jisun-han</Value>
          </ContactInfo>
        </ContactCard>
      </ContactGrid>
    </ContactContainer>
  );
}
