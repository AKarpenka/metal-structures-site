import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUsHeader.scss';

export default function AboutUsHeader() {
    const navigate = useNavigate();
    return (
        <div className="about-us-header-rect">
            <div className="max-width text-center">
                <div>
                    <p className="about-us-header font-s-20">
                        ПРОИЗВОДСТВО МЕТАЛЛОКОНСТРУКЦИЙ <br></br>ПО ИНДИВИДУАЛЬНЫМ ЗАКАЗАМ
                    </p>
                    <div className="about-us-text font-s-16 margin-top-20">
                        <p className="mb-0">
                            Опыт работы более 15 лет на рынке металлоконструкций. При
                            производстве используются современные технологии и уделяется
                            внимание тщательному контролю качества производимой продукции.
                        </p>
                        <p className="mb-0">
                            Всегда готовы проконсультировать и помочь в осуществлении наиболее
                            оптимального выбора!
                        </p>
                        <p className="mb-0">Работаем по Гомелю и Гомельской области.</p>
                        <p className="margin-top-20">
                            <span
                                className="dashed-border-white font-s-16"
                                onClick={() => navigate('/about-us')}
                            >
                                ПОДРОБНЕЕ О НАС
                                <i className="fa fa-chevron-right" aria-hidden="true" />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
