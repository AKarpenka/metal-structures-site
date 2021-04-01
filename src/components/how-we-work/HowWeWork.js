/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import HowWeWork1 from '../../assets/images/how-we-work/how_we_work1.png';
import HowWeWork2 from '../../assets/images/how-we-work/how_we_work2.png';
import HowWeWork3 from '../../assets/images/how-we-work/how_we_work3.png';
import HowWeWork4 from '../../assets/images/how-we-work/how_we_work4.png';
import HowWeWork5 from '../../assets/images/how-we-work/how_we_work5.png';
import HowWeWork6 from '../../assets/images/how-we-work/how_we_work6.png';
import './HowWeWork.scss';

class HowWeWork extends React.Component {
    render() {
        return (
            <div className="how-we-work-rect">
                <div className="max-width-1090">
                    <div className="corner-header">
                        <div className="corner-left" />
                        <div className="corner-text">
                            <div>КАК</div>
                            <div>МЫ РАБОТАЕМ?</div>
                        </div>
                    </div>
                    <div className="steps mx-auto">
                        <div className="left-block">
                            <div className="d-flex align-items-center">
                                <img src={HowWeWork2} alt="img" />
                                <p>Мы уточняем детали и делаем замеры</p>
                                <div className="step">2</div>
                            </div>
                            <div className="d-flex align-items-center">
                                <img src={HowWeWork4} alt="img" />
                                <p>Утверждаем с Вами и заключаем договор</p>
                                <div className="step">4</div>
                            </div>
                            <div className="d-flex align-items-center">
                                <img src={HowWeWork6} alt="img" />
                                <p>Приезжаем к Вам и устанавливаем</p>
                                <div className="step">6</div>
                            </div>
                        </div>
                        <div className="lines">
                            <div>
                                <div className="left-lines" />
                                <div className="left-lines" />
                            </div>
                            <div>
                                <div className="right-lines" />
                                <div className="right-lines" />
                            </div>
                        </div>
                        <div className="right-block">
                            <div className="d-flex align-items-center">
                                <div className="step pl-6px">1</div>
                                <p>Оставляете заявку на сайте или звоните нам</p>
                                <img src={HowWeWork1} alt="img" />
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="step">3</div>
                                <p>Рассчитываем стоимость проека</p>
                                <img src={HowWeWork3} alt="img" />
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="step">5</div>
                                <p>Закупаем материалы и выполняем работу согласно проекту</p>
                                <img src={HowWeWork5} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HowWeWork;
