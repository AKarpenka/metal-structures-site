import React from 'react';
import { Image, Space } from "antd";
import {
    LeftOutlined,
    RightOutlined,
    ZoomInOutlined,
    ZoomOutOutlined,
  } from "@ant-design/icons";

import './GridGallery.scss';

export default function GridGallery({images}) {
    const [current, setCurrent] = React.useState(0);

    return (
        <div className='gallery-container'>
            <Image.PreviewGroup
                preview={{
                    toolbarRender: (
                    _,
                    {
                        transform: { scale },
                        actions: {
                        onActive,
                        onZoomOut,
                        onZoomIn,
                        },
                    }
                    ) => (
                        <div className='image-info'>
                            <p>{images[current]?.caption}</p>
                            <Space size={12} className='toolbar-wrapper'>
                                <LeftOutlined onClick={() => onActive?.(-1)} />
                                <RightOutlined onClick={() => onActive?.(1)} />
                                <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                                <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
                            </Space>
                        </div>
                    ),
                    onChange: (index) => {
                        setCurrent(index);
                    },
                }}
            >
                {images.map((item) => (
                        <Image key={item} src={item.src}/>
                ))}
            </Image.PreviewGroup>
        </div>
    );
}
