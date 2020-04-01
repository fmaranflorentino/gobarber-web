import styled, { css } from 'styled-components';
import PerfectScrollBar from 'react-perfect-scrollbar';

import { lighten } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${(props) =>
    props.hasUnread &&
    css`
      &::after {
        background: #ff892e;
        border-radius: 50%;
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
      }
    `}
`;

export const NotificationList = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;

  width: 260px;
  position: absolute;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  padding: 15px 5px;

  &::before {
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);

    position: absolute;
    content: '';
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    font-size: 12px;
    opacity: 0.6;
  }

  button {
    background: none;
    border: 0;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 12px;
    color: ${lighten(0.2, '#7159c1')};
    padding: 0 5px;
    margin: 0 5px;
  }

  ${(props) =>
    props.unread &&
    css`
      &::after {
        background: #ff892e;
        border-radius: 50%;
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
      }
    `}
`;
