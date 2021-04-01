/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import WhyWeCard from '../why-we-card/WhyWeCard';
import Workers from '../../assets/images/why-we/workers.png';
import Chart from '../../assets/images/why-we/chart.png';
import Wallet from '../../assets/images/why-we/wallet.png';
import Calendar from '../../assets/images/why-we/calendar.png';
import Safe from '../../assets/images/why-we/safe.png';
import Diploma from '../../assets/images/why-we/diploma.png';
import './WhyWe.scss';

class WhyWe extends React.Component {
    render() {
        return (
            <div className="why-we-rect">
                <div className="max-width-1090">
                    <div className="corner-header text-right">
                        <div className="corner-right" />
                        <div className="corner-text">
                            <div>ПОЧЕМУ ВЫБИРАЮТ</div>
                            <div>ИМЕННО НАС?</div>
                        </div>
                    </div>
                    <div className="max-width-680">
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <WhyWeCard icon={Workers} text="Опыт сотрудников более 15 лет" />
                            <WhyWeCard icon={Chart} text="Быстрый расчет заказов" />
                            <WhyWeCard
                                icon={Wallet}
                                text={
                                    'Доступен наличный или безналичный расчет.\nРассрочка платежа'
                                }
                            />
                            <WhyWeCard
                                icon={Calendar}
                                text="Выполнение работы в установленные сроки"
                            />
                            <WhyWeCard icon={Safe} text="Гарантия 2 года" />
                            <WhyWeCard icon={Diploma} text="Высокое качество работ" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WhyWe;
