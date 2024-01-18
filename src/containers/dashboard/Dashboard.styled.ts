import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(p) => p.theme.primary};
  color: ${(p) => p.theme.abs.white};
`;

export const Main = styled.main`
  background-color: #f5f7f9;

  .profile {
    @media (min-width: 1050px) {
      grid-column: span 3 / span 3;
    }
  }

  .applications {
    @media (min-width: 1050px) {
      grid-column: span 6 / span 6;
    }
  }

  .recentlyViewed {
    @media (min-width: 1050px) {
      grid-column: span 3 / span 3;
    }
  }

  .mediaLocker {
    @media (min-width: 1050px) {
      grid-column: span 3 / span 3;
    }
  }

  .messageInbox {
    @media (min-width: 1050px) {
      grid-column: span 9 / span 9;
    }
  }
`;

export const Nav = styled.nav`
  background-color: ${(p) => p.theme.pure};

  .nav-item {
    padding: 16px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    font-size: 12px;
    color: ${(props) => props.theme.primary};

    .text {
      color: ${(props) => props.theme.text};

      &:hover {
        color: ${(props) => props.theme.primary};
        transition: all 0.3s ease;
      }
    }
  }
`;

export const Profile = styled.div`
  background-color: ${(props) => props.theme.pure};

  .profile-initials {
    background-color: ${(props) => props.theme.abs.lightBlue};
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 22px;
    padding: 1em;
    display: inline-block;
    border-radius: 100%;
  }

  .active {
    border-left: 4px solid ${(p) => p.theme.primary};
    background-color: ${(p) => p.theme.abs.lightBlue};
  }

  li:hover {
    border-left: 4px solid ${(p) => p.theme.primary};
    background-color: ${(p) => p.theme.abs.lightBlue};
    cursor: pointer;
    transition: all 0.3s ease;
  }
`;

export const MediaLockerContainer = styled.div`
  background-color: ${(props) => props.theme.pure};

  li {
    cursor: pointer;
  }

  .icon {
    color: ${(props) => props.theme.primary};
  }
`;

export const RecentlyViewedContainer = styled.div`
  background-color: ${(props) => props.theme.pure};

  li:hover {
    color: ${(props) => props.theme.primary};
    transition: all 0.3s ease;
    cursor: pointer;
  }
`;

export const MessageInboxContainer = styled.div`
  background-color: ${(props) => props.theme.pure};

  li {
    color: #98a9bb;
    cursor: pointer;
  }

  .production-name {
    color: #3b4f64;
  }

  .unread {
    h4 {
      color: ${(props) => props.theme.primary};
    }

    .production-name {
      font-weight: 600;
    }
  }
`;

export const ApplicationContainer = styled.div`
  background-color: ${(props) => props.theme.pure};
`;
