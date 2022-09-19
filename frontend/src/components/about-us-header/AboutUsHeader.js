import React from 'react';
import { useHistory } from 'react-router';
import './AboutUsHeader.scss';

export default function AboutUsHeader() {
    const history = useHistory();
    return (
        <div className="about-us-header-rect">
            <div className="max-width-700 text-center">
                <div>
                    <p className="about-us-header font-s-18">
                        ПРОИЗВОДСТВО МЕТАЛЛОКОНСТРУКЦИЙ <br></br>ПО ИНДИВИДУАЛЬНЫМ ЗАКАЗАМ
                    </p>
                    <div className="about-us-text font-s-14 margin-top-20">
                        <p className="mb-0">
                            Опыт работы более 15 лет на рынке металлоконструкций. <br></br>При
                            производстве используются современные технологии и уделяется
                            внимание тщательному контролю качества производимой продукции.
                        </p>
                        <p className="mb-0">
                            Всегда готовы проконсультировать и помочь <br></br> в осуществлении наиболее
                            оптимального выбора!
                        </p>
                        <p className="mb-0">Работаем по Гомелю и Гомельской области.</p>
                        <p className="margin-top-20">
                            <span
                                className="dashed-border-white font-s-14"
                                onClick={() => history.push('/about-us')}
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
