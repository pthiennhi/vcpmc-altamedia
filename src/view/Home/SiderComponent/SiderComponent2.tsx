import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { UilAngleRight } from '@iconscout/react-unicons';
import { privatePage } from '@routers/mainRouter';
import { logo } from '@shared/assets/images';
import './style.scss';
import {
  CalendarOutlined,
  ContainerOutlined,
  DatabaseOutlined,
  DollarCircleOutlined,
  FileMarkdownOutlined,
  FolderOutlined,
  InfoCircleOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import MenuCustom from '@layout/Sidebar/ItemMenu';

const SiderComponent2: React.FC<{
  className: string;
  setClassName: (className: string) => void;
}> = props => {
  const location = useLocation();
  const navigate = useNavigate();
  const { className, setClassName } = props;
  const [width, setWidth] = useState<string | number>();
  const onClick = (e: any) => {
    setClassName('sider-component big');
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    if (className === 'sider-component') {
      setWidth(0);
    } else {
      setWidth('100%');
    }
  }, [className]);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={className} id="sider-component" onClick={onClick} onMouseEnter={onClick}>
      <div className="mask" style={{ width }}>
        <div className="logo">
          <img src={logo} alt="logo" width={96} height={96} onClick={() => navigate('/')} />
        </div>
        <MenuCustom listNav={privatePage} location={location.pathname} />
        <div className="iconsSidebar">
          <div className="iconsSidebar__wrapper">
            <div className="iconsSidebar__icon">
              <ContainerOutlined style={{ fontSize: 35 }} />
            </div>
            <div className="iconsSidebar__text_content">Kho bản ghi</div>
          </div>
          <div className="iconsSidebar__wrapper">
            <div className="iconsSidebar__icon">
              <DatabaseOutlined style={{ fontSize: 35 }} />
            </div>
            <div className="iconsSidebar__text_content">Playlist</div>
          </div>
          <div className="iconsSidebar__wrapper">
            <div className="iconsSidebar__icon">
              <CalendarOutlined style={{ fontSize: 35 }} />
            </div>
            <div className="iconsSidebar__text_content">Lập lịch phát</div>
          </div>
          <div className="iconsSidebar__wrapper">
            <div className="iconsSidebar__icon">
              <FileMarkdownOutlined style={{ fontSize: 35 }} />
            </div>
            <div className="iconsSidebar__text_content">Quản lý</div>
          </div>
          <div className="iconsSidebar__wrapper">
            <div onClick={handleMenuClick}>
              <div className="iconsSidebar__icon">
                <DollarCircleOutlined style={{ fontSize: 35 }} />
              </div>

              <div className="iconsSidebar__text_content">Doanh thu</div>
            </div>

            {showMenu && (
              <ul>
                <Link to={'/profit'}>
                  <li style={{ listStyleType: 'none', color: 'white' }}>
                    Quản lý phân phối danh thu
                  </li>
                </Link>
                <Link to={'/history-profit'}>
                  <li style={{ listStyleType: 'none', color: 'white' }}>Lịch sử đối soát</li>
                </Link>
                <Link to={'/report-profit'}>
                  <li style={{ listStyleType: 'none', color: 'white' }}>Báo cáo doanh thu</li>
                </Link>
              </ul>
            )}
          </div>
          <div className="iconsSidebar__wrapper">
            <div className="iconsSidebar__icon">
              <SettingOutlined style={{ fontSize: 35 }} />
            </div>
            <div className="iconsSidebar__text_content">Cài đặt</div>
          </div>
          <div className="iconsSidebar__wrapper">
            <div className="iconsSidebar__icon">
              <InfoCircleOutlined style={{ fontSize: 35 }} />
            </div>
            <div className="iconsSidebar__text_content">Hỗ trợ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiderComponent2;
