'use client';

import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LogoImage from '@/assets/images/logo/logo.png';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  z-index: 100;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const NavItem = styled.li<{ $active: boolean }>`
  a {
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.text)};
    font-weight: ${({ $active }) => ($active ? '800' : '600')};
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <HeaderContainer>
      <Nav>
        <Logo href="/">
          <Image src={LogoImage} alt="Logo" width={120} height={40} />
        </Logo>
        <NavList>
          {menuItems.map((item) => (
            <NavItem key={item.path} $active={pathname === item.path}>
              <Link href={item.path}>{item.name}</Link>
            </NavItem>
          ))}
        </NavList>
      </Nav>
    </HeaderContainer>
  );
}
