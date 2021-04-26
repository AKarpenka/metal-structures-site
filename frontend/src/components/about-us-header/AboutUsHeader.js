/* eslint-disable react/self-closing-comp */
import React from 'react';
import './AboutUsHeader.scss';

class AboutUsHeader extends React.Component {
    static ololo() {}

    render() {
        return (
            <div className="about-us-header-rect">
                <div className="max-width-700 text-center">
                    <div>
                        <p className="about-us-header font-s-28">
                            ПРОИЗВОДСТВО МЕТАЛЛОКОНСТРУКЦИЙ ПО ИНДИВИДУАЛЬНЫМ ЗАКАЗАМ
                        </p>
                        <div className="about-us-text font-s-18 margin-top-20">
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
                                <span className="dashed-border-white font-s-14">
                                    ПОДРОБНЕЕ О НАС
                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AboutUsHeader;
