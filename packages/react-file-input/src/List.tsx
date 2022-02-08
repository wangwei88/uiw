import React from 'react';
import Icon from '@uiw/react-icon';
import { FileListProps } from './types';
import './style/index.less';

const Picture = (props: FileListProps) => {
  const {
    className,
    prefixCls = 'w-fileinput-list',
    dataList = [],
    uploadType,
    children,
    onPreview,
    onAdd,
    onRemove,
  } = props;

  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();

  return (
    <div className={cls}>
      {children &&
        React.isValidElement(children) &&
        React.cloneElement(children, {
          onClick: onAdd,
        })}
      <div>
        {dataList.map((item, index) => (
          <div className={`${cls}_${uploadType}`} key={index}>
            {uploadType === 'picture' && (
              <div className={`${cls}_info ${cls}_${uploadType}_info`}>
                <img src={item['dataURL']} alt="" />
                {onPreview && (
                  <div className={`${cls}_actions`}>
                    <span className={`${cls}_actions_search`} onClick={() => onPreview(item)}>
                      <Icon type="search" style={{ color: '#fff', fontSize: 16 }} />
                    </span>
                  </div>
                )}
              </div>
            )}
            <div className={`${cls}_${uploadType}_text`}>{item.name}</div>
            <div className={`${cls}_${uploadType}_icon`} onClick={() => onRemove(index)}>
              <Icon type="delete" style={{ color: '#999' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Picture;