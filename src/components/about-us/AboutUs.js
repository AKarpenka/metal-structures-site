import React from 'react';
import './AboutUs.scss';

class AboutUs extends React.Component {
    static ololo() {}

    render() {
        return (
            <div className="about-us-rect">
                <div className="max-width-600 text-center">
                    <div>
                        <p className="about-us-header font-s-28">
                            ПРОИЗВОДСТВО МЕТАЛЛОКОНСТРУКЦИЙ ПО ИНДИВИДУАЛЬНЫМ ЗАКАЗАМ
                        </p>
                        <div className="about-us-text font-s-18 mt-3">
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
                            <p className="mt-4">
                                <span className="dashed-border font-s-14">
                                    ПОДРОБНЕЕ О НАС {'>'}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AboutUs;
